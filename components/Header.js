import React from 'react'
import Logout from '../pages/logout';
import styles from "../styles/Header.module.scss";
import auth from "../store/auth";
import { LoginButton } from '../pages/login';
import { SignupButton } from '../pages/signup';
import Router from "next/router";


const Header = () => {
   return (
      <div className={styles.header}>
         {auth.isAuth && <Logout />}
         {(!auth.isAuth && Router.pathname === "/login") && <SignupButton />}
         {(!auth.isAuth && !Router.pathname === "/login") && <LoginButton />}
      </div>
   )
}

export default Header