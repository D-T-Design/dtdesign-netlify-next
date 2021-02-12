import React from "react";
import Link from "next/link";
import { NavLink } from "@components/Link";
import NavLinks from "@components/NavLinks";

import { reveal as BurgerMenu } from "react-burger-menu";

class NavMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}
	handleStateChange(state) {
		this.setState({ menuOpen: state.isOpen });
	}
	closeMenu() {
		this.setState({ menuOpen: false });
	}
	render() {
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
				<BurgerMenu
					width={280}
					isOpen={this.state.menuOpen}
					onStateChange={(state) => this.handleStateChange(state)}
					outerContainerId={"__next"}
					pageWrapId={"outer-container"}
					right
				>
					<ul className="nav-list">
						{routes.map((route, i) => (
							<li key={i}>
								<NavLink href={route.path}>
									<a className="nav-link" onClick={() => this.closeMenu()}>
										{route.text}
									</a>
								</NavLink>
							</li>
						))}
					</ul>
				</BurgerMenu>

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
}

export default NavMenu;
