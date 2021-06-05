import axios from 'axios'
import { BASE_URL } from './common'
import { getToken } from '../utils/auth'
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})
//全局请求拦截
instance.interceptors.request.use(
    function (config) {
        // 判断有没有token
        if (getToken()) {
            config.headers.authorization = "Bearer " + getToken();
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
//封装get请求
export const get = (url, params) => instance.get(url, params)
//封装post请求
export const post = (url, data) => instance.post(url, data)
//封装delete请求
export const del = (url, data) => instance.delete(url, data)