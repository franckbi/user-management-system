# backend/Dockerfile
FROM node:16-alpine

# 1. Switch into the working dir
WORKDIR /app/backend

# 2. Copy only package.json & tsconfig so we can install deps
COPY backend/package*.json backend/tsconfig.json ./

# 3. Install dependencies
RUN npm install

# 4. Copy the rest of your backend source
COPY backend/src ./src
# (No need to copy backend/tsconfig.json again—it’s already here)

# 5. Copy your shared types alongside
COPY shared ./shared

# 6. Compile to /app/backend/dist
RUN npm run build

# 7. Expose & start
EXPOSE 8080
CMD ["node", "dist/index.js"]
