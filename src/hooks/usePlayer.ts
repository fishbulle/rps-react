import { useEffect, useState } from "react"
import playerService, { Player } from "../services/player-service"
import { CanceledError } from "axios"


const usePlayer = () => {
    const [players, setPlayers] = useState<Player[]>([])
    const [error, setError] = useState('')
    
    useEffect(() => {
        const { request, cancel } = playerService.getAll<Player>()
        request
            .then(res => setPlayers(res.data))
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })

        return () => cancel()
    }, [])

    return { players, setPlayers, error, setError }
}

export default usePlayer