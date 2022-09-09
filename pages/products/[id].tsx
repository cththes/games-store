import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GetProductDocument, GetProductQuery, GetProductQueryVariables } from "../../graphql/generated";
import { API_URL } from "../../constants/common";

export default function Videogame() {
  const { query } = useRouter();
  const { data, loading, error } = useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, {
    variables: {
      id: query.id as string
    }
  })
  const videogame = data?.product?.data?.attributes ?? null
  console.log('videogame', videogame)
  return (
    <div>
      {loading && "loading"}
      {error && error.message}
      {videogame ? <div>
        <h1>Видеоигра с id {query.id}</h1>
        <div>{videogame.Price + videogame.Currency}</div>
        <div>{videogame.Name}</div>
        <div>{videogame.Description}</div>
        <div>{videogame.Date}</div>
        <img alt={videogame.Name} src={API_URL + videogame?.LargeImg?.data?.[0]?.attributes?.url} /></div> : null}
    </div>
  );
}