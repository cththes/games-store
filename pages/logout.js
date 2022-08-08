import axios from 'axios';
import React from 'react'

const Logout = () => {
   return (
      <div className='logout'>
         <button className="logout__btn" onClick={() => alert('logout')}>Выйти</button>
      </div>
   );
}

export default Logout