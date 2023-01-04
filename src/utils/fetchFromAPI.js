import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'

const options = {
    url: BASE_URL,
    params: {
        relatedToVideoId: '7ghhRHRP6t4',
        part: 'id,snippet',
        type: 'video',
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '73554812b9msha53a55888e723dbp10063fjsnaa54d2178eb6',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};