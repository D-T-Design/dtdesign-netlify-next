import Link from "next/link";

export default function Footer(props) {
	return (
		<section className="footer">
			<div className="links">
				<a
					href={props.download.downloadURL}
					title={props.download.description}
					className="download-btn"
				>
					Download Resume <img src="/img/pdf.svg" alt="Click Here to Download my Resume" />
				</a>
				<div className="social">
					<a href="https://www.linkedin.com/in/davidtorresdesign" target="_blank" rel="noreferrer">
						<img src="/img/linkedin.svg" alt="" />
					</a>
					<a href="https://github.com/D-T-Design/" target="_blank" rel="noreferrer">
						<img src="/img/github.svg" alt="" />
					</a>
					<a href="https://stackoverflow.com/users/story/11743348" target="_blank" rel="noreferrer">
						<img src="/img/stackoverflow.svg" alt="" />
					</a>
				</div>
			</div>
			<p>
				<Link href="/privacy">Privacy Policy</Link>
				<span>© David Torres {new Date().getFullYear()}</span>
			</p>
		</section>
	);
}
