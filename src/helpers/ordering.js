import axios from "axios"
const api = axios.create({
    baseURL: 'https://apiv4.ordering.co/',
    headers: { "Content-type": "application/json" }
});

export default api
