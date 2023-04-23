import { client as axiosClient } from "./client";

export function userLogin(client) {
    const token = client.post("/auth/login");
    localStorage.setItem('auth', token);
}

export function userRegister(client) {
    const response = client.post("/auth/signup");
    return response;
}

export function getAdvs(client) {
    const response = client.get("/api/v1/adverts");
    return response;
}

export function postAdv(client) {
    const response = client.post("/api/v1/adverts");
    return response;
}

export function getAdv(client, id) {
    const response = client.get(`/api/v1/adverts/${id}`);
    return response;
}

export function deleteAdv(client, id) {
    const response = client.delete(`/api/v1/adverts/${id}`);
    return response;
}
