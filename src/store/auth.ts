import { observable, action } from 'mobx';
import { getJwt } from "../api/utils";

export interface Auth{}
class AuthStore implements Auth{
   @observable isAuth = false;
   constructor() {
      this.isAuth = false
      if (typeof window !== "undefined") {
         this.isAuth = !!getJwt()
      }
   }
   
   @action login = () => {
      this.isAuth = true
   }
   @action logout = () => {
      this.isAuth = false
   }
   get isAuthorized() {
      return this.isAuth
   }
}

export default new AuthStore();