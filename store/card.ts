import { observable, action } from 'mobx';
import { VideogameType } from '../types/types';
export interface Card { }

class CardStore implements Card {
   @observable CardItems = [];
   @observable item = {
      Name: "",
      Image: "",
      Price: "",
      isInCard: false,
   }
   @observable totalPrice = 0

   @action addProduct = (videogame: VideogameType) => {
      this.CardItems.forEach(item => {
        if (item.videogame.Name === videogame.Name) this.item.isInCard = true
      }
      )
      if (!this.item.isInCard) {
         this.CardItems.push({
            videogame
         })
         this.totalPrice += videogame.Price
      }
      this.item.isInCard = false

   }
   @action deleteProduct = (id: number) => {
      this.CardItems.splice(id, 1)
   }
   get total() {
      return this.CardItems
   }
}

export default new CardStore();