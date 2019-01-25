import axios from 'axios';
export const   baseUrl='http://192.168.200.149:3000/';
const baseService =axios.create({
    baseURL:baseUrl
})
export default baseService;