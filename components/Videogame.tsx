import React from 'react'
import { useQuery } from "@apollo/client";
import Router, { useRouter } from "next/router";
import { GetProductDocument, GetProductQuery, GetProductQueryVariables } from "../graphql/generated";
import { API_URL } from "../constants/common";
import { Button } from "antd";
import styles from "../styles/videogame.module.css"
import ImageSlider from "./ImageSlider";
import { observer} from "mobx-react-lite";

const Videogame = ({cartStore}) => {
   const { query } = useRouter();
   const productId = query.id as string;
   const { data, loading, error } = useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, {
     variables: {
       id: productId,
       screenshotsPagination: { "pageSize": 25 }
     }
   })
 
   const videogame = data?.product?.data?.attributes ?? null
 
   const onBuyButtonClick = () => {
      cartStore.addProduct(productId)
   }
 
   const inTheCard = cartStore.cartItems.includes(productId)
 
   console.log('CartStore.CartItems',cartStore.cartItems)
   return (
     <div className={styles.product}>
      {cartStore.cartItems.map(id => <div>{id}</div>)}
       {loading && "loading"}
       {error && error.message}
       <Button onClick={() => Router.push('/')}>На главную</Button>
       {videogame ? <div>
         <h1>{videogame.Name}</h1>
         <div className={styles.rightSideBar}>
           <img
             alt={videogame.Name}
             src={API_URL + videogame?.LargeImg?.data?.[0]?.attributes?.url}
             className={styles.artwork}
           />
 
           <div className={styles.description}>{videogame.Description}</div>
 
           <div className={styles.purchaseBlock}>
             <span className={styles.price}>
               {videogame.Price + ' ' + videogame.Currency + ' '}
             </span>
             <Button onClick={onBuyButtonClick}>{
               inTheCard
                 ? "Товар уже в корзине"
                 : "Добавить в корзину"}
             </Button>
           </div>
         </div>
 
         <div className={styles.screenshots}>
           <div className={styles.slider}><ImageSlider slides={videogame.Screenshots.data} /></div>
         </div>
 
         {/*<div>{videogame.Date}</div> */}
       </div> : null}
     </div>
   );
}

export default observer(({store}) => <Videogame cartStore={store}/>)