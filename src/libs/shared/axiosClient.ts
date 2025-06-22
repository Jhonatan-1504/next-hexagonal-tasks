import axios from "axios";
import { createLocalStorageRepository } from "../auth/infractructure/LocalStorageRepository";

const BASE_URL = "http://localhost:8000/api"

const axiosClient = axios.create({
  baseURL: BASE_URL,
})

axiosClient.interceptors.request.use((config) => {
  const storage = createLocalStorageRepository();
  const token = storage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosClient