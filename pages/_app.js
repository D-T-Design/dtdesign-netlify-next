import "@styles/globals.scss";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import client from "../client";

const App = ({ Component, pageProps, download }) => {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<div className="container" id="outer-container">
			<Navbar download={download} />
			<Component {...pageProps} />
			<Footer download={download} />
		</div>
	);
};

App.getInitialProps = async (ctx) => {
	const download = await client.fetch(/* groq */ `*[_type == "download"][0]{
				description,
				"downloadURL": upload.asset->url
		}`);
	return { download };
};

export default App;
