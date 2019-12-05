import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 2a36c86a09dd9c1fa9b017a0b4d78f6d5be98d0560e2b987984e5d36e5520099"
    }
})