import Head from "@components/Head";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

export default function SiteWrapper(props) {
	return (
		<div className="container">
			<Head
				title={props.head.title}
				description={props.head.description}
			/>
			<Navbar />
			{props.children}
			<Footer />
		</div>
	);
}
