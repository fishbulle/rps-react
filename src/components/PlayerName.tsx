import { useEffect, useState } from "react"
import cats from '../assets/cats.png'
import playerService, { Player } from "../services/player-service"
import usePlayer from "../hooks/usePlayer"


const PlayerName = () => {
    const { player, setPlayer, error, setError } = usePlayer()
    const [token, setToken] = useState('')
    const [username, setUsername] = useState('')

    // fetch token
    // spara till sessionStorage
    useEffect(() => {
        playerService.getToken()
            .then(res => setToken(res.data))
    }, [setToken])
    sessionStorage.setItem('token', token)

    // fetch username
    const handleUsername = (username: string) => {
        const newUser = {
            username: username
        }

        playerService.create(undefined, newUser)
            .then(res => setPlayer(res.data.username))
            .catch(err => setError(err.message))

        sessionStorage.setItem('username', username)
        location.assign('/homepage')
    }

    return (
        <>
            <div className="playerName-div">
                {error && <p>Something went wrong!</p>}
                <label htmlFor="username">What would you like to be called?</label>
                <input
                    id="username"
                    type="text"
                    placeholder="*meow*"
                    value={username}
                    onChange={e => setUsername(e.target.value)} required />
                <button className="playButton" onClick={() => handleUsername(username)}>Let's Play!</button>
            </div>
            <div className="cats-div">
                <img className="cats-img" src={cats} alt="Four cute cartoon cats" />
            </div>
        </>
    )
}

export default PlayerName