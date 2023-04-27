import { useState } from 'react'
import { BsFillBalloonHeartFill } from 'react-icons/bs';
import cats from '../assets/cats.png'
import useGames from '../hooks/useGames'
import gameService, { Game } from '../services/game-service'

const ListOpenGames = () => {

    const { games, setGames, error, setError } = useGames()
    const [gameId, setGameId] = useState('')

    const handleJoinGame = (game: Game) => {
        // fetch joinGame
        gameService.add(game.gameId, undefined)
        .then(res => {
            console.log(res.data)
            setGameId(res.data.gameId)
            setGames(res.data)
            sessionStorage.setItem('gameId', res.data.gameId)
            location.assign('/game')
        })
        .catch(error => setError(error.message))
    }

    return (
        <div className="menu-div">
            {error && <p>Something went wrong!</p>}
            <h1>What game would you like to join?</h1>
            <div className="menu-list">
                {games.map(game => 
                    <li key={game.gameId}>Play with
                        <a href='#'
                            onClick={() => handleJoinGame(game)}> {game.playerOne.username} </a>
                        <BsFillBalloonHeartFill />
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