/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow the Unsplash demo photos (and any future remote images) to load.
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
