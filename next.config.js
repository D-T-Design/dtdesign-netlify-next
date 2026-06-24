const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
		unoptimized: true,
	},
};

module.exports = nextConfig;
