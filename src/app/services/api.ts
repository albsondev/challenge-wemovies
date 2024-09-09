import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wefit-movies.vercel.app/api/movies',
});
