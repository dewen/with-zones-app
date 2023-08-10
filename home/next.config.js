const { BLOG_URL, BRAND_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
      {
        source: '/brand-a',
        destination: `${BRAND_URL}/brand-a`,
      },
      {
        source: '/brand-a/:path*',
        destination: `/brand-a/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
