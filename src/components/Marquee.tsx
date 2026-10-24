import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";
interface HeadLine {
  id: string;
  title: string;
}
const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headline: HeadLine[] = data.data;
  return (
    <div className="bg-red-600 text-white px-3 sm:px-5 md:px-6">
      <div className="flex h-10 max-w-7xl mx-auto items-center">
        <div className="shrink-0 bg-red-700 p-2 font-bold">সর্বশেষ</div>
        <div className="min-w-0 flex-1 overflow-hidden h-full">
        <MarqueeText  className="flex items-center h-full" direction="right" duration={10}>
          {headline.map((h) => (
            <Link href={`/news/${h.id}`} key={h.id}>
              <span>{h.title}</span>
              <span className="mx-5">󠁯•󠁏</span>
            </Link>
          ))}
        </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
