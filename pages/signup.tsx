import RegistrationForm from '../components/RegistrationForm';
import auth from "../store/auth";
import Router from "next/router";
import { Button } from 'antd';
import { useMutation, gql } from '@apollo/client';
import { saveJwt } from "../api/utils";
import { RegisterDocument, RegisterMutation, RegisterMutationVariables } from '../graphql/generated';
import { useState } from 'react';

export const SignupButton = () => {
   const onSignupButtonClick = () => {
      Router.push("/signup")
   }
   return (
      <Button type="primary" onClick={onSignupButtonClick}>Регистрация</Button>
   )
}

const Signup = () => {
   const [errorMessage, setErrorMessage] = useState<string>('')
   const [signupGql, { data, loading, error }] = useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);


   const onSubmit = (values) => {
      const { username, email, password } = values
      signupGql({
         variables: {
            input: {
               email: email,
               password: password,
               username: username,
            }
         }
      }).then((response) => {
         setErrorMessage('')
         if (response.data.register.jwt) {
            saveJwt(response.data.register.jwt)
            auth.login()
         }
         const { pathname } = Router;
         if (auth.isAuth && pathname === "/signup") {
            Router.push("/");
         }
      }).catch((error) => {
         setErrorMessage(error.message)
      });
   }

   return (
      <div className='signup'>
         <div className="signup__header">Регистрация</div>
         <RegistrationForm onSubmit={onSubmit} />
         {errorMessage ? <div id="errorMessage">{errorMessage}</div> : null}
      </div>
   );
}

export default Signup