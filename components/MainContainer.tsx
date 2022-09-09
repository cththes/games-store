import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
   return (
      <>
         <Head>
            <meta name="keywords" content={"some meta tags" + keywords}/>
            <title id="title">Главная страница</title>
         </Head>
         <div className="navbar">
            <A href={"/"} text="Главная" />
            <A href={"/signup"} text="Регистрация" />

         </div>
         <div>{children}
         </div>

      </>
   );
};

export default MainContainer;
