import { client } from "./client";

export async function userLogin(credentials) {
    console.log(credentials);
    const token = await client.post("/auth/login", credentials);
    console.log(token);
    localStorage.setItem('auth', token);
}

export function userRegister() {
    const response = client.post("/auth/signup");
    return response;
}

export function getAdvs() {
    const response = client.get("/api/v1/adverts");
    return response;
}

export function postAdv() {
    const response = client.post("/api/v1/adverts");
    return response;
}

export function getAdv(id) {
    const response = client.get(`/api/v1/adverts/${id}`);
    return response;
}

export function deleteAdv(id) {
    const response = client.delete(`/api/v1/adverts/${id}`);
    return response;
}
