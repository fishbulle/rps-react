import { useState } from "react"

const PlayerName = () => {

    const [name, setName] = useState('')

    // fetch token
    // fetch username

    return (
        <>
            <div className="playerName-div">
                <label htmlFor="username">What would you like to be called?</label>
                <input id="username" type="text" placeholder="zelda" value={name} onChange={e => setName(e.target.value)} required />
                <button className="playButton" onClick={() => console.log('PLAY')}>Let's Play!</button>
            </div>
                 </>
    )
}

export default PlayerName