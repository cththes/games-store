import React from 'react'
import { useMutation, gql } from "@apollo/client";
import {API_URL} from "../constants/common"
import UPLOAD_FILE from '../graphql/mutations/uploadFile.mutation.graphql';

const Upload = () => {

   const [uploadImg, { data: uploadData, loading, error}] =
   useMutation(UPLOAD_FILE);

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
        <input type={"file"} placeholder="Загрузить" onChange={onUploadPhoto} />
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