import React, { useState } from 'react'
import Input from '../components/Input';

const signup = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   return (
      <div className='signup'>
         <div className="signup__header">Регистрация</div>
         <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
         <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
         <button className="signup__btn" onClick={() => alert(email, password)}>Войти</button>
      </div>
   );
}

export default signup