import axios from 'axios';
import React, { useState } from 'react'
import Input from '../components/Input';

const Logout = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [username, setUsername] = useState("")

   const onLogoutButtonClick = () => {
      axios
         .post(`
      http://localhost:1337/api/auth/local`, {
            identifier: email,
            password: password
         })
         .then((response) => {
            console.log('response', response)
         });
   }


   return (
      <div className='logout'>
         <button className="logout__btn" onClick={onLogoutButtonClick}>Выйти</button>
      </div>
   );
}

export default Logout