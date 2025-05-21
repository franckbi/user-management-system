# frontend/Dockerfile
FROM node:16-alpine

WORKDIR /app/frontend

# 1. Copy package files & install deps
COPY frontend/package*.json frontend/tsconfig.json ./
RUN npm install

# 2. Copy the rest of your CRA source
COPY frontend/public ./public
COPY frontend/src    ./src

# 3. Copy shared types for TS
COPY shared          ../shared

# 4. Build the React app
RUN npm run build

# 5. Serve it
EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
