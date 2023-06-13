/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack(config) {
    // Import `svg` files as React components
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: [{ loader: "@svgr/webpack", options: { svgo: false } }],
    });

    // Import videos, models, hdrs, and fonts
    config.module.rules.push({
      test: /\.(mp4|hdr|glb|woff|woff2)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

module.exports = nextConfig;
