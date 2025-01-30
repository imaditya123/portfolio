// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // basePath: "/",
  output: "export",
  images: {
    unoptimized: true,
    domains: [],
    // formats:['image/webp',]
  },

  /* config options here */
  // webpack: (config) => {
  //   config.resolve.alias.canvas = false;
  //   return config;
  // },
  // experimental: {
  //   turbo: {
  //     resolveAlias: {
  //       canvas: "./empty-module.ts",
  //     },
  //   },
  // },
  // swcMinify: false,
};

export default nextConfig;
