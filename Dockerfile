# base image
FROM node:19-alpine

# Set the working directory 
WORKDIR /app
# Copy package.json and package-lock.json 
COPY package*.json ./
# Install all dependencies
RUN npm install
# Copy the rest of the application files
COPY . .
# Build the Next.js application for production
RUN npm run build
# Expose the port that the application will run on
EXPOSE 3000
# Start the application
CMD ["npm", "start"]