import cats from '../assets/cats.png'
import { Link } from "react-router-dom";

// fetch POST startGame
// lägga till onClick på Link to game (så nytt spel startas)

const Homepage = () => (
    <div className="menu-div">
        <h1>What would you like to do?</h1>
        <div className="menu-list"><li>
            <Link to="/game">
                Start a new game
            </Link>
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