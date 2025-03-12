import { useEffect, useState } from "react"
import GamesList from "./components/GamesList";
import axios from "axios";


function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchGames = async () => {

    try {
      const apiUrl = "https://www.freetogame.com/api/games";
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
      const res = await axios.get(proxyUrl);

      if (res.data.contents) {
        const gameData = JSON.parse(res.data.contents);
        console.log(gameData);
        setGames(gameData);
      }
    } catch (error) {
      console.error(`Error fetching the data: ${error.message}`);
      setError(error.message);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-700">Loading...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100"> <div className="text-red-500 text-lg font-semibold">Error: {error}</div>;
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          SBA320 - Free-to-Play Games
        </h1>
        <GamesList games={games} />
      </div>
    </div>
  )
}


export default App;
