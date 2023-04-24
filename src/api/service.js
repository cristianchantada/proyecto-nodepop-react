import { client } from "./client";

function setRequestHeaders (token) {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export async function userLogin(credentials) {
    const response = await client.post("/auth/login", credentials);
    console.log(response.data);
    setRequestHeaders(response.data.accessToken);
    localStorage.setItem('auth', response.data.accessToken);
}

export function userRegister() {
    const response = client.post("/auth/signup");
    return response;
}

export function getAdvs() {
    /* localStorage.getItem('auth'); */
    const response = client.get("/v1/adverts");
    return response;
}

export function postAdv() {
    const response = client.post("/v1/adverts");
    return response;
}

export function getAdv(id) {
    const response = client.get(`/v1/adverts/${id}`);
    return response;
}

export function deleteAdv(id) {
    const response = client.delete(`/api/v1/adverts/${id}`);
    return response;
}
