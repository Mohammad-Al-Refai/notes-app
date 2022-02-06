import axios from 'axios'

const BASE_URL = 'http://localhost:4000/api'
const API_KEY = '5tw0632wer5f75e8ddad296661f7d0e12e'

const axiosApi = axios.create({ baseURL: BASE_URL })

axiosApi.interceptors.request.use(
  async (config) => {
    config.headers = {
      apikey: API_KEY,
      token: localStorage.getItem('user'),
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)
export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data)
}

export async function post(url, data, config = {}) {
  return await axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data)
}
