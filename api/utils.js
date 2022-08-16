export const saveJwt = (jwt) => {
   if (localStorage) {
      localStorage.setItem('jwt', jwt)
   }
}

export const deleteJwt = () => {
   if (localStorage) {
      localStorage.removeItem('jwt')
   }
}

export const getJwt = () => {
   if (localStorage) {
      return localStorage.getItem('jwt')
   } else return false
}
