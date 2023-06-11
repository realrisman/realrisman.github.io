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

    return config;
  },
};

module.exports = nextConfig;
