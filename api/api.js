import * as axios from "axios";

const instance = axios.create({
   baseURL: `http://localhost:1337`,
});

export const authAPI = {
   signup(username, email, password) {
      return instance.post(`/api/auth/local/register`, { username, email, password })
   },
   login(identifier, password) {
      return instance.post(`/api/auth/local`, { identifier, password });
   },
   logout(identifier, password) {
      return instance.post(`/api/auth/local`, { identifier, password });
   },
};