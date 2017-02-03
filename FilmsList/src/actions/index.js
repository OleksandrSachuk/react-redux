import axios from 'axios';

const API_KEY = 'bb20f2896f9c91269ea9d39375e43968';
const ROOT_URL = `https://api.themoviedb.org/3/search/movie?language=en-US&query=space&page=1&include_adult=false&api_key=${API_KEY}`;

export const FETCH_FILMS = 'FETCH_FILMS';

export function fetchFilms(film) {
    const url = `${ROOT_URL}&query=${film}`;
    const request = axios.get(url);

    console.log('Request: ',request);
    return{
        type: FETCH_FILMS,
        payload: request
    }
}