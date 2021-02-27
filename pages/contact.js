import Header from "@components/Header";
import Head from "@components/Head";
import Form from "@components/Form";
import { Facebook, LinkedIn, Email, Phone } from "lib/icons";
import client from "../client";
import urlFor from "../urlFor";

export async function getStaticProps() {
	const contact = await client.fetch(/* groq */ `*[_type == "contact"][0]{
				title,
				seodescription,
				phone,
				email,
				social,
				avatar
		}`);
	return { props: { contact } };
}

export default function Contact({ contact }) {
	const headSettings = {
		title: "Contact David Torres for Web Design and Development",
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
						I can help you with code and design, just send me a message and let's talk about what you're looking for.
					</p>
					<Form />
				</div>
				<div className="contact">
					<a
						href={`tel:${contact.phone}`}
						className="contact-links"
						target="_blank"
						rel="noreferrer"
					>
						<span>Call me at</span>
						<Phone />
						{contact.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
					</a>
					<a
						href={`mailto:${contact.email}`}
						className="contact-links"
						target="_blank"
						rel="noreferrer"
					>
						<span>Email me at</span>
						<Email />
						{contact.email}
					</a>
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
			</div>
		</main>
	);
}
