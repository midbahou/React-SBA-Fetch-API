# Free-to-Play Games Explorer

This web application allows users to explore a variety of free-to-play games with features such as search functionality, pagination, and a clean user interface.

## Features
- **Game List Display:** Browse a wide range of free-to-play games with details such as title, description, platform, and genre.
- **Search Functionality:** Easily search for games by title.
- **Pagination Control:** Navigate between multiple pages of game listings.
- **Responsive Design:** Ensures an optimal viewing experience on various devices.
- **"Clear Search" Button:** Reset the search results back to the full game list.
- **Error Handling:** Displays appropriate messages when errors occur during data fetching.

## Technologies Used
- **React.js** for building the user interface
- **Axios** for making API requests
- **Tailwind CSS** for styling and responsiveness

## How to Run the Project
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Start the Application**
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use the Application
1. **Browse Games:** Upon loading, the app displays a list of games with pagination controls.
2. **Search Games:** Use the search bar to filter games by their title.
3. **Clear Search:** Click the "🔄 Clear Search" button to reset the game list.
4. **Pagination:** Use the pagination buttons to navigate between pages.

## API Source
Data is fetched from the [FreeToGame API](https://www.freetogame.com/api/games) using a proxy service to bypass CORS issues.

## Project Structure
```
/src
 |-- /components
 |    |-- GamesList.js       # Displays game cards in a grid layout
 |    |-- SearchBar.js       # Search bar for filtering games
 |-- App.js                  # Main application logic and state management
```

## Future Improvements
- Add sorting options (e.g., by genre, platform).
- Implement additional filters for better search refinement.
- Improve UI design with enhanced styling and animations.

## Acknowledgments
- Thanks to the [FreeToGame](https://www.freetogame.com/) API for providing game data.

## Netlify Link
- Please check my [Free-to-Play Games Explorer](https://free-to-play-games-by-medbahou.netlify.app/) Netlify Link.