import '../styles/globals.css'
//import 'antd/dist/antd.css'
import Header from '../components/Header'
import { ApolloProvider} from '../lib/apollo'
import {useApollo} from '../lib/apollo'

const MyApp = ({ Component, pageProps }) => {
   const apolloClient = useApollo(pageProps.initialApolloState)
   return (
      <ApolloProvider client={apolloClient}>
         <Header />
         <Component {...pageProps} />
      </ApolloProvider>
   )
}

export default MyApp
