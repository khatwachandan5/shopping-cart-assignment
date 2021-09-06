module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/category",
        destination: "/",
      },
    ];
  },
};
