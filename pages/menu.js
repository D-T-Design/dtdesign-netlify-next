import Link from "next/link";
import Head from "@components/Head";

export default function Menu() {
	const headSettings = {
		title: "Browse my Web Design and Development Portfolio - David Torres Design",
		description:
			"Learn more about me, including what kind of work I do, who I am, and how to contact me.",
	};
	return (
		<>
			<Head title={headSettings.title} description={headSettings.description} />
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
		</>
	);
}
