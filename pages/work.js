import Head from "next/head";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import data from "lib/projects.json";
import { LinkIcon } from "lib/icons";

const projects = data.map((project, i) => (
	<div className="project-thumb" key={i}>
		<h2>{project.data.title}</h2>
		<img src={project.img} alt="" />
		<div className="project-links">
			<Link href={`/work/${project.data.path}`}>
				<a className="cta">View More</a>
			</Link>
			<a className="subtle">
				Live Version <LinkIcon />
			</a>
		</div>
	</div>
));

export default function Work() {
	return (
		<div className="container">
			<Head>
				<title>My Web Design and Development Portfolio - David Torres Design</title>
				<meta
					name="description"
					content="Check out my work from happy clients and personal projects."
				/>
				<link rel="icon" href="/dtdesign-icon.jpg" />
				<link rel="stylesheet" href="https://use.typekit.net/rdq5egn.css" />
			</Head>

			<Navbar />

			<main className="body" id="work">
				<div className="col">
					<Header rank={1} text="My Design Work" type="headline" />
					{projects}
				</div>
			</main>

			<Footer />
		</div>
	);
}
