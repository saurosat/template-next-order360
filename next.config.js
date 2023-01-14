/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'picsum.photos'],
  },
  //Apply fix patch for process.cwd() issue as per https://github.com/vercel/next.js/issues/8251#issuecomment-915287535
  /**
  experimental: { 
    nftTracing: true 
  } */
}

module.exports = nextConfig
