import cats from '../assets/cats.png'
import { Link } from "react-router-dom";
import gameService from '../services/game-service';
import useGames from '../hooks/useGames';

const Homepage = () => {
    const { setGames, setError } = useGames()

    const handleStartGame = () => {
        // fetch POST startGame
        gameService.create(undefined, null)
            .then(res => setGames(res.data))
            .catch(error => setError(error.message))

        location.assign('/game')
    }

    return (
        <>
            <div className="menu-div">
                <h1>What would you like to do?</h1>
                <div className="menu-list"><li>
                    <a href='#' onClick={() => handleStartGame()}>
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
        </>
    )
}

export default Homepage