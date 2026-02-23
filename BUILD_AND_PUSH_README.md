# Build and Push to DockerHub

This script builds the Docker image and pushes it to DockerHub. It supports both local and remote builds.

## Features

- **Build Location Choice**: Choose to build on your local machine or a remote server
- **Secure Credentials**: DockerHub credentials can be provided via command line arguments or interactive prompts (credentials are not stored in the script)
- **Interactive Mode**: Prompts for all required inputs if not provided
- **Comprehensive Logging**: All operations are logged to `logs/build-push-YYYYMMDD-HHMMSS.log`

## Usage

### Interactive Mode (Recommended)
```bash
./build-and-push.sh
```
The script will prompt you for:
- DockerHub username
- DockerHub token/password
- Build location (local or remote)
- Remote server IP (if building remotely)

### Command Line Arguments
```bash
./build-and-push.sh -u <username> -t <token>
```

Options:
- `-u USERNAME`: DockerHub username
- `-t TOKEN`: DockerHub token/password  
- `-h`: Show help message

### Examples

**Interactive mode:**
```bash
./build-and-push.sh
```

**Provide credentials via command line:**
```bash
./build-and-push.sh -u amjangde96 -t dckr_pat_xxxxxxx
```

**Show help:**
```bash
./build-and-push.sh -h
```

## Build Locations

### Local Build
- Builds the Docker image on your local machine
- Requires Docker to be installed and running locally
- Faster if you have a good internet connection and powerful local machine

### Remote Build
- Builds the Docker image on a remote server
- Requires SSH access to the remote server
- Useful when the remote server has better resources or network connectivity
- Default remote user: `amanj`

## Prerequisites

### For Local Builds
- Docker installed and running
- DockerHub account credentials

### For Remote Builds
- SSH access to the remote server
- Docker installed and running on the remote server
- The remote user (amanj) must have Docker permissions
- `scp` and `ssh` commands available locally

## Output

The script will:
1. Validate prerequisites
2. Build the Docker image
3. Tag the image for DockerHub
4. Push the image to DockerHub
5. Clean up temporary files
6. Log all operations to `logs/build-push-YYYYMMDD-HHMMSS.log`

## Image Information

- **Image Name**: `metabond-frontend`
- **Tag**: `latest`
- **DockerHub Repository**: `<your-username>/metabond-frontend:latest`

## Security Notes

- Credentials are never stored in the script
- DockerHub token is read securely (hidden input when prompted)
- The script logs out of DockerHub after pushing
- For enhanced security, use command line arguments in a secure script or CI/CD pipeline

## Troubleshooting

**Docker not found:**
- Install Docker or ensure it's in your PATH

**Cannot connect to Docker daemon:**
- Start Docker Desktop (on macOS/Windows)
- Ensure Docker service is running (on Linux)

**SSH connection failed:**
- Verify remote server IP address
- Check SSH credentials and network connectivity
- Ensure SSH keys are set up for passwordless login

**Build failed:**
- Check the log file in `logs/` directory
- Ensure package.json and package-lock.json are in sync
- Run `npm install` locally to update dependencies
