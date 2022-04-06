import axios from "axios"
import { AxiosRequestConfig } from "axios"

const baseAxios = (options) => {

    const defaultHeaders = {
        'Content-Type': 'application/json',
    }

    const axiosInstance = axios.create({
        baseURL: '',
        headers: defaultHeaders
    })

    //Interceptors
    axiosInstance.interceptors.request.use((config) => {
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((response) => {
        return response
    }, (error) => {
        return Promise.reject(error);
    })

    return axiosInstance
}

const executeRequest = (method: string, pathName: string, data, options) => {
    const body = method == 'get' || !data ? {} : { data }
    const request = { method: method, url: pathName, params: options.query, ...body }

    const axiosInstance = baseAxios(options)
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosInstance.request(request as AxiosRequestConfig);
            resolve(response.data);
        } catch (error) {
            reject(error);
        }
    })
}

export default {
    get(pathname: string, options) {
        return executeRequest('get', pathname, null, options)
    },

    post(pathname: string, data, options) {
        return executeRequest('post', pathname, data, options)
    },

    all(promises) {
        return axios.all(promises)
    },
}