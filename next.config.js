require('graphql-tag/loader')

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
   },
   webpack: (config, options) => {
      config.module.rules.push({
         test: /\.(graphql|gql)$/,
         exclude: /node_modules/,
         loader: 'graphql-tag/loader'
      })
      return config
   } 
}