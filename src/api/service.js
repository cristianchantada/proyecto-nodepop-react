import { client, setRequestHeaders } from "./client";

export function getAdverts(){
  return client.get("/v1/adverts");
}

export async function userLogin(credentials, checked) {
  const response = await client.post("/auth/login", credentials);
  setRequestHeaders(response.accessToken);
  
  if(checked){
    localStorage.setItem('auth', response.accessToken);
  }
}

export async function getAdvs() {
  const response = await client.get("/v1/adverts");
  return response;
}

export async function postAdv(advData) {
  
  const response = await client.post("/v1/adverts", advData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
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
