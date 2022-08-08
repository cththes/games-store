import Router from "next/router";
import { useEffect } from "react";
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
      </div>
   )
}

export default Main