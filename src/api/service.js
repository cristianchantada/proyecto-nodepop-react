import { client, setRequestHeaders } from "./client";

export function getAdverts(){
  return client.get("/v1/adverts");
}

export async function userLogin(credentials) {
  const response = await client.post("/auth/login", credentials);
  setRequestHeaders(response.accessToken);
  localStorage.setItem('auth', response.accessToken);
}

export async function getAdvs() {
  const response = await client.get("/v1/adverts");
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
