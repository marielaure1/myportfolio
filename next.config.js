/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
      return [
          {
              source: '/admin',
              destination: '/admin/works',
              permanent: true,
          },
      ]
  },
}

module.exports = nextConfig
