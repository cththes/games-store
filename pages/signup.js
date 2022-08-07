import React, { useState } from 'react'
import axios from 'axios';
import Input from '../components/Input';
import { authAPI } from '../api/api';

const Signup = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [username, setUsername] = useState("")

   const onSignupButtonClick = () => {
      authAPI.signup(username, email, password)
         .then((response) => {
            console.log('response', response)
         });
   }

   return (
      <div className='signup'>
         <div className="signup__header">Регистрация</div>
         <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
         <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
         <button className="signup__btn" onClick={onSignupButtonClick}>Зарегистрироваться</button>
      </div>
   );
}

export default Signup