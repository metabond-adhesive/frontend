#!/bin/bash

set -e

# Usage function
usage() {
  cat << EOF
Usage: $0 [-u username] [-t token] [-h]

Build Docker image and push to DockerHub.

Options:
  -u USERNAME    DockerHub username (will prompt if not provided)
  -t TOKEN       DockerHub token/password (will prompt if not provided)
  -h            Show this help message

Examples:
  $0                                    # Interactive mode (prompts for all inputs)
  $0 -u myuser -t mytoken              # Provide credentials via command line
  
EOF
  exit 0
}

# Parse command line arguments
DOCKERHUB_USERNAME=""
DOCKERHUB_TOKEN=""

while getopts "u:t:h" opt; do
  case $opt in
    u) DOCKERHUB_USERNAME="$OPTARG" ;;
    t) DOCKERHUB_TOKEN="$OPTARG" ;;
    h) usage ;;
    \?) echo "Invalid option: -$OPTARG" >&2; exit 1 ;;
  esac
done

# Configuration
IMAGE_NAME="metabond-frontend"
IMAGE_TAG="latest"
REMOTE_USER="amanj"
BUILD_LOCATION=""
REMOTE_HOST=""
REMOTE_BUILD_DIR="/tmp/metabond-build-$(date +%s)"
LOG_DIR="logs"
LOG_FILE="${LOG_DIR}/build-push-$(date +%Y%m%d-%H%M%S).log"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure log directory exists early so tee can write to it
mkdir -p "${LOG_DIR}"

# Error handling function
error_exit() {
  echo -e "${RED}❌ ERROR: $1${NC}" | tee -a "${LOG_FILE}"
  exit 1
}

# Success message function
success_msg() {
  echo -e "${GREEN}✅ $1${NC}" | tee -a "${LOG_FILE}"
}

# Info message function
info_msg() {
  echo -e "${YELLOW}ℹ️  $1${NC}" | tee -a "${LOG_FILE}"
}

# Log function
log() {
  echo "$1" | tee -a "${LOG_FILE}"
}

# Prompt for user inputs
prompt_inputs() {
  log "=========================================="
  log "Build and Push Configuration"
  log "=========================================="
  log ""
  
  # Prompt for DockerHub credentials if not provided
  if [ -z "$DOCKERHUB_USERNAME" ]; then
    echo -e "${BLUE}Enter DockerHub username:${NC}"
    read -r DOCKERHUB_USERNAME
    if [ -z "$DOCKERHUB_USERNAME" ]; then
      error_exit "DockerHub username is required"
    fi
  fi
  
  if [ -z "$DOCKERHUB_TOKEN" ]; then
    echo -e "${BLUE}Enter DockerHub token/password:${NC}"
    read -rs DOCKERHUB_TOKEN
    echo ""
    if [ -z "$DOCKERHUB_TOKEN" ]; then
      error_exit "DockerHub token is required"
    fi
  fi
  
  # Set DockerHub repo name
  DOCKERHUB_REPO="${DOCKERHUB_USERNAME}/${IMAGE_NAME}"
  
  # Prompt for build location
  echo -e "${BLUE}Where do you want to build the image?${NC}"
  echo "1) Local machine"
  echo "2) Remote server"
  read -p "Enter choice (1 or 2): " build_choice
  
  case $build_choice in
    1)
      BUILD_LOCATION="local"
      info_msg "Building locally"
      ;;
    2)
      BUILD_LOCATION="remote"
      echo -e "${BLUE}Enter remote server IP address:${NC}"
      read -r REMOTE_HOST
      if [ -z "$REMOTE_HOST" ]; then
        error_exit "Remote server IP is required"
      fi
      info_msg "Building on remote server: ${REMOTE_HOST}"
      ;;
    *)
      error_exit "Invalid choice. Please select 1 or 2"
      ;;
  esac
  
  log ""
}

# Cleanup function
cleanup() {
  if [ "$BUILD_LOCATION" = "remote" ]; then
    info_msg "Cleaning up remote build directory..."
    ssh ${REMOTE_USER}@${REMOTE_HOST} "rm -rf ${REMOTE_BUILD_DIR}" 2>/dev/null || true
    success_msg "Remote cleanup complete"
  fi
}

trap cleanup EXIT

# Validation checks
validate_prerequisites() {
  log "=========================================="
  log "Validating prerequisites..."
  log "=========================================="
  
  if [ "$BUILD_LOCATION" = "local" ]; then
    # Check if docker is available locally
    if ! command -v docker &> /dev/null; then
      error_exit "Docker is not available. Please install Docker."
    fi
    success_msg "Docker is available locally"
    
    # Check if docker is running locally
    if ! docker ps &>/dev/null; then
      error_exit "Docker daemon is not running. Please start Docker."
    fi
    success_msg "Docker daemon is running"
  else
    # Remote build checks
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
  fi
  
  log ""
}

# Prepare source files
prepare_source() {
  log "=========================================="
  log "Preparing source files for build..."
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
  if ! scp package.json package-lock.json ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/ 2>&1 | tee -a "${LOG_FILE}"; then
    error_exit "Failed to transfer package files"
  fi
  success_msg "Package files transferred (package.json, package-lock.json)"
  
  # Copy vite config and index.html
  if ! scp vite.config.js index.html ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/ 2>&1 | tee -a "${LOG_FILE}"; then
    error_exit "Failed to transfer vite config files"
  fi
  success_msg "Vite config and index.html transferred"
  
  # Copy .npmrc if exists (for private registries)
  if [ -f ".npmrc" ]; then
    if scp .npmrc ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/ 2>&1 | tee -a "${LOG_FILE}"; then
      success_msg ".npmrc transferred"
    fi
  fi
  
  # Copy nginx config
  if ! scp -r nginx ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/; then
    error_exit "Failed to transfer nginx directory"
  fi
  success_msg "Nginx config transferred"
  
  # Copy source code (src only, no public folder needed for Vite)
  if ! scp -r src ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/ 2>&1 | tee -a "${LOG_FILE}"; then
    error_exit "Failed to transfer source directories"
  fi
  success_msg "Source directories transferred (src)"
  
  # Copy public folder if exists
  if [ -d "public" ]; then
    if ! scp -r public ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_BUILD_DIR}/ 2>&1 | tee -a "${LOG_FILE}"; then
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
  ssh ${REMOTE_USER}@${REMOTE_HOST} bash << EOF 2>&1 | tee -a "${LOG_FILE}"
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

# Build locally
build_locally() {
  log "=========================================="
  log "Building Docker image locally..."
  log "=========================================="
  
  log "Building Docker image: ${IMAGE_NAME}:${IMAGE_TAG}"
  if ! docker build --no-cache --progress=plain -t "${IMAGE_NAME}:${IMAGE_TAG}" . 2>&1 | tee -a "${LOG_FILE}"; then
    error_exit "Local build failed. Review the build logs above for details."
  fi
  
  success_msg "Local build completed successfully"
  
  log "Verifying image..."
  if ! docker images | grep -q "${IMAGE_NAME}"; then
    error_exit "Image not found after build"
  fi
  success_msg "Image verified"
  docker images | grep "${IMAGE_NAME}" | tee -a "${LOG_FILE}"
  
  log ""
}

# Push to DockerHub from local
push_locally() {
  log "=========================================="
  log "Pushing image to DockerHub from local..."
  log "=========================================="
  
  log "Logging in to DockerHub..."
  if ! echo "${DOCKERHUB_TOKEN}" | docker login -u "${DOCKERHUB_USERNAME}" --password-stdin 2>&1 | tee -a "${LOG_FILE}"; then
    error_exit "Failed to login to DockerHub"
  fi
  success_msg "Logged in to DockerHub successfully"
  
  log "Tagging image for DockerHub..."
  if ! docker tag "${IMAGE_NAME}:${IMAGE_TAG}" "${DOCKERHUB_REPO}:${IMAGE_TAG}"; then
    error_exit "Failed to tag image"
  fi
  success_msg "Image tagged: ${DOCKERHUB_REPO}:${IMAGE_TAG}"
  
  log "Pushing image to DockerHub..."
  if ! docker push "${DOCKERHUB_REPO}:${IMAGE_TAG}" 2>&1 | tee -a "${LOG_FILE}"; then
    error_exit "Failed to push image to DockerHub"
  fi
  success_msg "Image pushed successfully to DockerHub"
  
  log "Cleaning up local tags..."
  docker rmi "${DOCKERHUB_REPO}:${IMAGE_TAG}" 2>/dev/null || true
  
  log "Logging out from DockerHub..."
  docker logout 2>&1 | tee -a "${LOG_FILE}"
  
  log ""
}

# Push to DockerHub from remote
push_to_dockerhub() {
  log "=========================================="
  log "Pushing image to DockerHub from remote..."
  log "=========================================="
  
  set +e  # Temporarily disable exit on error
  ssh ${REMOTE_USER}@${REMOTE_HOST} bash << EOF 2>&1 | tee -a "${LOG_FILE}"
    set -e
    
    IMAGE_NAME="${IMAGE_NAME}"
    IMAGE_TAG="${IMAGE_TAG}"
    DOCKERHUB_USERNAME="${DOCKERHUB_USERNAME}"
    DOCKERHUB_TOKEN="${DOCKERHUB_TOKEN}"
    DOCKERHUB_REPO="${DOCKERHUB_REPO}"
    
    echo "Logging in to DockerHub..."
    echo "\${DOCKERHUB_TOKEN}" | docker login -u "\${DOCKERHUB_USERNAME}" --password-stdin
    if [ \$? -ne 0 ]; then
      echo "ERROR: Failed to login to DockerHub"
      exit 1
    fi
    echo "✅ Logged in to DockerHub successfully"
    
    echo "Tagging image for DockerHub..."
    docker tag "\${IMAGE_NAME}:\${IMAGE_TAG}" "\${DOCKERHUB_REPO}:\${IMAGE_TAG}"
    if [ \$? -ne 0 ]; then
      echo "ERROR: Failed to tag image"
      exit 1
    fi
    echo "✅ Image tagged: \${DOCKERHUB_REPO}:\${IMAGE_TAG}"
    
    echo "Pushing image to DockerHub..."
    docker push "\${DOCKERHUB_REPO}:\${IMAGE_TAG}"
    if [ \$? -ne 0 ]; then
      echo "ERROR: Failed to push image to DockerHub"
      exit 1
    fi
    echo "✅ Image pushed successfully to DockerHub"
    
    echo "Cleaning up local tags..."
    docker rmi "\${DOCKERHUB_REPO}:\${IMAGE_TAG}" 2>/dev/null || true
    docker rmi "\${IMAGE_NAME}:\${IMAGE_TAG}" 2>/dev/null || true
    
    echo "Logging out from DockerHub..."
    docker logout
EOF
  
  PUSH_RESULT=$?
  set -e  # Re-enable exit on error
  
  if [ $PUSH_RESULT -ne 0 ]; then
    error_exit "Failed to push image to DockerHub with exit code ${PUSH_RESULT}. Check logs above."
  fi
  
  success_msg "Image successfully pushed to DockerHub"
  log ""
}

# Main execution
main() {
  log "=========================================="
  log "Metabond Frontend - Build and Push to DockerHub"
  log "Started at: $(date)"
  log "=========================================="
  log ""
  
  prompt_inputs
  validate_prerequisites
  
  if [ "$BUILD_LOCATION" = "local" ]; then
    # Local build workflow
    prepare_source
    build_locally
    push_locally
  else
    # Remote build workflow
    prepare_source
    transfer_source
    build_on_remote
    push_to_dockerhub
  fi
  
  log "=========================================="
  success_msg "Build and push completed successfully!"
  success_msg "Image available at: ${DOCKERHUB_REPO}:${IMAGE_TAG}"
  log "Build logs saved to: ${LOG_FILE}"
  log "=========================================="
}

main
