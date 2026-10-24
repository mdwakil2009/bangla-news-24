import Image from "next/image";
import Link from "next/link";
import React from "react";
interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;

}
const MainNews = ({ news }:{news:News[]}) => {
  const [fristNews, ...otherNews] = news;
  return (
    <div className="mt-5 flex flex-col gap-5 md:flex-row">
     <Link href={`/news/${fristNews.id}`} className="block w-full shrink-0 md:w-96"> <div className="card bg-base-100 w-full shadow-sm">
        <figure className="w-full">
          <Image width={600} height={600} src={fristNews.imageUrl} alt={fristNews.imageAlt} className="aspect-video w-full object-cover" sizes="(max-width: 768px) 100vw, 384px" />
        </figure>
        <div className="card-body">
          <p className="text-red-600 text-sm font-medium mb-1">{fristNews.category}</p>
          <h2 className="card-title font-semibold text-gray-800  cursor-pointer">{fristNews.title}</h2>
          <p>{fristNews.description}</p>
        </div>
      </div></Link>
     <div className="grid min-w-0 flex-1 gap-2 content-start">
           {otherNews.slice(0,4).map((on)=> < Link href={`/news/${on.id}`} key={on.id} className="card bg-base-100 border border-gray-400 p-4 hover:bg-gray-100 transition duration-200" >
                 <p className="text-red-600 text-sm font-medium mb-1">{fristNews.category}</p>
          <div className="font-semibold text-gray-800  cursor-pointer">{on.title}</div>
      </Link>
     )}
     </div>
    </div>
  );
};

export default MainNews;
