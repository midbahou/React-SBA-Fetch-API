

function GamesList({ games }) {

    
    
    return (
        <div>
        <ul>
            {games.map((game) => {
        const {id, title, thumbnail, short_description, game_url, platform, genre} = game;
        return (
                <li key={id}>
                    <img src={thumbnail} alt={title} />
                    <h3>{title}</h3>
                    <p><b>Description: </b>{short_description}</p>
                    <p><b>Genre: </b>{genre}</p>                    
                    <p><b>Platform: </b>{platform}</p>  
                    {/* using "noopener noreferrer" to improves security by blocking potential malicious attacks.                   */}
                    <a href={game_url} target="_blank" rel="noopener noreferrer">Play Now!</a>
                </li>
                );
            })}
        </ul>

    </div>
  )
}

export default GamesList;
