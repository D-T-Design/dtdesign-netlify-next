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
export default function NavLinks() {
	return (
		<div className="links">
			<button title="Download PDF Resume for David Torres">
				Download Resume <img src="/img/pdf.svg" alt="Click Here to Download my Resume" />
			</button>
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