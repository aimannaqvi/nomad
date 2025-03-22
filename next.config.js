/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
  webpack: (config) => {
    // This is necessary for MapLibre GL to work with Next.js
    config.resolve.alias = {
      ...config.resolve.alias,
      'mapbox-gl': 'maplibre-gl',
    };
    return config;
  },
}

module.exports = nextConfig 