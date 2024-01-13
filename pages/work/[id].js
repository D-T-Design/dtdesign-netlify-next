import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Header from "@components/Header";
import Head from "@components/Head";
import { LinkIcon, ArrowL } from "lib/icons";
import client from "../../client";
import urlFor from "../../urlFor";

export async function getStaticPaths() {
  const res = await client.fetch(/* groq */ `*[_type == "project"]{slug}`);
  const paths = res.map((project) => `/work/${project.slug.current}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const projectData = await client.fetch(
    /* groq */ `*[_type == "project" && slug.current == $id][0]{
				title,
				subtitle,
				description,
				seodescription,
				slug,
				tech,
				gallery,
				linkUrl,
				codeUrl
		}`,
    { id }
  );
  return { props: { projectData } };
}

export default function Project({ projectData }) {
  const headSettings = {
    title: `${projectData.title} - David Torres Web Project`,
    description: projectData.seodescription,
  };

  const components = {
    marks: {
      link: (props) => (
        <a target="_blank" rel="noopener" href={props.value.href}>
          {props.children}
        </a>
      ),
    },
  };

  return (
    <>
      <Head title={headSettings.title} description={headSettings.description} />
      <main className="body" id="project">
        <div className="grid">
          <Header rank={1} text={projectData.title} type="headline" />
          <Header rank={4} text={projectData.subtitle} type="subtitle" />

          <section className="project-links">
            {projectData.linkUrl ? (
              <a href={projectData.linkUrl} className="btn" target="_blank" rel="noopener">
                Link <LinkIcon />
              </a>
            ) : null}
            {projectData.codeUrl ? (
              <a href={projectData.codeUrl} className="btn" target="_blank" rel="noopener">
                Code
              </a>
            ) : null}
          </section>

          <section className="project-content">
            <PortableText value={projectData.description} components={components} />

            <Header rank={2} text="Tech Used" type="headline" />

            <ul>
              {projectData.tech.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </section>

          <section className="project-photos">
            {projectData.gallery.map((image, index) => (
              <img
                src={urlFor(image).url()}
                alt={image.caption}
                layout="responsive"
                className="project-photo"
                key={index}
              />
            ))}
          </section>

          <section className="project-back">
            <Link href="/work">
              <a className="project-back">
                <span>
                  <ArrowL />
                </span>
                Back To My Work
              </a>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
