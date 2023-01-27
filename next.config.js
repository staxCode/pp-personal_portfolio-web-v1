/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns:[
    //   {
    //     protocol: 'https',
    //     hostname: 'api-portfolio-stxcd.up.railway.app',
    //     pathname: '/api/v1/projects/public/**'
    //   }
    // ]
    domains: ['api-portfolio-stxcd.up.railway.app']
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
