import axios from 'axios';
import React, { useState } from 'react'
import { authAPI } from '../api/api';
import Input from '../components/Input';
import auth from "../store/auth";

const Login = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const onLoginButtonClick = () => {
      authAPI.login(email, password)
         .then((response) => {
            if (response.status === 200) {
               auth.login()
            }
            console.log('auth.isAuth', auth.isAuth)
         });
   }


   return (
      <div className='signup'>
         <div className="signup__header">Авторизация</div>
         <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
         <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
         <button className="signup__btn" onClick={onLoginButtonClick}>Войти</button>
      </div>
   );
}

export default Login