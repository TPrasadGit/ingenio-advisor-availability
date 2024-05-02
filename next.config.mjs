/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'si.keen.com',
            port: '',
            pathname: '/cdn-cgi/image/**',
          },
        ],
      },
};

export default nextConfig;
