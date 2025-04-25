import axios from "axios";

const api = axios.create({
  baseURL: "https://api.bpcruzeiros.com/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;