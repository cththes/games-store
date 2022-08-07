import axios from 'axios';
import React, { useState } from 'react'
import Input from '../components/Input';

const Login = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const onLoginButtonClick = () => {
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
      <div className='signup'>
         <div className="signup__header">Авторизация</div>
         <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
         <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
         <button className="signup__btn" onClick={onLoginButtonClick}>Войти</button>
      </div>
   );
}

export default Login