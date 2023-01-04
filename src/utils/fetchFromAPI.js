import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
        part: 'snippet,id',
        maxResults: '50',
        order: 'date'
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async url => {
    const {
        data
    } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}