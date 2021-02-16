import Link from "next/link";
import SiteWrapper from "@components/SiteWrapper";
import client from "../client";

export async function getStaticProps() {
	const res = await client.fetch(/* groq */ `*[_type == "download"][0]{
				description,
				"downloadURL": upload.asset->url
		}`);
	return { props: { download: res } };
}

export default function Menu(props) {
	const headSettings = {
		title: "Browse my Web Design and Development Portfolio - David Torres Design",
		description:
			"Learn more about me, including what kind of work I do, who I am, and how to contact me.",
	};
	return (
		<SiteWrapper head={headSettings} download={props.download}>
			<main className="body" id="menu">
				<ul className="nav-list">
					<li>
						<Link href="/">
							<a className="nav-link">Home</a>
						</Link>
					</li>
					<li>
						<Link href="/work">
							<a className="nav-link">My Work</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a className="nav-link">About</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a className="nav-link">Contact</a>
						</Link>
					</li>
				</ul>
			</main>
		</SiteWrapper>
	);
}
