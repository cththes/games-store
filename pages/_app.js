import '../styles/globals.css'
import 'antd/dist/antd.css'
import Header from '../components/Header'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import {createUploadLink} from "apollo-upload-client"

/*const httpLink = createHttpLink({
   uri: 'http://localhost:1337/graphql',
 });*/

/*const authLink = setContext((_, { headers }) => { 
  const token = localStorage.getItem('jwt');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});*/

const link = createUploadLink({
  uri: 'http://localhost:1337/graphql'
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
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
