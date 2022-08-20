import RegistrationForm from '../components/RegistrationForm';
import { authAPI } from '../api/api';
import Router from "next/router";
import { Button } from 'antd';

export const SignupButton = () => {
   const onSignupButtonClick = () =>{
      Router.push("/signup")
   }
   return(
      <Button type="primary" onClick={onSignupButtonClick}>Регистрация</Button>
   )
}

const Signup = () => {
   const onSubmit = (values) => {
      const {username, email, password} = values
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