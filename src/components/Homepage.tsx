// main navigation page with options for joining an open game or starting a new one
import cats from '../assets/cats.png'
import { Link } from "react-router-dom";

const Homepage = () => (
    <div className="menu-div">
        <h1>What would you like to do?</h1>
        <div className="menu-list"><li>
            <a href="#">
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