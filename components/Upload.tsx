import React from 'react'
import { useMutation, gql } from "@apollo/client";
import {API_URL} from "../constants/common"

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

   const [uploadImg, { data: uploadData, loading, error}] =
   useMutation(UPLOAD_IMG_MUTATION);

   const onUploadPhoto = (e) => {
     if (e.target.files.length) {
       uploadImg({
         variables: {
           file: e.target.files[0],
         },
       })
     } 
   }
  const fileURL = uploadData ? `${API_URL}${uploadData.upload.data.attributes.url}` : undefined
  return (
    <div>
       <label>
        <input type={"file"} text="Загрузить" onChange={onUploadPhoto} />
      </label>
      {loading ? <div>
        Uploading...
       </div> : null
      }
      {
        fileURL ? <div>
          File was successfully uploaded. FileURL: <a href={fileURL}>
            {fileURL}
            </a>
        </div> : null
      }
      {
        error ? <div>
          Error: {error.message}
        </div> : null
      }
    </div>
  )
}

export default Upload