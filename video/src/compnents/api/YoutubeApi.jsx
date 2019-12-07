import axios from 'axios'

const KEY = "AIzaSyAeGHv-EUZ7BxnmBb96wsJtPGcoWmHb8NU"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})