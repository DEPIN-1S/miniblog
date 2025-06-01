# React + Vite

# Blog Application

A modern, responsive blog application built with React, Tailwind CSS, and Axios for managing posts with user authentication. This application allows users to register, log in, create, edit, view, and delete posts, with a sleek UI featuring gradient backgrounds and interactive elements.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Register and log in with email and password, with JWT-based authentication.
- **Post Management**:
  - Create new posts with a title and content.
  - Edit existing posts.
  - View detailed post information.
  - Delete posts.
  - List all user-created posts.
- **Responsive UI**: Sleek design with Tailwind CSS, featuring gradient backgrounds, animations, and hover effects.
- **Error Handling**: Displays user-friendly error messages for failed API requests.
- **Loading States**: Visual feedback with spinners during API calls.
- **Navigation**: Seamless routing using React Router for a single-page application experience.
- **Protected Routes**: Ensures only authenticated users can access post-related pages.

## Technologies
- **React**: Frontend library for building the user interface.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend API.
- **Tailwind CSS**: For styling with utility-first CSS classes.
- **Context API**: For managing authentication state across components.
- **Vite**: Build tool for faster development and production builds.
- **JWT**: For secure user authentication.

## Setup
To run this project locally, follow these steps:

### Prerequisites
- Node.js (v16 or higher)
- npm or Yarn
- A backend API server running at the URL specified in `VITE_API_URL` (e.g., `http://localhost:5000`)



### Explanation
- **Overview**: Provides a brief description of the application and its purpose.
- **Features**: Highlights key functionalities like authentication, post management, and UI features.
- **Technologies**: Lists the main tools and libraries used in the project.
- **Setup**: Includes detailed instructions for setting up the project locally, including environment variables.
- **Usage**: Guides users on how to interact with the application.
- **Project Structure**: Outlines the file and folder structure for easy navigation.
- **API Endpoints**: Specifies the expected backend API endpoints based on the Axios calls in the code.


### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blog-app.git
   cd miniblog-Frontend
