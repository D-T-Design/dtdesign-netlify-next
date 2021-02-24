import { useRouter } from "next/router";

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

const handleSubmit = (event) => {
	const router = useRouter();
	event.preventDefault();
	fetch("/", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: encode({
			"form-name": event.target.getAttribute("contact"),
			...name,
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
			data-netlify="true"
			data-netlify-recaptcha="true"
			onSubmit={handleSubmit}
		>
			<input type="hidden" name="form-name" value="contact" />
			<p class="hidden">
				<label>
					Don’t fill this out if you’re human: <input name="bot-field" />
				</label>
			</p>
			<p>
				<label htmlFor="yourname">Your Name:</label> <br />
				<input type="text" name="name" id="yourname" />
			</p>
			<p>
				<label htmlFor="youremail">Your Email:</label> <br />
				<input type="email" name="email" id="youremail" />
			</p>
			<p>
				<label htmlFor="yourmessage">Message:</label> <br />
				<textarea name="message" id="yourmessage"></textarea>
			</p>
			<p>
				<div data-netlify-recaptcha="true"></div>
				<button type="submit">Send</button>
			</p>
		</form>
	);
}