import apiClient from "./api-client";

class HttpService {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint)
        return { request, cancel: () => controller.abort() }
    }

    // fetch token
    getToken() {
        return apiClient.get(this.endpoint + '/token')
    }

    // fetch game info
    getInfo() {
        return apiClient.get(this.endpoint + '/gameInfo', {
            headers: {
                token: sessionStorage.getItem('token'),
                gameId: sessionStorage.getItem('gameId')
            }
        })
    }

    // fetch post metoder (username, start game)
    create<T>(body?: T) {
        return apiClient.post(this.endpoint + '/create', body, {
            headers: {
                token: sessionStorage.getItem('token')
            }
        })
    }

    // fetch put (joinGame)
    add<T>(path?: string, body?: T) {
        return apiClient.put(this.endpoint + '/add/' + path, body, {
            headers: {
                token: sessionStorage.getItem('token')
            }
        })
    }

    // fetch post (move)
    update<T>(path?: string, body?: T) {
        return apiClient.post(this.endpoint + '/update/' + path, body, {
            headers: {
                token: sessionStorage.getItem('token')
            }
        })
    }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create