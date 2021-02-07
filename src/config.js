import axios from 'axios';
export const SERVER = process.env.REACT_APP_SERVER;

export const STORE_API = `${SERVER}store`;
export const PRICE_FILTER_API = `${STORE_API}?min_price=50000&max_price=100000`;
export const MOCK = 'http://localhost:3000/data/mockUp.json';

export const apiClient = axios.create({
  baseURL: `${SERVER}`,
});
