import axios from "axios";

// Use VITE_API_URL from your .env file set in Vercel
const BASE_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
