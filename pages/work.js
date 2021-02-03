import Link from "next/link";
import Header from "@components/Header";
import SiteWrapper from "@components/SiteWrapper";
import projectLibrary from "lib/projects.json";
import { LinkIcon } from "lib/icons";

export async function getStaticProps() {
	return { props: { projectLibrary } };
}

export default function Work({ projectLibrary }) {
	const headSettings = {
		title: "My Web Design and Development Portfolio - David Torres Design",
		description: "Check out my work from happy clients and personal projects.",
	};

	const projects = projectLibrary.map((project, i) => (
		<div className="project-thumb" key={i}>
			<h2>{project.data.title}</h2>

			<Link href={`/work/${project.data.path}`}>
				<a title={project.data.title}>
					<img src={project.img} alt={project.data.title} />
				</a>
			</Link>

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

	return (
		<SiteWrapper head={headSettings}>
			<main className="body" id="work">
				<div className="col">
					<Header rank={1} text="My Design Work" type="headline" />
					{projects}
				</div>
			</main>
		</SiteWrapper>
	);
}
