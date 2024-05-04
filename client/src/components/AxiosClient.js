import axios from "axios";


const axiosClient = axios.create({
    baseURL: 'https://de00-31-60-18-184.ngrok-free.app/api'
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    console.log(token);

    return config;

})
axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {

    const { response } = error;
    if (response && response.status == 401) {
        localStorage.removeItem('ACCESS_TOKEN')
    }

    throw error;
})

export default axiosClient;