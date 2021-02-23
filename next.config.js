const withOffline = require("next-offline");

const nextConfig = {
	images: {
		domains: ["cdn.sanity.io"],
	},
};

module.exports = withOffline(nextConfig);
