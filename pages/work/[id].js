import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import data from "lib/projects.json";

export default function Project() {
	const router = useRouter();
	const path = router.query;
	const projectData = data.find((project) => project.data.path === path.id).data;
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
						<button>Link</button>
						<button>Code</button>
					</section>

					<section className="project-content">
						<p>{projectData.description}</p>
						<Header rank={2} text="Tech Used" type="headline" />
						<ul>
							{projectData.tech.map((text, index) => (
								<li key={index}>{text}</li>
							))}
						</ul>
					</section>

					<section className="project-photos">
						<img src="/img/img.svg" alt="" />
						<img src="/img/img.svg" alt="" />
						<img src="/img/img.svg" alt="" />
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
