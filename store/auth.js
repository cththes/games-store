import { makeAutoObservable } from "mobx";
import { getJwt } from "../api/utils";
class auth {

   isAuth = false

   constructor() {
      makeAutoObservable(this);
      if (typeof window !== "undefined") {
         this.isAuth = !!getJwt()
      }
      console.log('this.isAuth',this.isAuth)
   }

   login() {
      this.isAuth = true
   }
   logout() {
      this.isAuth = false
   }
   get isAuth() {
      return this.isAuth
   }
}

export default new auth();