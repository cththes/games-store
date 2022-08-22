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

   console.log('uploadData',uploadData)

   const onUploadPhoto = (e) => {
     if (e.target.files.length) {
       uploadImg({
         variables: {
           file: e.target.files[0],
         },
       }).then(({ response }) => {
          console.log("response", response);
        })
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