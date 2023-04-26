import axios from "axios";

export const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL
  }
);
  
client.defaults.headers.post['Content-Type'] = 'multipart/form-data'
client.interceptors.response.use(response => response.data);

export const setRequestHeaders = token => 
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);

export function removeRequestHeaders() {
  delete client.defaults.headers.common['Authorization'];
  localStorage.removeItem('auth');
}