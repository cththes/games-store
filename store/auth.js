import { makeAutoObservable } from "mobx";

class auth {
   isAuth = false

   constructor() {
      makeAutoObservable(this);
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