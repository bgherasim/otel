# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Mount the source code from the host to the container
VOLUME [ "/app" ]


# Start the application
CMD [ "npm", "run", "start:dev" ]