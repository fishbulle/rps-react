import { Player } from "./player-service"
import create from "./http-service"

export interface Game {
    gameId: number
    playerOne: Player
    playerOneMove: string
    playerTwo: Player
    playerTwoMove: string
    status: string
    result: string
}

export default create('/games')