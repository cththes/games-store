import React from "react";
import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
   return (
      <>
         <Head>
            <meta keywords={"some meta tags" + keywords}></meta>
            <title id="title">Главная страница</title>
         </Head>
         <div className="navbar">
            <A href={"/"} text="Главная" />
            <A href={"/signup"} text="Регистрация" />
         </div>
         <div>{children}</div>
      </>
   );
};

export default MainContainer;
