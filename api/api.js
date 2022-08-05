import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: `http://localhost:1337`,
});

export const authAPI = {
   signup(username, email, password) {
      return instance.post(`api/auth/local/register`, { username, email, password })
   },
   login(username, password) {
      return instance.post(`/api/auth/local`, { username, password });
   },
};