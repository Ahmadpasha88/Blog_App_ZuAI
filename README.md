Im creating documation for both frontend and backend here only



Project Overview:
The Bloger Project is a full-stack web application designed for creating and managing blog posts. The application allows users to create, view, edit, and delete blog posts, as well as search for blogs. The backend is built using Node.js, Express.js, and PostgreSQL, while the frontend is developed using React.js.

Technologies Used
Backend:
Node.js: JavaScript runtime for building the server-side application.
Express.js: Web framework for handling HTTP requests and routing.
PostgreSQL: Relational database management system.
Sequelize: ORM for interacting with the PostgreSQL database.
JWT: For user authentication.
Axios: For making HTTP requests to the backend API.
Frontend:
React.js: JavaScript library for building user interfaces.
React Router: For routing and navigation within the application.
Bootstrap: For styling and responsive design.
React Icons: For adding icons to the UI.
React Loader Spinner: For loading indicators.


Backend Setup
Installation
Clone the repository: both frontend and backend

Install the dependencies: npm install 

.env variables PORT=5000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret


configure the Sequelize connection to your PostgreSQL database:

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

module.exports = sequelize;




The backend provides the following API routes:

User Routes:
POST /api/users/register: Register a new user.
POST /api/users/login: Authenticate a user and return a JWT.

Blog Routes:
GET /api/posts: Fetch all blog posts.
POST /api/posts: Create a new blog post.
PUT /api/posts/:id: Update a blog post by ID.
DELETE /api/posts/:id: Delete a blog post by ID.

Comment Routes:
GET /api/comments/:blogId: Fetch all comments for a specific blog post.
POST /api/comments: Add a new comment to a blog post.
DELETE /api/comments/:id: Delete a comment by ID.

Running the Backend
To start the backend server, run: developement server is npm run dev, production server npm start run 

Deploy to a cloud provider: You can deploy your backend on platforms like Heroku, Render, or AWS. Make sure to set up your environment variables on the platform and configure your PostgreSQL database accordingly.

in my task i have used Render:

Create a new service on Render.
Connect your GitHub repository.
Add the necessary environment variables.
Deploy the application.

Prepare the application for production

for frontend i have used vercel to deployee react app

Creating a New Blog Post
Navigate to the /newBlog route.
Fill in the blog title, content, and upload an image.
Click on the "Submit" button to create a new blog post.
Searching for Blogs
Use the search bar on the Home or AllBlogPosts components to search for blogs by title, content, or author name.
Troubleshooting

400 Bad Request on Login:
Ensure the API endpoint URL is correct.
Verify that the correct request payload is being sent to the backend.

Database Tables Clearing:

Check the sequelize.sync() configuration to avoid clearing tables on every server restart.