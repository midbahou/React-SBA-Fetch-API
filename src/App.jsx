import { useEffect, useState } from "react";
import GamesList from "./components/GamesList";
import axios from "axios";
import SearchBar from "./components/SearchBar";

function App() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Create a simple navigation between pages using Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 8; // set the number of games per page to 8

  const fetchGames = async () => {
    try {
      const apiUrl = "https://www.freetogame.com/api/games";
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        apiUrl
      )}`;
      const res = await axios.get(proxyUrl);

      if (res.data.contents) {
        const gameData = JSON.parse(res.data.contents);
        console.log(gameData);
        setGames(gameData);
        setFilteredGames(gameData);
      }
    } catch (error) {
      console.error(`Error fetching the data: ${error.message}`);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(filteredGames);

  useEffect(() => {
    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-700">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-red-500 text-lg font-semibold">Error: {error}</div>
      </div>
    );
  }

  // handle search
  const handleSearch = (search) => {
    const filtered = games.filter((game) =>
      game.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredGames(filtered); // update filtered games
    setCurrentPage(1); // reset pagination to the first page
  }

  // Pagination Logic
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  // Using slice() to display only the games for the current page.
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  console.log(totalPages); // 51 pages

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold underline text-center text-gray-800 mb-8">
          Free-to-Play Games
        </h1>
        {/* search bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Clear Search Button */}
        {filteredGames.length !== games.length && (
        <button 
        onClick={() => {
          setFilteredGames(games); // Reset to all games
          setCurrentPage(1); // Reset pagination

        }}
        className="px-4 py-2 mb-4 bg-gray-400 rounded-md hover:bg-gray-300 cursor-pointer"
        >
      🔄 Clear Search
        </button>
        )}

        {/* Display "No games found" message if filteredGames is empty */}
        {filteredGames.length === 0 && (
          <p className="text-center text-3xl font-bold text-gray-600 mt-4">😕 No Games Found!</p>
        )}

        {/* Games List */}
        {filteredGames.length > 0 && <GamesList games={currentGames} />}


        {/* Pagination Control */}
        <div className="flex flex-wrap justify-center mt-8 space-x-2">
          {/* Add buttons to navigate between pages. */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1} // Disable if on the first page
            className="px-4 py-2 m-1 bg-gray-400 rounded-md disabled:bg-gray-400 cursor-pointer"
          >
            Previous
          </button>

          {/* Create an array of buttons for each page number */}
          {Array.from({ length: totalPages }, (_, i) => {
            const pageNumber = i + 1; // Calculate the page number (1-based)
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)} // Navigate to the page when clicked
                className={
                  currentPage === pageNumber
                    ? "px-4 py-2 m-1 rounded-md bg-blue-500 text-white cursor-pointer" // Active page style
                    : "px-4 py-2 m-1 rounded-md bg-gray-400 cursor-pointer" // Inactive page style
                }
              >
                {pageNumber} {/* Display the page number */}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages} // Disable if on the last page
            className="px-4 py-2 m-1 bg-gray-400 rounded-md disabled:bg-gray-400 cursor-pointer"
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
