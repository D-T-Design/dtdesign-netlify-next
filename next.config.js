const withOffline = require("next-offline");

const nextConfig = {
	basePath: "",
	images: {
		domains: ["cdn.sanity.io"],
	},
};

module.exports = withOffline(nextConfig);
