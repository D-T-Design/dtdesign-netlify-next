import Header from "@components/Header";
import Head from "@components/Head";
import { PortableText } from "@portabletext/react";
import client from "../client";

export async function getStaticProps() {
  const privacy = await client.fetch(/* groq */ `*[_type == "privacy"][0]{
				title,
				seodescription,
				seotitle,
				description,
		}`);
  return { props: { privacy } };
}

export default function Privacy({ privacy }) {
  return (
    <main className="body privacy" id="page-content">
      <Head title={privacy.seotitle} description={privacy.seodescription} />

      <div className="col">
        <Header rank={1} text={privacy.title} type="headline" />

        <PortableText value={privacy.description} />
      </div>
    </main>
  );
}
