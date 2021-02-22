import Header from "@components/Header";
import Head from "@components/Head";
import { Facebook, LinkedIn, Email, Phone } from "lib/icons";
import client from "../client";

export async function getStaticProps() {
	const contact = await client.fetch(/* groq */ `*[_type == "contact"][0]{
				title,
				seodescription,
				phone,
				email,
				social
		}`);
	return { props: { contact } };
}

export default function Contact({ contact }) {
	const headSettings = {
		title: "Contact David Torres for Web Design and Development",
		description: contact.seodescription,
	};
	return (
		<main className="body" id="contact">
			<Head title={headSettings.title} description={headSettings.description} />
			<Header rank={1} text={contact.title} type="headline" />

			<div className="col">
				<a href={`tel:${contact.phone}`} className="contact-links" target="_blank" rel="noreferrer">
					<Phone />
					{contact.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
				</a>
			</div>

			<div className="col">
				<a
					href={`mailto:${contact.email}`}
					className="contact-links"
					target="_blank"
					rel="noreferrer"
				>
					<Email />
					{contact.email}
				</a>
			</div>

			<div className="col">
				<p className="center">Message on Social</p>
				<div className="social-links">
					{contact.social.map((social, index) => {
						const Icon = social.icon[0] === "Facebook" ? Facebook : LinkedIn;
						return (
							<a
								href={social.url}
								target="_blank"
								rel="noreferrer"
								key={index}
								title={social.title}
							>
								<Icon />
							</a>
						);
					})}
				</div>
			</div>
		</main>
	);
}
