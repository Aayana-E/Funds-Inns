import axios from 'axios'
const backend = axios.create({
    baseURL: 'http://localhost:8000/api'
  });

export default backend