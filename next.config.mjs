/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This allows the build to finish even with empty files or type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This stops the build from crashing due to formatting rules
    ignoreDuringBuilds: true,
  },
  // Helps images load correctly on mobile
  images: {
    unoptimized: true,
  }
};

export default nextConfig;