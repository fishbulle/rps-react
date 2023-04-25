import { useState } from 'react'
import cats from '../assets/cats.png'
import useGames from '../hooks/useGames'
import gameService, { Game } from '../services/game-service'

const ListOpenGames = () => {

    // fetch GET opengames och mappa till listan
    const { games, setError } = useGames()
    const [gameId, setGameId] = useState('')

    const handleJoinGame = (game: Game) => {
        // fetch joinGame
        gameService.add(game.gameId)
        .then(res => {
            setGameId(res.data.gameId)
            sessionStorage.setItem('gameId', res.data.gameId)
        })
        .catch(error => setError(error.message))

        location.assign('/game')
    }

    return (
        <div className="menu-div">
            <h1>What game would you like to join?</h1>
            <div className="menu-list">
                {games.map(game => 
                    <li key={game.gameId}>
                        <a href='#'
                        onClick={() => handleJoinGame(game)}>{game.playerOne.username}: {game.status}</a>
                    </li>
                    )}
            </div>
            <div className="cats-div">
                <img className="cats-img" src={cats} alt="Four cute cartoon cats" />
            </div>
        </div>
    )
}

export default ListOpenGames