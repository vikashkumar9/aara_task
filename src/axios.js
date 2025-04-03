import axios from "axios";
import BASE_URL from "./config";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Set your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token dynamically
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    console.log("token", token);
    if (token) {
      console.log("if token present", token);
      config.headers.Authorization = `Bearer ${token}`; // Attach token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
