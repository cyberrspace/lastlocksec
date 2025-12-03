import axios from "axios";

// Create main axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // your backend API URL
  withCredentials: false, // backend uses tokens, not cookies
});

// Add token to request headers
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("estateToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
