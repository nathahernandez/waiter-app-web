import axios from 'axios'

const LOCAL_HOST = 'http://localhost:4444'

export const api = axios.create({
	baseURL: LOCAL_HOST
})