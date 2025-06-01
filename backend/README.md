Technologies
Node.js: JavaScript runtime for server-side development.
Express: Web framework for building RESTful APIs.
MongoDB: NoSQL database for storing users and posts.
Mongoose: ODM for MongoDB.
JWT: JSON Web Tokens for secure authentication.
bcryptjs: Library for password hashing.
dotenv: For managing environment variables.

  
Register a user: Send a POST request to /api/auth/register with an email and password.
Log in: Send a POST request to /api/auth/login to receive a JWT token.
Access protected routes: Include the JWT token in the Authorization header as Bearer <token> for all post-related endpoints.
Manage posts: Use the post endpoints to create, read,view, update, or delete posts. Only the post’s author can update or delete it.


MongoDB Integration

This application uses MongoDB as the database, with Mongoose as the Object Data Modeling (ODM) library to define schemas and interact with the database. Below are key MongoDB-based functionalities with code examples.

MongoDB Connection

The application connects to MongoDB using Mongoose in the main index.js file (ensure you have this file set up):

User Schema and Password Hashing

The User model defines the schema for users, with email and password fields. Passwords are hashed before saving using bcrypt.


url:http://localhost:5000/api


