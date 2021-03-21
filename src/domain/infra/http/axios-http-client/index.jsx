import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export default AxiosInstance;
