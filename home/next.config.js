const { BLOG_URL, BRAND_A_URL, BRAND_B_URL } = process.env

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
        destination: `${BRAND_A_URL}/brand-a`,
      },
      {
        source: '/brand-a/:path*',
        destination: `/brand-a/:path*`,
      },
      {
        source: '/brand-b',
        destination: `${BRAND_B_URL}/brand-b`,
      },
      {
        source: '/brand-b/:path*',
        destination: `/brand-b/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
