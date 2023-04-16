import cats from '../assets/cats.png'

const ListOpenGames = () => {

    // fetch GET opengames och mappa till listan

    return (
        <div className="menu-div">
            <h1>What game would you like to join?</h1>
            <div className="menu-list"><li>
                <a href="#">
                    map open games and add to this list
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