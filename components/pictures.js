import { useEffect, useState } from "react"
import { picturesAPI } from "../api/api"
import auth from "../store/auth";

const Pictures = () => {
   const [imgs, setImgs] = useState([])
   const onUploadPhoto = (e) => {
      if (e.target.files.length) {
         picturesAPI.saveIMG(e.target.files[0]);
      }
   };
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
         <label>
            <input type={"file"} text="Загрузить" onChange={onUploadPhoto} />
         </label>
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