import Link from "next/link";
import Header from "@components/Header";
import Head from "@components/Head";
import Form from "@components/Form";
import { PortableText } from "@portabletext/react";
import { Email } from "lib/icons";
import client from "../client";
import urlFor from "../urlFor";

export async function getStaticProps() {
	const contact = await client.fetch(/* groq */ `*[_type == "contact"][0]{
				title,
				description,
				seotitle,
				seodescription,
				email,
				social,
				avatar
		}`);

	return { props: { contact } };
}

const components = {
	marks: {
		link: (props) => (
			<Link href={props.value.href}>
				<a>{props.children}</a>
			</Link>
		),
	},
};

export default function Contact({ contact }) {
	const headSettings = {
		title: contact.seotitle ?? "Contact David Torres",
		description: contact.seodescription,
	};
	const Avatar = () => {
		const imgUrl = urlFor(contact.avatar).height(150).url();
		return (
			<span className="avatar">
				<img src={imgUrl} alt={contact.avatar.caption} />
			</span>
		);
	};
	return (
		<main className="body" id="contact">
			<Head title={headSettings.title} description={headSettings.description} />
			<Header rank={1} text={contact.title} type="headline" />
			<div className="grid">
				<div className="form">
					<Avatar />
					<p className="contact-description">
						<PortableText value={contact.description} components={components} />
					</p>
					<Form />
				</div>
				<div className="contact">
					<a href={`mailto:${contact.email}`} className="contact-links" target="_blank" rel="noreferrer">
						<span>Email me at</span>
						<Email />
						{contact.email}
					</a>
				</div>
			</div>
		</main>
	);
}
