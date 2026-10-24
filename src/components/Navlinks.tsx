import Link from "next/link";
import React from "react";
interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
};

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs:Navs[] = data.data;
  const filterNavs = navs.filter((n) => n.scrapable);
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-5">
      <Link href={"/"} className="py-1">হোম</Link>
      {filterNavs.map((n, i) => (
        <Link key={i} href={`/category/${n.slug}`} className="py-1">
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
