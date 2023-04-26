import rock from '../../assets/rock.png'
import paper from '../../assets/paper.png'
import scissors from '../../assets/scissors.png'
import './game.css'
import gameService, { Game } from '../../services/game-service'
import useGames from '../../hooks/useGames'


function Rps() {
    const { games, setGames, error, setError } = useGames()

    // gameService.getInfo()
    //     .then(res => {
    //         if (res.data.playerTwo === null)
    //             // disable icons
    //         else
    //             // enable icons
    //     })


    // metod för fetch post sign
    const handleChoice = (choice: string) => {

        const newMove = {
            gameId: sessionStorage.getItem('gameId')
        }

        gameService.update(choice, newMove)
        .then(res => {
            setGames(res.data.sign)
            console.log(res.data)
        })
        .catch(error => setError(error.message))
    }

    return (
        <>
            <center>{error && <p>Something went wrong!</p>}</center>
            <div className="pick">
                <h2>What will you choose?</h2>
            </div>
            {/* ska köras vid vinst */}
            {/* <Fireworks /> */}
            <div className="player-names">
                <div className="player1">PLAYER 1 WINS!</div> {/** if (playerOne status win) username + 'wins!' */}
                <div className="player">PLAYER 2</div>
            </div>
            <div className="boxes">
                <div className="white-box">
                    <p className="p1">R</p> {/** visa drag genom bokstav */}
                </div>
                <div className="white-box">
                    <p className="p2"></p>
                </div>
            </div>
            
            <div className="icons">
                <img id="rock" src={rock} onClick={() => handleChoice('rock')}></img>
                <img id="paper" src={paper} onClick={() => handleChoice('paper')}></img>
                <img id="scissors" src={scissors} onClick={() => handleChoice('scissors')}></img>
            </div>
        </>
    )
}

const Fireworks = () => {
    return (
        <>
            <div className="pyro">
                <div className="before"></div>
                <div className="after"></div>
            </div>
        </>
    );
}

export default Rps