/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ FIX IMAGE EXPORT ERROR
  },
};

module.exports = nextConfig;
