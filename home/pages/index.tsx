import Link from "next/link";
import dynamic from "next/dynamic";

const Header = dynamic(import("../components/Header"));

export default function Home() {
  return (
    <div className="mx-40 my-10">
      <Header />
      <div className="flex place-content-center my-6">
        <h1 className="text-6xl">This is brand homepage</h1>
      </div>
      <div className="text-center">
        <div>
          <a href="/blog">Blog</a>
        </div>
        <div>
          <Link href="/about">About us</Link>
        </div>
      </div>
    </div>
  );
}
