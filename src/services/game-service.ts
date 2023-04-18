export interface Game {
    gameId: number
    playerOne: {
        playerId: number,
        username: string
    }
    playerOneMove: string
    playerTwo: {
        playerId: number,
        username: string
    }
    playerTwoMove: string
    status: string
    result: string
}