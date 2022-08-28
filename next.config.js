//@type {import('next').NextConfig}

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
   typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
}