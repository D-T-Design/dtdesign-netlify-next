import Link from "next/link";
import Header from "@components/Header";
import Head from "@components/Head";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";
import urlFor from "../urlFor";

export async function getStaticProps() {
	const content = await client.fetch(/* groq */ `*[_type == "index"][0]{
				title,
				subtitle,
				description,
				tech,
				seodescription,
				seotitle,
				seophoto,
		}`);
	return { props: { content } };
}
export default function Home({ content }) {
	const serializers = {
		marks: {
			link: (props) => (
				<Link href={props.mark.href}>
					<a>{props.children}</a>
				</Link>
			),
		},
	};

	return (
		<main className="body" id="home">
			<Head
				title={content.seotitle}
				description={content.seodescription}
				seophoto={urlFor(content.seophoto).url()}
			/>

			<div className="col">
				<section id="header">
					{console.log(content)}
					<Header rank={1} text={content.title} type="headline" />

					<BlockContent blocks={content.description} serializers={serializers} />
				</section>

				<section id="skills">
					<Header rank={2} text={content.subtitle} type="headline" />

					<div className="skills">
						{content.tech.map((skill, index) => (
							<div className="skill-container" key={index}>
								<img src={`/img/${skill.value}.svg`} alt={skill.title} title={skill.title} />
							</div>
						))}
					</div>
				</section>
			</div>

			<div className="col">
				<section id="projects">
					<Header rank={2} text="View My Projects" type="headline" />

					<Link href="/work">
						<a title="See my design and dev work...">
							<img src="/img/photo.svg" alt="" />
						</a>
					</Link>
				</section>
			</div>
		</main>
	);
}
