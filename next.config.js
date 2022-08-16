module.exports = {
   reactStrictMode: true,
   redirects: async () => {
      return [
         {
            source: '/notexistedpage',
            destination: '/',
            permanent: true,
         }
      ]
   }
}