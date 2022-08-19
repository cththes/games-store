import { gql } from "@apollo/client"

export const ALL_TODO = gql`
   query AllTodos {
      allTodos{
         id 
         title 
         completed
      }
   }`