import axios from 'axios';
import React, { useState } from 'react'
import { authAPI } from '../api/api';
import auth from "../store/auth";
import { useHistory } from "react-router-dom";

//let history = useHistory();

/*const logout = () => {
   localStorage.removeItem('jwt');
   localStorage.removeItem('username');
   history.push("/sigin");
   auth.logout()
   console.log('auth.isAuth', auth.isAuth)
}*/

const Logout = () => {
   return (
      <div className='logout'>
         <button className="logout__btn" onClick={() => alert('logout')}>Выйти</button>
      </div>
   );
}

export default Logout