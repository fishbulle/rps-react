// component for listing open games
import cats from '../assets/cats.png'

const ListOpenGames = () => {

    return (
        <div className="menu-div">
            <h1>What game would you like to join?</h1>
            <div className="menu-list"><li>
                <a href="#">
                    map open games and add to list
                </a>
            </li>
            </div>
            <div className="cats-div">
                <img className="cats-img" src={cats} alt="Four cute cartoon cats" />
            </div>
        </div>
    )
}

export default ListOpenGames