import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import data from "lib/projects.json";

export async function getStaticPaths() {
	const paths = data.map((project) => `/work/${project.data.path}`);
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const projectData = data.find((project) => project.data.path === params.id).data;
	return { props: { projectData } };
}

export default function Project({ projectData }) {
	return (
		<div className="container">
			<Head>
				<title>{projectData.title} - David Torres Web Project</title>
				<meta name="description" content={projectData.description} />
				<link rel="icon" href="/dtdesign-icon.jpg" />
				<link rel="stylesheet" href="https://use.typekit.net/rdq5egn.css" />
			</Head>
			<Navbar />

			<main className="body" id="project">
				<div className="grid">
					<Header rank={1} text={projectData.title} type="headline" />
					<section className="project-links">
						{projectData.linkURL ? (
							<a href={projectData.linkURL} className="btn">
								Link
							</a>
						) : null}
						{projectData.codeURL ? (
							<a href={projectData.codeURL} className="btn">
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
							<Image src="/img/img.svg" alt="" layout="responsive" width={954} height={592} className="project-photo"/>
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

			<Footer />
		</div>
	);
}
