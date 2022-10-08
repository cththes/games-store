import styles from "../styles/Card.module.css"
import total from "../store/card"
import { API_URL } from "../constants/common"
import CardStore from "../store/card"
const Card = () => {
  
   const onDeleteClick = (id:number) => {
      CardStore.deleteProduct(id)
    }
   return (
      <div>
         <h3>Корзина</h3>
         <div className={styles.total}>{total.CardItems.map(item => <div className={styles.item}>
            <img
               alt={item.videogame.Name}
               src={API_URL + item.videogame?.LargeImg?.data?.[0]?.attributes?.url}
               className={styles.artwork}
            />
            <span className={styles.Name}>{item.videogame.Name}</span>
            <div className={styles.right}>
               <span className={styles.Price}>{item.videogame.Price + item.videogame.Currency}</span>
               <div className={styles.deleteItem} onClick={()=>{onDeleteClick(total.CardItems.indexOf(item))}}>Удалить</div>
            </div>
         </div>)}</div>
      </div>
   )
}
//total.CardItems[total.CardItems.indexOf(item)].videogame.Name
export default Card