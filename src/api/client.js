import axios from "axios";

export const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL
  }
);
  
client.interceptors.response.use(response => response.data);

export function setRequestHeaders(token) {
  console.log(token)
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}