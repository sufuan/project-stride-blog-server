# Blog Site Server

This repository contains the server-side code for a blog site built using Express.js. The server provides endpoints to manage blog posts, comments, and users, and connects to a MongoDB database.

## Features

- Create, read, update, and delete blog posts
- User authentication and authorization
- user profile management
- RESTful API design
- MongoDB for data storage

## Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT (JSON Web Tokens)](https://jwt.io/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node package manager)
- MongoDB

### Installation

1. Clone the repository

2. Navigate to the project directory

   ```sh
   cd blog-site-server
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Set up environment variables

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
