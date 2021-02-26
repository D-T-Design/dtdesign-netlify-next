import React, { useState } from "react";
import { useRouter } from "next/router";

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

export default function SendMessageForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const updateFormData = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const router = useRouter();

	const handleSubmit = (e) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formData }),
		})
			.then(() => router.push("/"))
			.catch((error) => alert(error));
		e.preventDefault();
	};

	return (
		<form
			name="contact"
			method="POST"
			// action="/"
			netlify-honeypot="bot-field"
			data-netlify="true"
			onSubmit={handleSubmit}
		>
			<input type="hidden" name="form-name" value="contact" />

			<p className="name">
				<label htmlFor="name">Your Name:</label> <br />
				<input
					type="text"
					name="name"
					value={formData.name}
					id="name"
					onChange={updateFormData}
					required
				/>
			</p>

			<p className="email">
				<label htmlFor="email">Your Email:</label> <br />
				<input
					type="email"
					name="email"
					value={formData.email}
					id="email"
					onChange={updateFormData}
					required
				/>
			</p>

			<p className="message">
				<label htmlFor="message">Message:</label> <br />
				<textarea
					name="message"
					value={formData.message}
					id="message"
					onChange={updateFormData}
					required
				></textarea>
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
