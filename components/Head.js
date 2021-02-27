import Head from "next/head";
import { useRouter } from "next/router";

export default function HeadCustom(props) {
	const router = useRouter();
	const currentURL = router.asPath;
	const ogImage = () => {
		const url = props.seophoto
			? props.seophoto
			: "https://davidtorres.design/img/facebook_share.jpg";
		return url;
	};
	return (
		<Head>
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
			<meta property="og:title" content={props.title} key="title" />
			<meta property="og:description" content={props.description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://davidtorres.design${currentURL}`} />
			<meta property="og:image" content={ogImage()} />
			<meta name="theme-color" content="#bd3504" />
			<link rel="manifest" href="/manifest.json" />
			<link rel="apple-touch-icon" href="/dtdesign-icon_72.jpg" />
			<meta name="apple-mobile-web-app-status-bar" content="#bd3504" />
		</Head>
	);
}
