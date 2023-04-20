import cats from '../assets/cats.png'
import { Link } from "react-router-dom";
import client from '../services/api-client';
import { useState } from 'react';

// const [gameId, setGameId] = useState('')
// const [error, setError] = useState('')

// fetch POST startGame
// lägga till onClick på Link to game (så nytt spel startas)
// const handleStartGame = () => {
    // client.post('/start', {
    //     headers: {
    //         token: sessionStorage.getItem('token')
    //     }
    // })
    //     .then(res => setGameId(res.data))
    //     .catch(err => setError(err.message))

    // location.assign('/game')
// }

const Homepage = () => (
    <div className="menu-div">
        <h1>What would you like to do?</h1>
        <div className="menu-list"><li>
            <a href='#' onClick={() => console.log('play!')}>
                Start a new game
            </a>
        </li>
            <li>
                <Link to="/openGames">
                    Join an open game
                </Link>
            </li>
        </div>
        <div className="cats-div">
            <img className="cats-img" src={cats} alt="Four cute cartoon cats" />
        </div>
    </div>
)

export default Homepage