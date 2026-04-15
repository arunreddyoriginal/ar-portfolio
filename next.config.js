/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode for better error catching
  reactStrictMode: true,

  // Image domains (add if you serve remote images later)
  images: {
    domains: [],
  },

  // Redirect bare /projects to /#projects (nice UX fallback)
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/#projects',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
