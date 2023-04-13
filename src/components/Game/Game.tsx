import rock from '../../assets/rock.png'
import paper from '../../assets/paper.png'
import scissors from '../../assets/scissors.png'
import './game.css'
import { useState } from 'react'

function Game() {

    // metod för fetch post sign
    const handleChoice = (choice: string) => {
        
        // axios.post bla bla (sign)
    }


    return (
        <>
            {/* ska köras vid vinst */}
            {/* <Fireworks /> */}
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

export default Game