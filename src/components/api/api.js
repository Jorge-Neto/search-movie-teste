import axios from 'axios';

const api = axios.create({
  // Defina URL da sua API aqui
  baseURL: 'https://www.omdbapi.com/',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
