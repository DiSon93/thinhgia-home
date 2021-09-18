import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://thinhgiacore.demo.fit/api/'
    // baseURL: 'http://localhost:8000/api/'
})

export default axiosClient;
