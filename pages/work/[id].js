import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import Header from "@components/Header";
import SiteWrapper from "@components/SiteWrapper";
import client from "../../client";
import urlFor from "../../urlFor";

export async function getStaticPaths() {
	const res = await client.fetch(/* groq */ `*[_type == "project"]{slug}`);
	const paths = res.map((project) => `/work/${project.slug.current}`);
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const id = params.id;
	const projectData = await client.fetch(
		/* groq */ `*[_type == "project" && slug.current == $id][0]{
				title,
				description,
				seodescription,
				slug,
				tech,
				gallery,
				linkUrl
		}`,
		{ id }
	);
	const download = await client.fetch(/* groq */ `*[_type == "download"]{
				description,
				"downloadURL": download.asset->url
		}`);
	return { props: { projectData, download } };
}

export default function Project({ projectData, download }) {
	const headSettings = {
		title: `${projectData.title} - David Torres Web Project`,
		description: projectData.seodescription,
	};

	const serializers = {
		marks: {
			link: (props) => (
				<a target="_blank" rel="noopener" href={props.mark.href}>
					{props.children}
				</a>
			),
		},
	};

	return (
		<SiteWrapper head={headSettings} download={download}>
			<main className="body" id="project">
				<div className="grid">
					<Header rank={1} text={projectData.title} type="headline" />

					<section className="project-links">
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
						<BlockContent blocks={projectData.description} serializers={serializers} />

						<Header rank={2} text="Tech Used" type="headline" />

						<ul>
							{projectData.tech.map((text, index) => (
								<li key={index}>{text}</li>
							))}
						</ul>
					</section>

					<section className="project-photos">
						{projectData.gallery.map((image, index) => (
							<img
								src={urlFor(image).url()}
								alt={image.caption}
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
