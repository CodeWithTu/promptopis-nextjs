/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      loader: "custom",
      loaderFile: "./ImageLoader.ts",
    },
  };
  
  export default nextConfig;
  