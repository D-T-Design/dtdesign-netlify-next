import Header from "@components/Header";
import SiteWrapper from "@components/SiteWrapper";

export default function About() {
	const headSettings = {
		title: "About David Torres - The story so far...",
		description:
			"Who am I? What have I done?  Why do I keep asking questions? All this and more...",
	};
	return (
		<SiteWrapper head={headSettings}>
			<main className="body about" id="page-content">
				<div className="col">
					<Header rank={1} text={"About David Torres"} type="headline" />
					<p>
						I'm a designer and developer from Las Vegas, NV. I grew up loving art and computers. I
						even learned Photoshop so I could create video game forum graphics!{" "}
						<strong>
							Once I discovered I could create (almost) any design I wanted online with HTML and
							CSS, I was hooked...
						</strong>
					</p>
					<p>
						To get started, I was hired as a graphic designer right out of high school. For years I
						worked as the graphic designer for a small local sign shop. This taught me how to work
						with clients to help them achieve their goals with signs, decals, vehicle wraps, and
						more!
					</p>
					<p>
						After working in the print industry,{" "}
						<strong>I started my own freelance design business</strong> and got back into coding as
						a service I wanted to offer. I was then hired as a web designer for a local web agency
						and have worked there since.
					</p>
					<p>
						<strong>
							Now I have the experience to take a business from the ground up with prints, websites,
							ecommerce, email campaigns, and so much more!
						</strong>
					</p>
				</div>
				<div className="col">
					<img src="/img/img.svg" alt="" />
					<img src="/img/img.svg" alt="" />
					<img src="/img/img.svg" alt="" />
					<img src="/img/img.svg" alt="" />
				</div>
			</main>
		</SiteWrapper>
	);
}
