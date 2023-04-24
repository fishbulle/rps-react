import { useEffect, useState } from "react"
import playerService, { Player } from "../services/player-service"
import { CanceledError } from "axios"


const usePlayer = () => {
    const [player, setPlayer] = useState<Player[]>([])
    const [error, setError] = useState('')
    
    useEffect(() => {
        const { request, cancel } = playerService.getAll<Player>()
        request
            .then(res => setPlayer(res.data))
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })

        return () => cancel()
    }, [])

    return { player, setPlayer, error, setError }
}

export default usePlayer