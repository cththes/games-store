import * as axios from "axios";
import Router from "next/router";
import { deleteJwt, saveJwt, getJwt } from "./utils";
import auth from '../store/auth.js'

const instance = axios.create({
   baseURL: `http://localhost:1337/api/`,
});

export const authAPI = {
   logout() {
      deleteJwt()
      auth.logout()
      Router.push("/login");
   }
};

export const picturesAPI = {
   getIMG() {
      const jwt = getJwt()
      return instance.get(`my-pictures?populate[0]=Content`, {
         headers: { Authorization: `Bearer ${jwt}` },
      })
   },
   saveIMG(photoFile) {
      const formData = new FormData();
      formData.append('files', photoFile);
      const jwt = getJwt()
      return instance.post(`upload`, formData, {
         headers: { Authorization: `Bearer ${jwt}`, 'Content-Type': 'multipart/form-data' }
      });
   },
}