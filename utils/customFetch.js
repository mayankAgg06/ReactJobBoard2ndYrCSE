import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://localhost:5500/api/v1',
  withCredentials: true
});

export default customFetch;
