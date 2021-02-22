import Header from "@components/Header";
import Head from "@components/Head";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";
import urlFor from "../urlFor";

export async function getStaticProps() {
	const about = await client.fetch(/* groq */ `*[_type == "about"][0]{
				title,
				seodescription,
				description,
				gallery
		}`);
	return { props: { about } };
}

export default function About({ about }) {
	const headSettings = {
		title: "About David Torres - The story so far...",
		description: about.seodescription,
	};
	return (
		<>
			<Head title={headSettings.title} description={headSettings.description} />
			<main className="body about" id="page-content">
				<div className="col">
					{console.log(about)}
					<Header rank={1} text={about.title} type="headline" />
					<BlockContent blocks={about.description} />
				</div>
				<div className="col">
					{about.gallery.map((image, index) => (
						<img
							src={urlFor(image).url()}
							alt={image.caption}
							layout="responsive"
							className="project-photo"
							key={index}
						/>
					))}
				</div>
			</main>
		</>
	);
}
