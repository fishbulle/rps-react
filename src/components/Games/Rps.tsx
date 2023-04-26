import rock from '../../assets/rock.png'
import paper from '../../assets/paper.png'
import scissors from '../../assets/scissors.png'
import './game.css'
import gameService from '../../services/game-service'
import useGames from '../../hooks/useGames'
import { useEffect, useState } from 'react'

function Rps() {
    const { games, setGames, error, setError } = useGames()
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')
    const [player1Move, setPlayer1Move] = useState('')
    const [player2Move, setPlayer2Move] = useState('')

    // fetch players (usernames)
    gameService.getInfo()
    .then(res => {
        setPlayer1(res.data.playerOne.username)

        if (res.data.playerTwo !== null)
            setPlayer2(res.data.playerTwo.username)
    })
    .catch(error => setError(error.message))

    // metod för fetch post sign
    const handleChoice = (choice: string) => {
        const newMove = {
            gameId: sessionStorage.getItem('gameId')
        }

        gameService.update(choice, newMove)
            .then(res => {
                setGames(res.data.sign)
                setPlayer1Move(res.data.playerOneMove)
                setPlayer2Move(res.data.playerTwoMove)
            })
            .catch(error => setError(error.message))
    }

    useEffect(() => {
        gameService.getInfo()
            .then(res => console.log(res.data))
            .catch(error => setError(error.message))
    }, [player2, player1Move, player2Move]) 

    return (
        <>
            <center>{error && <p>Something went wrong!</p>}</center>
            <div className="pick">
                <h2>What will you choose?</h2>
            </div>
            {/* ska köras vid vinst */}
            {/* <Fireworks /> */}
            <div className="player-names">
                <p className="player1">{player1}</p> {/** if (playerOne status win) username + 'wins!' */}
                <p className="player2">{player2 ? player2 : 'Opponent missing'}</p>
            </div>

            <div className="boxes">
                <div className="white-box">
                    <p className="p1">{player1Move}</p>
                </div>
                <div className="white-box">
                    <p className="p2">{player2Move}</p>
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