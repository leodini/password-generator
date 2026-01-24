# Dockerfile.dev - Debian-based
FROM node:20-bullseye-slim

# Install essential tools
RUN apt-get update && apt-get install -y \
  curl \
  git \
  procps \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package.json ./
RUN npm install

# Copy source code
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
