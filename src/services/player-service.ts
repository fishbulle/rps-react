import create from "./http-service"

export interface Player {
    playerId: string,
    username: string
}

export default create('/players')