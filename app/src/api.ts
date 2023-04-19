import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/', // Replace with your backend's URL
});

export default api;
