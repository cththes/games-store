import React, { useState } from 'react'
import Input from '../components/Input';
import { authAPI } from '../api/api';
import Router from "next/router";

export const SignupButton = () => {
   return (
      <button onClick={() => {
         Router.push("/signup");
      }}>Зарегистрироваться</button>
   )
}

const Signup = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [username, setUsername] = useState("")

   const onSignupButtonClick = () => {
      authAPI.signup(username, email, password)
         .then((response) => {
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