import axios from 'axios';
export const baseUrl="https://reqres.in/api";
const baseService=axios.create({
    baseURL:baseUrl
});
export default baseService;