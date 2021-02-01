import Link from "next/link";
import { NavLink } from "@components/Link";
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
					<a>
						<img src="/img/logo.svg" alt="David Torres Design" />
					</a>
				</Link>
			</div>
			<div className="menu-small">
				<Link href="/menu">
					<a>
						<img src="/img/menu.svg" alt="Menu" />
					</a>
				</Link>
			</div>
			<div className="menu-large">
				<ul className="nav-list">
					{routes.map((route, i) => (
						<li key={i}>
							<NavLink href={route.path}>
								<a className="nav-link">{route.text}</a>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<NavLinks />
		</section>
	);
}
