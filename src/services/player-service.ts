import create from "./http-service"

export interface Player {
    playerId: number,
    username: string
}

export default create('/players')