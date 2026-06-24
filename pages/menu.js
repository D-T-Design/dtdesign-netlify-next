import Link from "next/link";
import Head from "@components/Head";

export default function Menu() {
  const headSettings = {
    title: "Browse my Web Design and Development Portfolio - David Torres Design",
    description: "Learn more about me, including what kind of work I do, who I am, and how to contact me.",
  };
  return (
    <main className="body" id="menu">
      <Head title={headSettings.title} description={headSettings.description} />
      <ul className="nav-list">
        <li>
          <Link href="/" legacyBehavior>
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/work" legacyBehavior>
            <a className="nav-link">My Work</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a className="nav-link">Contact</a>
          </Link>
        </li>
      </ul>
    </main>
  );
}
