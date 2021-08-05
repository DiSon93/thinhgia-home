import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://thinhgiacore.demo.fit/api"

})

export default axiosClient;
