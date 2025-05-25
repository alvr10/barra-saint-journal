/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Disable if you're having issues with server components
    serverComponentsExternalPackages: ['fs'],
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;