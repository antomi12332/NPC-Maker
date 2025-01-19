# Use an official Node.js runtime as a parent image
FROM node:lts

# Define build arguments
ARG ENVIRONMENT
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_SUPABASE_GRAPHQL_URL

# Set the working directory in the container
RUN mkdir /npc-maker
WORKDIR /npc-maker

# Copy package.json and package-lock.json files
COPY package*.json /npc-maker/

# Install dependencies
RUN cd /npc-maker
RUN npm ci

# Copy the current directory contents into the container
COPY . /npc-maker/


# Build the Next.js app
ENV ENVIRONMENT=${ENVIRONMENT}
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
ENV NEXT_PUBLIC_SUPABASE_GRAPHQL_URL=${NEXT_PUBLIC_SUPABASE_GRAPHQL_URL}
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]

# test 2