/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn2.thecatapi.com',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'asset.kompas.com',
            port: '',
            //pathname: '/account123/**',
          }
        ],
      },
};

export default nextConfig;
