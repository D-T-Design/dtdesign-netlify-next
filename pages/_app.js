import "@styles/globals.scss";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import * as fbq from "../lib/fbp";

import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import client from "../client";
import NProgress from "nprogress";

NProgress.configure({
	showSpinner: false,
	trickleSpeed: 100,
	easing: "ease-in-out",
	speed: 100,
	minimum: 0.3,
});

const fbEvents = (url) => {
	fbq.pageview();
	fbq.event("View Content", { url });
};

const App = ({ Component, pageProps, download }) => {
	const router = useRouter();
	const startLoading = () => NProgress.start();
	const doneLoading = () => NProgress.done();
	useEffect(() => {
		const handleRouteChange = (url) => {
			NProgress.done();
			gtag.pageview(url);
			fbEvents(url);
		};
		router.events.on("routeChangeStart", startLoading);
		router.events.on("routeChangeComplete", handleRouteChange);
		router.events.on("routeChangeError", doneLoading);
		return () => {
			router.events.off("routeChangeStart", doneLoading);
			router.events.off("routeChangeComplete", handleRouteChange);
			router.events.off("routeChangeError", doneLoading);
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
