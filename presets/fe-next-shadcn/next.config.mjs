/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/admin',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
