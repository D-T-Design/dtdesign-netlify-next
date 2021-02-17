import Link from "next/link";
import Header from "@components/Header";
import Head from "@components/Head";
import { LinkIcon } from "lib/icons";
import client from "../client";
import urlFor from "../urlFor";

export async function getStaticProps() {
	const projects = await client.fetch(/* groq */ `*[_type == "project"]{
				title,
				slug,
				previewimg,
				linkUrl
		}`);
	return { props: { projects } };
}

export default function Work(props) {
	const headSettings = {
		title: "My Web Design and Development Portfolio - David Torres Design",
		description: "Check out my work from happy clients and personal projects.",
	};

	const projects = props.projects.map((project, i) => {
		const projectPreviewUrl = urlFor(project.previewimg).url();
		return (
			<div className="project-thumb" key={i}>
				<h2>{project.title}</h2>

				<Link href={`/work/${project.slug.current}`}>
					<a title={project.title}>
						<img src={projectPreviewUrl} alt={project.title} />
					</a>
				</Link>

				<div className="project-links">
					<Link href={`/work/${project.slug.current}`}>
						<a className="cta">View More</a>
					</Link>

					<Link href={project.linkUrl}>
						<a className="subtle" target="_blank" rel="noopener">
							Live Version <LinkIcon />
						</a>
					</Link>
				</div>
			</div>
		);
	});

	return (
		<>
			<Head title={headSettings.title} description={headSettings.description} />
			<main className="body" id="work">
				<div className="col">
					<Header rank={1} text="My Design Work" type="headline" />
					{projects}
				</div>
			</main>
		</>
	);
}
