import Link from "next/link";
import Header from "@components/Header";
import projectLibrary from "lib/projects.json";
import SiteWrapper from "@components/SiteWrapper";
import client from "../../client";
import urlFor from "../../urlFor";

export async function getStaticPaths() {
	const res = await client.fetch(`*[_type == "project"]{slug}`);
	const paths = res.map((project) => `/work/${project.slug.current}`);
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const id = params.id;
	const res = await client.fetch(
		`*[_type == "project" && slug.current == $id][0]{title,description,slug,tech,gallery, linkUrl}`,
		{ id }
	);
	return { props: { projectData: res } };
}

export default function Project({ projectData }) {
	const headSettings = {
		title: `${projectData.title} - David Torres Web Project`,
		description: projectData.description,
	};

	const galleryImages = [];
	projectData.gallery.forEach((image) => {
		const imgUrl = urlFor(image).url();
		galleryImages.push(imgUrl);
	});

	return (
		<SiteWrapper head={headSettings}>
			<main className="body" id="project">
				<div className="grid">
					<Header rank={1} text={projectData.title} type="headline" />
					<section className="project-links">
						{console.log(projectData)}
						{projectData.linkUrl ? (
							<a href={projectData.linkUrl} className="btn" target="_blank" rel="noopener">
								Link
							</a>
						) : null}
						{projectData.codeUrl ? (
							<a href={projectData.codeUrl} className="btn" target="_blank" rel="noopener">
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
						{galleryImages.map((imageUrl, index) => (
							<img
								src={imageUrl}
								alt=""
								layout="responsive"
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
