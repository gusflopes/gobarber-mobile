import axios from 'axios';

// IOS = localhost

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
