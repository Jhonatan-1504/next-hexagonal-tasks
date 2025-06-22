import axios from "axios";

const BASE_URL = "http://localhost:3000/api"

const axiosClient = axios.create({
  baseURL: BASE_URL
})

export default axiosClient