import '../styles/globals.css'
import 'antd/dist/antd.css'
import Header from '../components/Header'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

const client = new ApolloClient({
   uri: 'http://localhost:1337/graphql',
   cache: new InMemoryCache(),
 });

function MyApp({ Component, pageProps }) {
   return (
      <ApolloProvider client={client}>
         <Header />
         <Component {...pageProps} />
      </ApolloProvider>
   )
}

export default MyApp
