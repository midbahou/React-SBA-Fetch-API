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
    return <h2>Loading...</h2>
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div>
      <GamesList games={games} />
    </div>
  )
}


export default App;
