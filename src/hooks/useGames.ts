import { useEffect, useState } from "react"
import gameService, { Game } from "../services/game-service"
import { CanceledError } from "axios"


const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const { request, cancel } = gameService.getAll<Game>()
        request
            .then(res => setGames(res.data))
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })

        return () => cancel()
    }, [])

    return { games, setGames, error, setError }
}

export default useGames