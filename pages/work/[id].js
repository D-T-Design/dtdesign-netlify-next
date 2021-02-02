import Link from "next/link";
import Image from "next/image";
import Header from "@components/Header";
import projectLibrary from "lib/projects.json";
import SiteWrapper from "@components/SiteWrapper";

export async function getStaticPaths() {
	const paths = projectLibrary.map((project) => `/work/${project.data.path}`);
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const projectData = projectLibrary.find((project) => project.data.path === params.id).data;
	return { props: { projectData } };
}

export default function Project({ projectData }) {

	const headSettings = {
		title: `${projectData.title} - David Torres Web Project`,
		description: projectData.description,
  };
  
	return (
		<SiteWrapper head={headSettings}>
			<main className="body" id="project">
				<div className="grid">
					<Header rank={1} text={projectData.title} type="headline" />
					<section className="project-links">
						{projectData.linkURL ? (
							<a href={projectData.linkURL} className="btn" target="_blank" rel="noopener">
								Link
							</a>
						) : null}
						{projectData.codeURL ? (
							<a href={projectData.codeURL} className="btn" target="_blank" rel="noopener">
								Code
							</a>
						) : null}
					</section>

					<section className="project-content">
						{projectData.description ? <p>{projectData.description}</p> : null}
						<Header rank={2} text="Tech Used" type="headline" />
						<ul>
							{projectData.tech.map((text, index) => (
								<li key={index}>{text}</li>
							))}
						</ul>
					</section>

					<section className="project-photos">
						{projectData.images.map((image, index) => (
							<Image
								src={`/${image}`}
								alt=""
								layout="responsive"
								width={954}
								height={592}
								quality={100}
								className="project-photo"
								key={index}
							/>
						))}
					</section>

					<section className="project-back">
						<Link href="/work">
							<a className="project-back">
								<span>
									<img src="/img/arrow-l.svg" alt="" />
								</span>
								Back To My Work
							</a>
						</Link>
					</section>
				</div>
			</main>
		</SiteWrapper>
	);
}
