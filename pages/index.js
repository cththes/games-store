import Main from "./main"
import {useQuery} from '@apollo/client'
import GET_PRODUCT_BY_ID from '../lib/queries/getProductById'
import {initializeApollo} from '../lib/apollo'

const VARIABLE = 'cbraz'

const index = () => {
   const {data, error, loading} = useQuery(GET_PRODUCT_BY_ID, {
      variables:{code:VARIABLE}
   })

   return (
      <div>
         <Main />
      </div>
   )
}

export const getStaticProps = async () => {
   const apolloClient = initializeApollo()
   await apolloClient.query({
      query: GET_PRODUCT_BY_ID,
      variables: {
         code: VARIABLE
      }
   })
   return {props: {initialApolloState: apolloClient.cache.extract()}}
}

export default index