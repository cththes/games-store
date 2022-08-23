import { useEffect} from "react";
import auth from "../store/auth";
import { useQuery, useMutation, gql } from "@apollo/client";
import Router from "next/router";
import {API_URL} from "../constants/common"

const GET_IMG_QUERY = gql`
  query getPictures {
    myPictures {
      data {
         id
         attributes {
            Description,
            Content{
               data{
                  attributes{
                     name
                     url
                  }
               }
            }
         }
      }
    }
  }
`;



const Pictures = () => {
  const { data, loading, error } = useQuery(GET_IMG_QUERY)
  const imgs = data ? data.myPictures.data : []

  useEffect(() => {
   const { pathname } = Router;
   if (!auth.isAuth && pathname === "/") {
      Router.push("/signup");
   }
   },[]);

  if (!auth.isAuth) return null;
  return (
    <div>
      <div>
        {imgs.map((image) => (
          <div key={image.id}>
            <div>{image.attributes.Description}</div>
            <div>
              <img
                src={API_URL + image.attributes.Content.data[0].attributes.url}
                alt={image.attributes.Description}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
