# Use an official Node.js runtime as a parent image
FROM node:lts

# Set the working directory in the container
RUN mkdir /npc-maker
WORKDIR /npc-maker

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the current directory contents into the container
COPY .env.development .env
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]