import '../styles/globals.css'
//import 'antd/dist/antd.css'
import Header from '../components/Header'
import Login from './login'

function MyApp({ Component, pageProps }) {
   return (
      <div>
         <Header />
         <Login />
         <Component {...pageProps} />
      </div>
   )
}

export default MyApp
