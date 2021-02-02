import Head from "next/head";

export default function HeadCustom(props) {
	return (
		<Head>
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
			<link rel="icon" href="/dtdesign-icon.jpg" />
			<link rel="stylesheet" href="https://use.typekit.net/rdq5egn.css" />
		</Head>
	);
}
