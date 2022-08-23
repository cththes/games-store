import React from 'react'
import { useMutation, gql } from "@apollo/client";

const UPLOAD_IMG_MUTATION = gql`
  mutation uploadFile($file: Upload!) {
    upload(file: $file) {
      data {
        id
        attributes {
          name
          url
        }
      }
    }
  }
`;

const Upload = () => {

   const [uploadImg, { data: uploadData}] =
   useMutation(UPLOAD_IMG_MUTATION);

   const onUploadPhoto = (e) => {
     if (e.target.files.length) try {
       uploadImg({
         variables: {
           file: e.target.files[0],
         },
       })
     } catch(err) {
      console.log(err.name)
    }
   }
  return (
    <div>
       <label>
        <input type={"file"} text="Загрузить" onChange={onUploadPhoto} />
      </label>
    </div>
  )
}

export default Upload