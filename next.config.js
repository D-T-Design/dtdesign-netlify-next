const nextConfig = {
	reactStrictMode: true,
	output: "export",
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
