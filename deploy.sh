#!/bin/bash

set -e

# Configuration
REMOTE_USER="amanj"
REMOTE_HOST="192.168.0.100"
IMAGE_NAME="metabond-frontend"
IMAGE_TAG="latest"
CONTAINER_NAME="metabond-frontend"
REMOTE_PORT="6060"
REMOTE_BUILD_DIR="/tmp/metabond-build-$(date +%s)"
LOG_FILE="deploy-$(date +%Y%m%d-%H%M%S).log"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Error handling function
error_exit() {
  echo -e "${RED}❌ ERROR: $1${NC}" | tee -a ${LOG_FILE}
  exit 1
}

# Success message function
success_msg() {
  echo -e "${GREEN}✅ $1${NC}" | tee -a ${LOG_FILE}
}

# Info message function
info_msg() {
  echo -e "${YELLOW}ℹ️  $1${NC}" | tee -a ${LOG_FILE}
}

# Log function
log() {
  echo "$1" | tee -a ${LOG_FILE}
}

# Cleanup function
cleanup() {
  info_msg "Cleaning up remote build directory..."
  ssh ${REMOTE_USER}@${REMOTE_HOST} "rm -rf ${REMOTE_BUILD_DIR}" 2>/dev/null || true
  success_msg "Remote cleanup complete"
}

trap cleanup EXIT

# Validation checks
validate_prerequisites() {
  log "=========================================="
  log "Validating prerequisites..."
  log "=========================================="
  
  # Check if scp is available
  if ! command -v scp &> /dev/null; then
    error_exit "SCP is not available. Please install OpenSSH client."
  fi
  success_msg "SCP is available"
  
  # Check if ssh is available
  if ! command -v ssh &> /dev/null; then
    error_exit "SSH is not available. Please install OpenSSH client."
  fi
  success_msg "SSH is available"
  
  # Test SSH connectivity
  if ! ssh -o ConnectTimeout=5 ${REMOTE_USER}@${REMOTE_HOST} "echo 'SSH connection OK'" &>/dev/null; then
    error_exit "Cannot connect to remote server ${REMOTE_USER}@${REMOTE_HOST}. Check network and SSH credentials."
  fi
  success_msg "Remote server connectivity verified"
  
  # Check if docker is running on remote
  if ! ssh ${REMOTE_USER}@${REMOTE_HOST} "docker ps &>/dev/null"; then
    error_exit "Docker is not running on remote server or user ${REMOTE_USER} cannot access Docker. Check Docker daemon and user permissions."
  fi
  success_msg "Remote Docker daemon is accessible"
  
  log ""
}

# Prepare source files
prepare_source() {
  log "=========================================="
  log "Preparing source files for remote build..."
  log "=========================================="
  
  # Check required files exist locally
  if [ ! -f "Dockerfile" ]; then
    error_exit "Dockerfile not found in current directory"
  fi
  
  if [ ! -f "package.json" ]; then
    error_exit "package.json not found in current directory"
  fi
  
  if [ ! -f "package-lock.json" ]; then
    error_exit "package-lock.json not found. Run 'npm install' to generate it."
  fi
  
  if [ ! -f "vite.config.js" ]; then
    error_exit "vite.config.js not found in current directory"
  fi
  
  if [ ! -f "index.html" ]; then
    error_exit "index.html not found in current directory"
  fi
  
  if [ ! -d "nginx" ]; then
    error_exit "nginx directory not found in current directory"
  fi
  
  if [ ! -d "src" ]; then
    error_exit "src directory not found in current directory"
  fi
  
  success_msg "Source files verified"
  log ""
}

# Transfer source to remote
transfer_source() {
  log "=========================================="
  log "Transferring source files to remote build directory..."
  log "=========================================="
  
  # Create remote build directory
  if ! ssh ${REMOTE_USER}@${REMOTE_HOST} "mkdir -p ${REMOTE_BUILD_DIR}"; then
    error_exit "Failed to create remote build directory"
  fi
  
  # Copy Dockerfile
  if ! scp Dockerfile ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/; then
    error_exit "Failed to transfer Dockerfile"
  fi
  success_msg "Dockerfile transferred"
  
  # Copy package files (including package-lock.json)
  if ! scp package.json package-lock.json ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/ 2>&1 | tee -a ${LOG_FILE}; then
    error_exit "Failed to transfer package files"
  fi
  success_msg "Package files transferred (package.json, package-lock.json)"
  
  # Copy vite config and index.html
  if ! scp vite.config.js index.html ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/ 2>&1 | tee -a ${LOG_FILE}; then
    error_exit "Failed to transfer vite config files"
  fi
  success_msg "Vite config and index.html transferred"
  
  # Copy .npmrc if exists (for private registries)
  if [ -f ".npmrc" ]; then
    if scp .npmrc ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/ 2>&1 | tee -a ${LOG_FILE}; then
      success_msg ".npmrc transferred"
    fi
  fi
  
  # Copy nginx config
  if ! scp -r nginx ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/; then
    error_exit "Failed to transfer nginx directory"
  fi
  success_msg "Nginx config transferred"
  
  # Copy source code (src only, no public folder needed for Vite)
  if ! scp -r src ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/ 2>&1 | tee -a ${LOG_FILE}; then
    error_exit "Failed to transfer source directories"
  fi
  success_msg "Source directories transferred (src)"
  
  # Copy public folder if exists
  if [ -d "public" ]; then
    if ! scp -r public ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/ 2>&1 | tee -a ${LOG_FILE}; then
      error_exit "Failed to transfer public directory"
    fi
    success_msg "Public directory transferred"
  fi
  
  log ""
}

# Build on remote
build_on_remote() {
  log "=========================================="
  log "Building Docker image on remote server..."
  log "=========================================="
  
  # Run build and capture exit code properly
  set +e  # Temporarily disable exit on error to capture the result
  ssh ${REMOTE_USER}@${REMOTE_HOST} bash << EOF 2>&1 | tee -a ${LOG_FILE}
    set -e
    BUILD_DIR="${REMOTE_BUILD_DIR}"
    IMAGE_NAME="${IMAGE_NAME}"
    IMAGE_TAG="${IMAGE_TAG}"
    
    echo "Changing to build directory: \${BUILD_DIR}"
    cd "\${BUILD_DIR}" || exit 1
    
    echo "Verifying build files..."
    ls -la
    
    echo ""
    echo "Building Docker image: \${IMAGE_NAME}:\${IMAGE_TAG}"
    docker build --no-cache --progress=plain -t "\${IMAGE_NAME}:\${IMAGE_TAG}" . 2>&1
    BUILD_EXIT_CODE=\$?
    
    if [ \$BUILD_EXIT_CODE -ne 0 ]; then
      echo "ERROR: Docker build failed with exit code \$BUILD_EXIT_CODE"
      exit \$BUILD_EXIT_CODE
    fi
    
    echo "✅ Image built successfully"
    
    echo "Verifying image..."
    if ! docker images | grep -q "\${IMAGE_NAME}"; then
      echo "ERROR: Image not found after build"
      exit 1
    fi
    echo "✅ Image verified"
    docker images | grep "\${IMAGE_NAME}"
EOF
  
  BUILD_RESULT=$?
  set -e  # Re-enable exit on error
  
  if [ $BUILD_RESULT -ne 0 ]; then
    error_exit "Remote build failed with exit code ${BUILD_RESULT}. Common causes:
    - package.json and package-lock.json are out of sync
    - Run 'npm install' locally to update package-lock.json
    - Missing dependencies in package-lock.json
    Review the build logs above for details."
  fi
  
  success_msg "Remote build completed successfully"
  log ""
}

# Deploy on remote server
deploy_remote() {
  log "=========================================="
  log "Deploying on remote server..."
  log "=========================================="
  
  set +e  # Temporarily disable exit on error
  ssh ${REMOTE_USER}@${REMOTE_HOST} bash << EOF 2>&1 | tee -a ${LOG_FILE}
    set -e
    
    CONTAINER_NAME="${CONTAINER_NAME}"
    IMAGE_NAME="${IMAGE_NAME}"
    IMAGE_TAG="${IMAGE_TAG}"
    REMOTE_PORT="${REMOTE_PORT}"
    
    echo "Stopping existing container (if any)..."
    docker stop "\${CONTAINER_NAME}" 2>/dev/null || true
    docker rm "\${CONTAINER_NAME}" 2>/dev/null || true
    echo "✅ Old container removed (if existed)"
    
    echo "Running new container..."
    if ! docker run -d \
      --name "\${CONTAINER_NAME}" \
      -p "\${REMOTE_PORT}:80" \
      --restart unless-stopped \
      "\${IMAGE_NAME}:\${IMAGE_TAG}"; then
      echo "ERROR: Failed to run container"
      exit 1
    fi
    echo "✅ Container started successfully"
    
    echo "Waiting for container to stabilize..."
    sleep 3
    
    echo "Verifying container status..."
    if ! docker ps | grep -q "\${CONTAINER_NAME}"; then
      echo "ERROR: Container is not running"
      docker logs "\${CONTAINER_NAME}" || true
      exit 1
    fi
    echo "✅ Container is running"
    
    echo "Checking container health..."
    HEALTH_STATUS=\$(docker inspect --format='{{.State.Health.Status}}' "\${CONTAINER_NAME}" 2>/dev/null || echo "none")
    echo "Health status: \${HEALTH_STATUS}"
EOF
  
  DEPLOY_RESULT=$?
  set -e  # Re-enable exit on error
  
  if [ $DEPLOY_RESULT -ne 0 ]; then
    error_exit "Remote deployment failed with exit code ${DEPLOY_RESULT}. Check logs above."
  fi
  
  success_msg "Remote deployment completed successfully"
  log ""
}

# Main execution
main() {
  log "=========================================="
  log "Metabond Frontend Deployment Script (Remote Build)"
  log "Started at: $(date)"
  log "=========================================="
  log ""
  
  validate_prerequisites
  prepare_source
  transfer_source
  build_on_remote
  deploy_remote
  
  log "=========================================="
  success_msg "Deployment successful!"
  success_msg "App is running on http://${REMOTE_HOST}:${REMOTE_PORT}"
  log "Deployment logs saved to: ${LOG_FILE}"
  log "=========================================="
}

main
