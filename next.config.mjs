/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "api.microlink.io", // Microlink Image Preview,
          'avatars.githubusercontent.com',
            'assets.aceternity.com',
            "res.cloudinary.com"
        ],
      },
};

export default nextConfig;
