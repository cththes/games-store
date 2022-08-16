import axios from 'axios';
import React from 'react'
import { authAPI } from '../api/api';

const Logout = () => {
   return (
      <div className='logout'>
         <button className="logout__btn" onClick={() => { authAPI.logout() }}>Выйти</button>
      </div>
   );
}

export default Logout