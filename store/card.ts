import { observable, action } from 'mobx';
export interface Card{}

class CardStore implements Card{
   @observable card = [];
   @observable item = {
      id:0,
      title:"",
      imageUr:"",
      price:"",
   }
   @observable totalPrice = 0

   @action addProduct = (price:number) => {
      this.card.push(price)
      this.totalPrice += price
   }
}

export default new CardStore();