function GamesList({ games }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game) => {
        const {
          id,
          title,
          thumbnail,
          short_description,
          game_url,
          platform,
          genre,
        } = game;
        return (
          <div
            key={id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-48 rounded-md object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400 mb-4">
                <b>Description: </b>
                {short_description}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <b>Genre: </b>
                {genre}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <b>Platform: </b>
                {platform}
              </p>
              {/* using "noopener noreferrer" to improves security by blocking potential malicious attacks.                   */}
              <a href={game_url} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                Play Now!
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GamesList;
