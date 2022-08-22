import Pictures from "../components/pictures";
import NoSSR from "../components/NoSSR"
import Upload from "../components/Upload";

const index = () => {

   return (
      <div>
         <h1>
            Главная страница
         </h1>
         <NoSSR>
            <Upload />
            {/*<Pictures />*/}
         </NoSSR>  
      </div>
   )
}

export default index