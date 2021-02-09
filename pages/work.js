import Link from "next/link";
import Header from "@components/Header";
import SiteWrapper from "@components/SiteWrapper";
import { LinkIcon } from "lib/icons";
import client from "../client";
import urlFor from "../urlFor";

export async function getStaticProps() {
	const res = await client.fetch(/* groq */ `*[_type == "project"]{
				title,
				slug,
				previewimg
		}`);
	return { props: { projects: res } };
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

					<a className="subtle">
						Live Version <LinkIcon />
					</a>
				</div>
			</div>
		);
	});

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
