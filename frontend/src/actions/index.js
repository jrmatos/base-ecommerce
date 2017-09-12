import axios from 'axios';

const ROOT_URL = `http://localhost:8080/api`;

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function fetchWeather(city) {
    const url = `${ROOT_URL}/products`;
    const request = axios.get(url);
    return {
        type: FETCH_PRODUCTS,
        payload: request
    };
}