import LoginForm from '../components/LoginForm';
import { authAPI } from '../api/api';
import auth from "../store/auth";
import Router from "next/router";
import { Button } from 'antd';
import { useMutation, gql } from '@apollo/client';
import {saveJwt} from "../api/utils";


const LOGIN_MUTATION = gql`
   mutation login($input: UsersPermissionsLoginInput!){
      login(input: $input) {
      jwt
      user {
         id
         username
         email
         confirmed
         blocked
      }
      }
   }
`;

export const LoginButton = () => {
   const onLoginButtonClick = () => {
      Router.push("/login")
   }
   return (
      <Button type="primary" onClick={onLoginButtonClick}>Войти</Button>
   )
}

const Login = () => {
   const [loginGql, { data, loading, error }] = useMutation(LOGIN_MUTATION);

   const onSubmit = (values) => {
      const { email, password } = values
      /*authAPI.login(email, password)
         .then((response) => {
            if (response.status === 200) {
               auth.login()
            }
            const { pathname } = Router;
            if (auth.isAuth && pathname === "/login") {
               Router.push("/");
            }
         });*/
      loginGql({
         variables: {
            input: {
               identifier: email,
               password: password,
               provider: "local"
            }
         }
      }).then((response) => {
         console.log("response",response)
         if (response.data.login.jwt) {
            saveJwt(response.data.login.jwt)
            auth.login()
         }
         const { pathname } = Router;
         console.log(".then auth.isAuth", auth.isAuth)
         if (auth.isAuth && pathname === "/login") {
            Router.push("/");
         }
      })
   }
   return (
      <div className='login'>
         <div className="login__header">Авторизация</div>
         <LoginForm onSubmit={onSubmit} />
      </div>
   );
}

export default Login