import { useEffect, useState } from "react"
import { picturesAPI } from "../api/api"
import auth from "../store/auth";

const Pictures = () => {
   const [imgs, setImgs] = useState([])
   useEffect(() => {
      if (auth.isAuth) {
         picturesAPI.getIMG().then((response) => {
            setImgs(response.data.data)
         })
      }
   }, [])
   if (!auth.isAuth) return null
   return (
      <div>
         <button>Загрузить</button>
         <div>
            {imgs.map(image => (
               <div key={image.id}>
                  <div>
                     {image.attributes.Description}
                  </div>
                  <div>
                     <img src={`http://localhost:1337${image.attributes.Content.data[0].attributes.url}`} alt={image.attributes.Description} />
                  </div>
               </div>))}
         </div>
      </div>
   )
}

export default Pictures