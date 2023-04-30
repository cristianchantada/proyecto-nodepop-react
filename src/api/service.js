import { client, setRequestHeaders } from "./client";

export function getAdverts() {
  return client.get("/v1/adverts");
}

export async function userLogin(credentials, checked) {
  const response = await client.post("/auth/login", credentials);
  setRequestHeaders(response.accessToken);

  if (checked) {
    localStorage.setItem("auth", response.accessToken);
  }
}

export async function getAdvs() {
  const response = await client.get("/v1/adverts");
  return response;
}

export async function postAdv(advData) {
  const response = await client.post("/v1/adverts", advData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
}

export async function getAdv(id) {
  const response = await client.get(`/v1/adverts/${id}`);
  return response;
}

export async function deleteAdv(id) {
  const response = await client.delete(`/v1/adverts/${id}`);
  return response;
}
