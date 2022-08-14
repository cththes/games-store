export const saveJwt = (jwt) => {
   localStorage.setItem('jwt', jwt)
}

export const deleteJwt = () => {
   localStorage.removeItem('jwt')
}

export const getJwt = () => {
   return localStorage.getItem('jwt')
}
