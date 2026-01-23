# Stage 1: build
FROM node:18-alpine AS build
WORKDIR /app
# install dependencies
COPY package*.json ./
RUN npm ci
# copy source and build
COPY . .
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:stable-alpine
LABEL org.opencontainers.image.title="metabond-frontend"
LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.authors="maintainer@example.com"
ARG APP_ENV=production
ENV NODE_ENV=${APP_ENV}

# copy built assets (Vite outputs to dist, not build)
COPY --from=build /app/dist /usr/share/nginx/html
# custom nginx config (optional override)
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# basic healthcheck (adjust path if your app uses different endpoint)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- --timeout=2 http://localhost:80 || exit 1

CMD ["nginx", "-g", "daemon off;"]
