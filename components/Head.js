import Head from "next/head";

export default function HeadCustom(props) {
	return (
		<Head>
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
			<meta property="og:title" content={props.title} key="title" />
			<meta property="og:description" content={props.description} />
		</Head>
	);
}
