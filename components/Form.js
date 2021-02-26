import React, { useState } from "react";
import { useRouter } from "next/router";
// import { withRouter } from "next/router";

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

// class ContactForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { name: "", email: "", message: "" };
// 	}

// 	handleSubmit = (e) => {
// 		console.log(this.state, this.props);
// 		fetch("/", {
// 			method: "POST",
// 			headers: { "Content-Type": "application/x-www-form-urlencoded" },
// 			body: encode({ "form-name": "contact", ...this.state }),
// 		})
// 			.then(() => this.props.router.push("/"))
// 			.catch((error) => alert(error));

// 		e.preventDefault();
// 	};

// 	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

// 	render() {
// 		const { name, email, message } = this.state;
// 		return (
// 			<form
// 				name="contact"
// 				method="POST"
// 				// action="/"
// 				netlify-honeypot="bot-field"
// 				data-netlify="true"
// 				onSubmit={this.handleSubmit}
// 			>
// 				<input type="hidden" name="form-name" value="contact" />

// 				<p className="name">
// 					<label htmlFor="yourname">Your Name:</label> <br />
// 					<input type="text" name="name" value={name} id="yourname" onChange={this.handleChange} />
// 				</p>

// 				<p className="email">
// 					<label htmlFor="youremail">Your Email:</label> <br />
// 					<input
// 						type="email"
// 						name="email"
// 						value={email}
// 						id="youremail"
// 						onChange={this.handleChange}
// 					/>
// 				</p>

// 				<p className="message">
// 					<label htmlFor="yourmessage">Message:</label> <br />
// 					<textarea
// 						name="message"
// 						value={message}
// 						id="yourmessage"
// 						onChange={this.handleChange}
// 					></textarea>
// 				</p>

// 				<p className="send">
// 					<button type="submit">Send Message</button>
// 				</p>

// 				<p className="hidden">
// 					<label>
// 						Don’t fill this out if you’re human: <input name="bot-field" />
// 					</label>
// 				</p>
// 			</form>
// 		);
// 	}
// }

// export default withRouter(ContactForm);

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
		console.log(formData);
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
				<label htmlFor="yourname">Your Name:</label> <br />
				<input
					type="text"
					name="name"
					value={formData.name}
					id="yourname"
					onChange={updateFormData}
				/>
			</p>

			<p className="email">
				<label htmlFor="youremail">Your Email:</label> <br />
				<input
					type="email"
					name="email"
					value={formData.email}
					id="youremail"
					onChange={updateFormData}
				/>
			</p>

			<p className="message">
				<label htmlFor="yourmessage">Message:</label> <br />
				<textarea
					name="message"
					value={formData.message}
					id="yourmessage"
					onChange={updateFormData}
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
