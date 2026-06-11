import Link from "next/link";
import Header from "@components/Header";
import Head from "@components/Head";
import { LinkIcon } from "lib/icons";
import client from "../client";
import urlFor from "../urlFor";

export async function getStaticProps() {
  const { projects, work } = await client.fetch(`{
    "projects": *[_type == "project"] | order(order asc, _createdAt desc) {
      title,
      subtitle,
      slug,
      previewimg,
      linkUrl,
      order
    },
    "work": *[_type == "work"]{
      title,
      seodescription,
      seotitle,
      slug,
      previewimg
    }
  }`);
  return { props: { projects, work } };
}

export default function Work({ projects, work }) {
  const workDoc = Array.isArray(work) ? work[0] : work;
  console.log({ projects, work });
  const headSettings = {
    title: workDoc?.seotitle ? workDoc.seotitle : "My Work — David Torres, Full-Stack Software Engineer",
    description: workDoc?.seodescription
      ? workDoc.seodescription
      : "Projects and products built by David Torres: a healthcare candidate CRM, a custom headless CMS, a Next.js career site platform with localization, and earlier freelance web projects.",
  };
  const headline = workDoc?.title ? workDoc.title : "My Design Work";

  return (
    <main className="body" id="work">
      <Head title={headSettings.title} description={headSettings.description} />

      <div className="col">
        <Header rank={1} text={headline} type="headline" />

        {(projects ?? []).map((project, i) => {
          const projectPreviewUrl = project.previewimg ? urlFor(project.previewimg).url() : null;
          return (
            <div className="project-thumb" key={i}>
              <h2>
                <Link href={`/work/${project.slug.current}`} title={project.title}>
                  {project.title}
                </Link>
              </h2>
              <h4>{project.subtitle}</h4>

              <Link href={`/work/${project.slug.current}`} title={project.title}>
                {projectPreviewUrl && <img src={projectPreviewUrl} alt={project.title} />}
              </Link>

              <div className="project-links">
                <Link href={`/work/${project.slug.current}`} className="cta">
                  See Project
                </Link>
                {project.linkUrl && (
                  <Link href={project.linkUrl} className="subtle" target="_blank" rel="noopener">
                    View Site <LinkIcon />
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
