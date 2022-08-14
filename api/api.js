import * as axios from "axios";
import { getJwt } from "./utils";

const instance = axios.create({
   baseURL: `http://localhost:1337/api/`,
});

export const authAPI = {
   signup(username, email, password) {
      return instance.post(`auth/local/register`, { username, email, password })
   },
   login(identifier, password) {
      return instance.post(`auth/local`, { identifier, password });
   },
};

export const picturesAPI = {
   getIMG() {
      const jwt = getJwt()
      console.log('jwt', jwt)
      return instance.get(`my-pictures?populate[0]=Content`, {
         headers: { Authorization: `Bearer ${jwt}` },
      })
   }
}
