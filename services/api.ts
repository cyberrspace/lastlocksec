import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ADMIN_BASE_URL,
  withCredentials: true,
});

export default api;
