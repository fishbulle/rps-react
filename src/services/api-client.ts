import axios, { CanceledError } from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:8080/rps'
})

export default client