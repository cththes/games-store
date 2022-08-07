import React from 'react'
import Logout from '../pages/logout';
import styles from "../styles/Header.module.scss";

const Header = () => {
   return (
      <div className={styles.header}>
         <Logout />
      </div>
   )
}

export default Header