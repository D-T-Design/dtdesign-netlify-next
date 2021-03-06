import Head from "@components/Head";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

export default function SiteWrapper(props) {
	return (
		<div className="container" id="outer-container">
			<Head title={props.head.title} description={props.head.description} />
			<Navbar download={props.download} />
			{props.children}
			<Footer download={props.download} />
		</div>
	);
}
