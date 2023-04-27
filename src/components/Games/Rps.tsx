import rock from '../../assets/rock.png'
import paper from '../../assets/paper.png'
import scissors from '../../assets/scissors.png'
import winner from '../../assets/winner.png'
import loser from '../../assets/loser.png'
import draw from '../../assets/draw.png'
import './game.css'
import gameService from '../../services/game-service'
import useGames from '../../hooks/useGames'
import { useEffect, useState } from 'react'

function Rps() {
    const { games, setGames, error, setError } = useGames()
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')
    const [playerMove, setPlayerMove] = useState(false)
    const [player1Move, setPlayer1Move] = useState('')
    const [player2Move, setPlayer2Move] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        const fetchGameInfo = () => {
            gameService.getInfo()
                .then(res => {
                    setGames(res.data)
                    setPlayer1(res.data.playerOne.username)
                    setResult(res.data.result)
                    setPlayer1Move(res.data.playerOneMove)
                    setPlayer2Move(res.data.playerTwoMove)
                    console.log(res.data)

                    if (res.data.playerTwo !== null)
                        setPlayer2(res.data.playerTwo.username)
                })
                .catch(error => setError(error.message))
        }

        const interval = setInterval(() => {
            fetchGameInfo()
        }, 1000)

        fetchGameInfo()

        return () => clearInterval(interval)
    }, [])

    // fetch post sign
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

    return (
        <>
            <center>{error && <p>Something went wrong!</p>}</center>
            <div className="container">
                <div className="pick">
                    <h2>What will you choose?</h2>
                </div>
                <div className="player-names">
                    <p className="player1">{player1}</p>
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
                <div className="result">
                    {/* winner */}
                    {result === 'WIN' ? (
                        <>
                            <Fireworks />
                            <img src={winner} alt="winner" className="zoomInDown" />
                        </>
                    ) : null}
                    {/* loser */}
                    {result === 'LOSE' ? (
                        <img src={loser} alt="loser" className="zoomInDown" />
                    ) : null}
                    {/* draw */}
                    {result === 'DRAW' ? (
                        <img src={draw} alt="draw" className="zoomInDown" />
                    ) : null}
                </div>
            </div>

            <div className="icons">
                <button onClick={() => handleChoice('rock')}>
                    <img id="rock" src={rock}></img>
                </button>
                <button onClick={() => handleChoice('paper')}>
                    <img id="paper" src={paper}></img>
                </button>
                <button onClick={() => handleChoice('scissors')}>
                    <img id="scissors" src={scissors}></img>
                </button>
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