import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8080/api/v2/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default http
