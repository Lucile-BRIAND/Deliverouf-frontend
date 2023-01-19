import axios from "axios";

export const baseUrl =
  "http://localhost:7777/api/";

export const api = axios.create({
  baseURL:
    "http://localhost:7777/api/",
  timeout: 1000,
});
