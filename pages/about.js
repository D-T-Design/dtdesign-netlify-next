import Link from "next/link";
import Header from "@components/Header";
import Head from "@components/Head";
import { PortableText } from "@portabletext/react";
import client from "../client";
import urlFor from "../urlFor";

export async function getStaticProps() {
  const about = await client.fetch(/* groq */ `*[_type == "about"][0]{
				title,
				seodescription,
				seotitle,
				description,
				gallery
		}`);
  return { props: { about } };
}
const components = {
  marks: {
    link: (props) => (
      <Link href={props.value.href}>
        <a>{props.children}</a>
      </Link>
    ),
  },
};

export default function About({ about }) {
  return (
    <main className="body about" id="page-content">
      <Head title={about.seotitle} description={about.seodescription} />

      <div className="col">
        <Header rank={1} text={about.title} type="headline" />

        <PortableText value={about.description} components={components} />
      </div>

      <div className="col">
        {about.gallery.map((image, index) => (
          <img src={urlFor(image).url()} alt={image.caption} key={index} />
        ))}
      </div>
    </main>
  );
}
