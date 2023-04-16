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

    // setInterval för att uppdatera spelet (som stopwatchen)
    // usernames
    // spelarnas val
    // köra fireworks efter avslutad runda


    return (
        <>
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

export default Game