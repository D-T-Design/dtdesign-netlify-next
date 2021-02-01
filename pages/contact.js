import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { Facebook, LinkedIn, Email, Phone } from "lib/icons";

const contactInfo = {
	heading: "Contact David Torres",
	phone: "7024730606",
	email: "info@davidtorres.design",
	social: [
		{
			title: "Facebook - David Torres Design",
			url: "http://www.facebook.com/davidtorresdesign",
			component: Facebook,
		},
		{
			title: "LinkedIn - David Torres Design",
			url: "http://www.linkedin.com/in/davidtorresdesign",
			component: LinkedIn,
		},
	],
};
export default function Contact() {
	return (
		<div className="container">
			<Head>
				<title>Contact David Torres for Web Design and Development</title>
				<meta
					name="description"
					content="Contact me for help building, maintaining, fixing, or updating your website."
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/rdq5egn.css" />
			</Head>

			<Navbar />

			<main className="body" id="contact">
				<Header rank={1} text={contactInfo.heading} type="headline" />
				<div className="col">
					<a
						href={`tel:${contactInfo.phone}`}
						className="contact-links"
						target="_blank"
						rel="noreferrer"
					>
						<Phone />
						{contactInfo.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
					</a>
				</div>
				<div className="col">
					<a
						href={`mailto:${contactInfo.email}`}
						className="contact-links"
						target="_blank"
						rel="noreferrer"
					>
						<Email />
						{contactInfo.email}
					</a>
				</div>
				<div className="col">
					<p className="center">Message on Social</p>
					<div className="social-links">
						{contactInfo.social.map((social, index) => (
							<a href={social.url} target="_blank" rel="noreferrer" key={index}>
								<social.component />
							</a>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
