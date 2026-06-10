import Link from "next/link";
import Header from "@components/Header";
import Head from "@components/Head";
import { LinkIcon } from "lib/icons";
import client from "../client";
import urlFor from "../urlFor";

export async function getStaticProps() {
  const projects = await client.fetch(/* groq */ `*[_type == "project"]{
				title,
				subtitle,
				slug,
				previewimg,
				linkUrl
		}`);
  return { props: { projects } };
}

export default function Work({ projects }) {
  const headSettings = {
    title: "My Work — David Torres, Full-Stack Software Engineer",
    description:
      "Projects and products built by David Torres: a healthcare candidate CRM, a custom headless CMS, a Next.js career site platform with localization, and earlier freelance web projects.",
  };

  return (
    <main className="body" id="work">
      <Head title={headSettings.title} description={headSettings.description} />

      <div className="col">
        <Header rank={1} text="My Design Work" type="headline" />

        {projects.map((project, i) => {
          const projectPreviewUrl = urlFor(project.previewimg).url();
          return (
            <div className="project-thumb" key={i}>
              <h2>
                <Link href={`/work/${project.slug.current}`} legacyBehavior>
                  <a title={project.title}>{project.title}</a>
                </Link>
              </h2>
              <h4>{project.subtitle}</h4>

              <Link href={`/work/${project.slug.current}`} legacyBehavior>
                <a title={project.title}>
                  <img src={projectPreviewUrl} alt={project.title} />
                </a>
              </Link>

              <div className="project-links">
                <Link href={`/work/${project.slug.current}`} legacyBehavior>
                  <a className="cta">See Project</a>
                </Link>
                {project.linkUrl && (
                  <Link href={project.linkUrl} legacyBehavior>
                    <a className="subtle" target="_blank" rel="noopener">
                      View Site <LinkIcon />
                    </a>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
