# myFlix App

myFlix is a web application where users can browse and search for movies, view movie details, and add movies to their favorites list.

## Features

- **User Authentication**: Users can sign up, log in, and log out.
- **Movie Browsing**: Users can view a list of available movies.
- **Search Functionality**: Users can search for movies by title.
- **Movie Details**: Users can view details about each movie, including the title, director, description, genre, and release year.
- **Favorites List**: Users can add and remove movies to and from their favorites list.
- **Profile View**: Users can view their profile and see their favorite movies.

## File Structure

- **src**: Contains the source code for the frontend application.
  - **index.jsx**: Entry point for the React application.
  - **index.html**: HTML template for the application.
  - **img**: Directory for storing image assets.
  - **components**: Contains React components for different views and UI elements.
    - **profile-view.jsx**: Component for displaying user profile information.
    - **user-info.jsx**: Component for displaying user information.
    - **update-user.jsx**: Component for updating user profile.
    - **favorite-movies.jsx**: Component for displaying favorite movies.
    - **movie-card**: Directory for movie card components.
    - **login-view**: Directory for login view components.
    - **main-view**: Directory for main view components.
    - **movie-view**: Directory for movie view components.
    - **navigation-bar**: Directory for navigation bar components.
    - **signup-view**: Directory for signup view components.
    - **index.scss**: Stylesheet for the application.
- **netlify.toml**: Configuration file for deploying to Netlify.
- **build**: Contains the production build of the application.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **React Bootstrap**: UI library for styling the application components.
- **Node.js**: Backend server environment for running the server-side logic.
- **MongoDB**: NoSQL database for storing movie and user data.

## Deployment

The myFlix app can be deployed to various hosting platforms such as Netlify, Vercel, or Heroku. To deploy the application, run the production build command (`npm run build`) and deploy the generated build files to your chosen hosting provider.
