import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-08rd.onrender.com"
  //baseURL: "http://localhost:3333"
});
