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
import { FaExclamation } from 'react-icons/fa'

function Rps() {
    const { games, setGames, error, setError } = useGames()
    const [player, setPlayer] = useState('')
    const [opponent, setOpponent] = useState(null)
    const [playerOneMove, setPlayerMove] = useState('')
    const [opponentMove, setOpponentMove] = useState('')
    const [result, setResult] = useState('')
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        const fetchGameInfo = () => {
            gameService.getInfo().then(res => {
                setGames(res.data)
                setPlayer(res.data.playerOne.username)
                console.log(res.data)

                if (res.data.playerTwo !== null) {
                    setOpponent(res.data.playerTwo.username)
                }

                if (res.data.playerOneMove !== null
                    && res.data.playerTwoMove !== null) {
                    setResult(res.data.result)

                    if (sessionStorage.getItem('token') === res.data.playerOne.playerId) {
                        setPlayerMove(res.data.playerOneMove)
                        setOpponentMove(res.data.playerTwoMove)
                    } else if (sessionStorage.getItem('token') === res.data.playerTwo.playerId) {
                        setPlayerMove(res.data.playerOneMove)
                        setOpponentMove(res.data.playerTwoMove)
                    }
                }
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
            })
            .catch(error => setError(error.message))
    }

    return (
        <>
            <center>{error && <p>Something went wrong! Try refreshing the page....</p>}</center>
            <div className="container">
                <div className="rules">
                    <h2>What will you choose?</h2>
                    <p><FaExclamation /> rock beats scissors, scissors beats paper, paper beats rock</p>
                </div>
                <div className="boxes">
                    <div className="box-1">
                        <p className="player1">{player}</p>
                        <div className="white-box">
                            <p className="p1">{playerOneMove}</p>
                        </div>
                    </div>
                    <div className="box-2">
                        <p className="player2">{opponent ? opponent : 'Opponent missing'}</p>
                        <div className="white-box">
                            <p className="p2">{opponentMove}</p>
                        </div>
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
                <button
                    disabled={disable}
                    onClick={() => {
                        handleChoice('rock')
                        setDisable(true)
                    }}>
                    <img id="rock" src={rock}></img>
                </button>
                <button
                    disabled={disable}
                    onClick={() => {
                        handleChoice('paper')
                        setDisable(true)
                    }}>
                    <img id="paper" src={paper}></img>
                </button>
                <button
                    disabled={disable}
                    onClick={() => {
                        handleChoice('scissors')
                        setDisable(true)
                    }}>
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