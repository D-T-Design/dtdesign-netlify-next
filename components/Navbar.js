import Link from "@components/Link";
import NavLinks from "@components/NavLinks";
export default function NavMenu() {
	const routes = [
		{
			path: "/",
			text: "Home",
		},
		{
			path: "/work",
			text: "My Work",
		},
		{
			path: "/about",
			text: "About",
		},
		{
			path: "/contact",
			text: "Contact",
		},
	];
	return (
		<section className="nav">
			<div className="logo">
				<Link href="/">
					<img src="/img/logo.svg" alt="David Torres Design" />
				</Link>
			</div>
			<div className="menu-small">
				<Link href="/menu">
					<img src="/img/menu.svg" alt="Menu" />
				</Link>
			</div>
			<div className="menu-large">
				<ul className="nav-list">
					{routes.map((route, i) => (
						<li key={i}>
							<Link href={route.path}>
								<a className="nav-link">{route.text}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
			<NavLinks />
		</section>
	);
}
