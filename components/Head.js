import Head from "next/head";
import { useRouter } from "next/router";

export default function HeadCustom(props) {
	const currentURL = useRouter().asPath;
	return (
		<Head>
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
			<meta property="og:title" content={props.title} key="title" />
			<meta property="og:description" content={props.description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://davidtorres.design${currentURL}`} />
		</Head>
	);
}
