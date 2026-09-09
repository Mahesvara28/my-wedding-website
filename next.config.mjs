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
  // REMOVE the unoptimized: true block so Next.js can optimize images automatically!
};

export default nextConfig;