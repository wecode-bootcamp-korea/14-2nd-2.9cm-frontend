import axios from 'axios';
export const SERVER = process.env.REACT_APP_SERVER;

export const STORE_API = `${SERVER}store`;
export const PRICE_FILTER_API = `${STORE_API}?min_price=50000&max_price=100000`;
export const TOKEN = localStorage.getItem('token');
export const MOCK = 'http://localhost:3000/data/mockUp.json';

// export const SERVER = process.env.REACT_APP_SERVER;
// export const SIGNUP_API = `${SERVER}users`;
// export const LOGIN_API = `${SERVER}users/log-in`;
// export const SEARCH_API = `${SERVER}movies/user`;
// export const MYPAGE_API = `${SERVER}movies/user?id=1`;
// export const WANNAWATCH_API = `${SERVER}movies/interests?status=0`;
// export const WATCHING_API = `${SERVER}movies/interests?status=1`;
// export const TOKEN = localStorage.getItem('token');
// export const PREFERRED_API =
//   'http://52.79.55.158:8000/analysis/favorite?category=country';
// export const PREFERRED_GENRE_API =
//   'http://52.79.55.158:8000/analysis/favorite?category=genre';
// export const MYSTAR_API = `${SERVER}analysis/my_star`;
// export const BELOVEDPEOPLE_API = '/data/belovedPeople.json';
// export const BELOVEDDIRECTOR_API = '/data/belovedDirector.json';
// export const IMG_UPLOAD_API = `${SERVER}users`;

export const apiClient = axios.create({
  baseURL: `${SERVER}`,
});
