export default function Footer() {
	return (
		<section className="footer">
			<div className="links">
				<button>
					Download Resume <img src="/img/pdf.svg" alt="" />
				</button>
				<div className="social">
					<a href="http://www.linkedin.com/in/davidtorresdesign">
						<img src="/img/linkedin.svg" alt="" />
					</a>
					<a href="https://github.com/D-T-Design/">
						<img src="/img/github.svg" alt="" />
					</a>
					<a href="https://stackoverflow.com/users/story/11743348">
						<img src="/img/stackoverflow.svg" alt="" />
					</a>
				</div>
			</div>
			<p>
				<a href="https://google.com">Privacy Policy</a>
				<span>© David Torres 2020</span>
			</p>
		</section>
	);
}
