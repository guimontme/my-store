import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "http://wordpress-api.lan/wp-json/api",
});

axiosInstance.interceptors.request.use(
  function(config) {
    const token = window.localStorage.user_token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  login(body) {
    return axios.post(
      "http://wordpress-api.lan/wp-json/jwt-auth/v1/token",
      body
    );
  },
  validateToken() {
    return axiosInstance.post(
      "http://wordpress-api.lan/wp-json/jwt-auth/v1/token/validate"
    );
  },
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}
