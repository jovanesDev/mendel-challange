import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://openlibrary.org'
})

export const get = (url) => {
    return axiosInstance.get(url)
}
