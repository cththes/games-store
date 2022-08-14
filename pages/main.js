import Router from "next/router";
import { useEffect } from "react";
import Pictures from "../components/pictures";
import auth from "../store/auth";

const Main = () => {
   useEffect(() => {
      const { pathname } = Router;
      if (!auth.isAuth && pathname === "/") {
         Router.push("/signup");
      }
   });


   return (
      <div>
         <h1>
            Главная страница
         </h1>
         <Pictures />
      </div>
   )
}

export default Main