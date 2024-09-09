/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['wefit-react-web-test.s3.amazonaws.com'],
    },
    experimental: {
      appDir: true,
    },
  };
  
  export default nextConfig;