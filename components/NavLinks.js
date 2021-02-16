const socialLinks = [
	{
		url: "http://www.linkedin.com/in/davidtorresdesign",
		img: "/img/linkedin.svg",
		title: "LinkedIn - David Torres Design",
	},
	{
		url: "https://github.com/D-T-Design",
		img: "/img/github.svg",
		title: "GitHub - David Torres Design",
	},
	{
		url: "https://stackoverflow.com/users/11743348/davidtorresdesign",
		img: "/img/stackoverflow.svg",
		title: "Stack Overflow - David Torres Design",
	},
];
export default function NavLinks(props) {
	return (
		<div className="links">
			<a href={props.download.downloadURL} title={props.download.description}>
				Download Resume <img src="/img/pdf.svg" alt="Click Here to Download my Resume" />
			</a>
			<div className="social">
				{socialLinks.map((social, index) => (
					<a key={index} href={social.url} target="_blank" rel="noreferrer" title={social.title}>
						<img src={social.img} alt={social.title} />
					</a>
				))}
			</div>
		</div>
	);
}
