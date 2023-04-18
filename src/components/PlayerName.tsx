import { useEffect, useState } from "react"
import cats from '../assets/cats.png'
import client from "../services/api-client"

const PlayerName = () => {
    const [token, setToken] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    // fetch token
    const getToken = () => {
        useEffect(() => {
            client.get('/token')
                .then(res => setToken(res.data))
                .catch(err => setError(err.message))
        }, [])

        return sessionStorage.setItem('token', token)
    }

    getToken()

    // fetch username
    const handleUsername = (name: string) => {
        client.post('/username', { username: name }, {
                headers: {
                    token: sessionStorage.getItem('token')
                }
            })
            .then(res => setName(res.data))
            .catch(err => setError(err.message))

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
                    placeholder="zelda"
                    value={name}
                    onChange={e => setName(e.target.value)} required />
                <button className="playButton" onClick={() => handleUsername(name)}>Let's Play!</button>
            </div>
            <div className="cats-div">
                <img className="cats-img" src={cats} alt="Four cute cartoon cats" />
            </div>
        </>
    )
}

export default PlayerName