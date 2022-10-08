import { useQuery } from "@apollo/client";
import Router, { useRouter } from "next/router";
import { GetProductDocument, GetProductQuery, GetProductQueryVariables } from "../../graphql/generated";
import { API_URL } from "../../constants/common";
import { Button } from "antd";
import styles from "../../styles/videogame.module.css"
import ImageSlider from "../../components/ImageSlider";
import { useState } from "react";
import CardStore from "../../store/card"
import Card from "../../components/Card";

export default function Videogame() {
  const { query } = useRouter();
  const { data, loading, error } = useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, {
    variables: {
      id: query.id as string,
      screenshotsPagination: { "pageSize": 25 }
    }
  })

  const [isCardActive, setCardActive] = useState(true)

  const videogame = data?.product?.data?.attributes ?? null

  const onBuyButtonClick = (videogame) => {
    setCardActive(true)
    CardStore.addProduct(videogame)
  }

  return (
    <div className={styles.product}>
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
            <Button onClick={() => { onBuyButtonClick(videogame) }}>В корзину</Button>
          </div>

          <div className={styles.card}>
            {isCardActive && <Card />}
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