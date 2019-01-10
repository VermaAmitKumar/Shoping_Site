import axios from 'axios';
export const   baseUrl='http://localhost:5000/register';
const baseService =axios.create({
    baseURL:baseUrl
})
export default baseService;