import LoginForm from '../components/LoginForm';
import { authAPI } from '../api/api';
import auth from "../store/auth";
import Router from "next/router";
import { Button } from 'antd';

export const LoginButton = () => {
   const onLoginButtonClick = () =>{
      Router.push("/login")
   }
   return(
      <Button type="primary" onClick={onLoginButtonClick}>Войти</Button>
   )
}

const Login = () => {
   const onSubmit = (values) => {
      const {email, password} = values
      authAPI.login(email, password)
         .then((response) => {
            if (response.status === 200) {
               auth.login()
            }
            const { pathname } = Router;
            if (auth.isAuth && pathname === "/login") {
               Router.push("/");
            }
         });
   }

   return (
      <div className='login'>
         <div className="login__header">Авторизация</div>
         <LoginForm onSubmit={onSubmit} />
      </div>
   );
}

export default Login