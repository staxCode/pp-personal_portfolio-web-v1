/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns:[
    //   {
    //     protocol: '',
    //     hostname: '',
    //     port: '',
    //     pathname: '/api/v1/projects/public/**'
    //   }
    // ]
    domains: ['api-portfolio-stxcd.up.railway.app']
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
