import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/auth", // Altere para o domínio do seu backend se necessário
});

export interface RegisterData {
  login: string;
  password: string;
  name: string;
  email: string;
  cpf: string;
}

export interface LoginData {
  login: string;
  password: string;
}

export async function registerUser(data: RegisterData) {
  const response = await API.post("/register", data);
  return response.data;
}

export async function loginUser(data: LoginData) {
  const response = await API.post("/login", data);
  return response.data; // deve conter o token, conforme seu backend
}
