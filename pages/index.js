import Head from "next/head";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

const skills = [
	{ id: "photoshop", title: "Adobe Photoshop" },
	{ id: "xd", title: "Adobe XD" },
	{ id: "ai", title: "Adobe Illustrator" },
	{ id: "shopify", title: "Shopify" },
	{ id: "react", title: "ReactJS" },
	{ id: "html", title: "HTML5" },
	{ id: "css", title: "CSS3" },
	{ id: "js", title: "JavaScript" },
];
export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>David Torres - Web Designer and Developer</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Web specialist with over 10 years of experience.  Use modern technology to achieve your web goals!"
				/>
				<link rel="stylesheet" href="https://use.typekit.net/rdq5egn.css" />
			</Head>
			<Navbar />
			<main className="body" id="home">
				<div className="col">
					<section id="header">
						<Header rank={1} text="Web Designer and Developer" type="headline" />
						<p>
							I’m David Torres, a web specialist with over 10 years of experience. I have the eye
							and experience for design, along with the technical skill of development. Your
							business benefits from me on your team, I love collaborating with other professionals
							and learning how they think. From basic websites to web apps, we can work together to
							get your projects done!
						</p>
						<p>
							Browse my portfolio to see my work and style,{" "}
							<Link href="/contact">
								contact me if you want to work with me to achieve your digital goals!
							</Link>
						</p>
					</section>

					<section id="skills">
						<Header rank={2} text="Skills and Technology" type="headline" />
						<div className="skills">
							{skills.map((skill, index) => (
								<div className="skill-container" key={index}>
									<img src={`/img/${skill.id}.svg`} alt={skill.title} title={skill.title}/>
								</div>
							))}
						</div>
					</section>
				</div>
				<div className="col">
					<section id="projects">
						<Header rank={2} text="View My Projects" type="headline" />
						<Link href="/work">
							<img src="/img/photo.svg" alt="" />
						</Link>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}
