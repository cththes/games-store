import { action, makeObservable, observable } from 'mobx';
export interface Cart { }

class CartStore implements Cart {
   cartItems = [];
   constructor() {
      makeObservable(this, {
         cartItems: observable,
         addProduct: action,
         deleteProduct: action
      });
   }

   addProduct = (productId: string) => {
      this.cartItems.push(productId)
   }
   deleteProduct = (productId: string) => {
      this.cartItems.filter(id => id !== productId)
   }
}

export default new CartStore();