import React from 'react'
import RegistrationForm from '../components/RegistrationForm';
import { authAPI } from '../api/api';
import Router from "next/router";

const Signup = () => {
   const onSubmit = (values) => {
      const {username, email, password} = values
      console.log('username, email, password',username, email, password)
      authAPI.signup(username, email, password)
         .then((response) => {
            Router.push("/signup");
         });
   }

   return (
      <div className='signup'>
         <div className="signup__header">Регистрация</div>
         <RegistrationForm onSubmit={onSubmit} />
      </div>
   );
}

export default Signup