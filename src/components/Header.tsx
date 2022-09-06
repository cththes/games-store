
import React from 'react'
import Logout from './logout';
import styles from "../styles/Header.module.scss";
import auth from '../store/auth';
import { LoginButton } from '../pages/login';
import { SignupButton } from '../pages/signup';
import { useRouter } from 'next/router';
import NoSSR from './NoSSR';


const Header = () => {
   const Router = useRouter()
   return (
      <div className={styles.header}>
         <NoSSR>
            {auth.isAuth && <Logout />}
            {(!auth.isAuth && Router.pathname === "/login") && <SignupButton />}
            {(!auth.isAuth && Router.pathname !== "/login") && <LoginButton />}
         </NoSSR>
      </div>
   )
}

export default Header