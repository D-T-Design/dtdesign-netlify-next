import { useRouter } from "next/router";

/*
  Netlify Forms
  */
function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

const handleSubmit = (event) => {
	event.preventDefault();
	const router = useRouter();
	fetch("/", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: encode({
			"form-name": event.target.getAttribute("contact"),
			...contact,
		}),
	})
		.then(() => router.push("/"))
		.catch((error) => alert(error));
};

export default function ContactForm() {
	return (
		<form
			name="contact"
			method="POST"
			action="/"
			netlify-honeypot="bot-field"
			data-netlify="true"
			onSubmit={handleSubmit}
		>
			<input type="hidden" name="form-name" value="contact" />
			<p className="name">
				<label htmlFor="yourname">Your Name:</label> <br />
				<input type="text" name="name" id="yourname" />
			</p>

			<p className="email">
				<label htmlFor="youremail">Your Email:</label> <br />
				<input type="email" name="email" id="youremail" />
			</p>

			<p className="message">
				<label htmlFor="yourmessage">Message:</label> <br />
				<textarea name="message" id="yourmessage"></textarea>
			</p>

			<p className="send">
				<button type="submit">Send Message</button>
			</p>

			<p className="hidden">
				<label>
					Don’t fill this out if you’re human: <input name="bot-field" />
				</label>
			</p>
		</form>
	);
}
