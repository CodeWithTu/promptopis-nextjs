/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./ImageLoader.ts",
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
