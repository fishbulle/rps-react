import Fireworks from "../Fireworks/Fireworks"
import rock from '../../assets/rock.png'
import paper from '../../assets/paper.png'
import scissors from '../../assets/scissors.png'
import './game.css'

const Game = () => {

    return (
        <>
            {/* ska köras vid vinst */}
            <Fireworks /> 
            <div id="icons">
                <img id="rock" src={rock}></img>
                <img id="paper" src={paper}></img>
                <img id="scissors" src={scissors}></img>
            </div>

            <div id="choice">
                <p>ROCK PAPER SCISSORS</p>
            </div>
        </>
    )
}

export default Game