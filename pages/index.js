import Link from "next/link";
import Header from "@components/Header";
import Head from "@components/Head";
import { PortableText } from "@portabletext/react";
import client from "../client";
import urlFor from "../urlFor";
import { ArrowR } from "lib/icons";

export async function getStaticProps() {
  const content = await client.fetch(/* groq */ `*[_type == "index"][0]{
				avatar,
				title,
				subtitle,
				description,
				tech,
				seodescription,
				seotitle,
				seophoto,
				previewimg
		}`);
  return { props: { content } };
}
export default function Home({ content }) {
  const components = {
    marks: {
      link: (props) => (
        <Link href={props.value.href}>
          <a>{props.children}</a>
        </Link>
      ),
    },
  };
  const Avatar = () => {
    const imgUrl = urlFor(content.avatar).height(300).url();
    return (
      <span className="avatar">
        <img src={imgUrl} alt={content.avatar.caption} />
      </span>
    );
  };
  const PreviewImg = () => {
    const imgUrl = urlFor(content.previewimg).url();
    return (
      <span className="preview">
        <img src={imgUrl} alt={content.previewimg.caption} />
        <span className="arrow">
          See my work <ArrowR />
        </span>
      </span>
    );
  };

  return (
    <main className="body" id="home">
      <Head
        title={content.seotitle}
        description={content.seodescription}
        seophoto={urlFor(content.seophoto).url()}
      />

      <div className="col">
        <section id="header">
          <Avatar />
          <Header rank={1} text={content.title} type="headline" />
          <PortableText value={content.description} components={components} />
        </section>

        <section id="skills">
          <Header rank={2} text={content.subtitle} type="headline" />

          <div className="skills">
            {content.tech.map((skill, index) => (
              <div className="skill-container" key={index}>
                <img src={`/img/${skill.value}.svg`} alt={skill.title} title={skill.title} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="col">
        <section id="projects">
          <Header rank={2} text="View My Projects" type="headline" />

          <Link href="/work">
            <a title={content.previewimg.caption}>
              <PreviewImg />
            </a>
          </Link>
        </section>
      </div>
    </main>
  );
}
