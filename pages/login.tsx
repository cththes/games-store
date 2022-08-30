import LoginForm from '../components/LoginForm';
import auth from "../store/auth";
import Router from "next/router";
import { Button } from 'antd';
import { useMutation, gql } from '@apollo/client';
import {saveJwt} from "../api/utils";
import LOGIN from '../graphql/mutations/login.mutation.graphql';

export const LoginButton:React.FC = () => {
   const onLoginButtonClick = () => {
      Router.push("/login")
   }
   return (
      <Button type="primary" onClick={onLoginButtonClick}>Войти</Button>
   )
}

const Login = () => {
   const [loginGql, { data, loading, error }] = useMutation(LOGIN);

   const onSubmit = (values) => {
      const { email, password } = values
      loginGql({
         variables: {
            input: {
               identifier: email,
               password: password,
               provider: "local"
            }
         }
      }).then((response) => {
         if (response.data.login.jwt) {
            saveJwt(response.data.login.jwt)
            auth.login()
         }
         const { pathname } = Router;
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