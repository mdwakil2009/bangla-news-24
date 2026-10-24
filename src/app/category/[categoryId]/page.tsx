import NewsCard from "@/components/NewsCard";
import { notFound } from "next/navigation";
import React from "react";
interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;

}


const CategoryNews = async ({ params }:{params: Promise<{ categoryId: string }>}) => {
  const {categoryId} = await params
  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
  const data = await res.json()
  const categoryNews:News[] = data.data
  if(!categoryNews){
    notFound()
  }

  return <div className="pb-10">
       <h2 className="mb-5 text-2xl font-bold  border-b-3 border-red-600">{data.title}</h2>

       <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categoryNews.map((news)=> <NewsCard key={news.id} news={news}></NewsCard>
        )}
       </div>
    </div>;
};

export default CategoryNews;
