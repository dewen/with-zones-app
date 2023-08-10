import Link from "next/link";
import dynamic from "next/dynamic";
import Content from "../components/Content";

const Header = dynamic(import("../components/Header"));

export default function Home() {
  return (
    <Content>
      <Header />
      <div className="flex place-content-center my-6">
        <h1 className="text-6xl">This is brand homepage</h1>
      </div>
      <div className="text-center">
        <li>
          <Link href="/brand-a" className="text-2xl underline">Brand A Site</Link>
          <p className="italic"></p>
        </li>
        <li>
          <Link href="/brand-b" className="text-2xl underline">Brand B Site</Link>
          <p className="italic"></p>
        </li>
        <li>
          <a href="/blog" className="text-2xl underline">Brand Blog</a>
          <p className="italic">A blog build from separate repo</p>
          <pre>
  source: '/blog',
  destination: $BLOG_URL/blog,
          </pre>
        </li>
      </div>
    </Content>
  );
}
