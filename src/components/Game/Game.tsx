import rock from '../../assets/rock.png'
import paper from '../../assets/paper.png'
import scissors from '../../assets/scissors.png'
import './game.css'
import { useState } from 'react'

const Game = () => {

    const [sign, setSign] = useState('')

    // metod för fetch sign
    console.log(sign);


    return (
        <>
            {/* ska köras vid vinst */}
            {/* <Fireworks /> */}
            <div className="icons">
                <img id="rock" src={rock} onClick={() => setSign('rock')}></img>
                <img id="paper" src={paper} onClick={() => setSign('paper')}></img>
                <img id="scissors" src={scissors} onClick={() => setSign('scissors')}></img>
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

export default Game