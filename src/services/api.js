import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-mobile-pitang.herokuapp.com/movies',
});

export default api;
