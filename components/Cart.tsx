import styles from "../styles/Card.module.css"
import total from "../store/cart"
import { API_URL } from "../constants/common"
import CartStore from "../store/cart"
const Cart = () => {
  
   const onDeleteClick = (id:number) => {
      CartStore.deleteProduct(id)
    }
   return (
      <div>
         <h3>Корзина</h3>
         <div className={styles.total}>{total.CartItems.map(item => <div className={styles.item}>
            <img
               alt={item.videogame.Name}
               src={API_URL + item.videogame?.LargeImg?.data?.[0]?.attributes?.url}
               className={styles.artwork}
            />
            <span className={styles.Name}>{item.videogame.Name}</span>
            <div className={styles.right}>
               <span className={styles.Price}>{item.videogame.Price + item.videogame.Currency}</span>
               <div className={styles.deleteItem} onClick={()=>{onDeleteClick(total.CartItems.indexOf(item))}}>Удалить</div>
            </div>
         </div>)}</div>
      </div>
   )
}
export default Cart