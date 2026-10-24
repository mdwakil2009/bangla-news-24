import NotFound from "@/app/not-found";
import Image from "next/image";
import { notFound } from "next/navigation";

const Page = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  const data = await res.json();

  const news = data.data;
  if(!news){
    notFound
  }

  return (
    <div className="py-10">

      <h1 className="text-2xl font-bold mb-6 sm:text-3xl md:text-4xl">
        {news.title}
      </h1>

     
      <Image
        src={news.imageUrl}
        width={1000}
        height={600}
        alt={news.title}
        className="h-auto w-full rounded-2xl"
        sizes="(max-width: 1280px) 100vw, 1280px"
      />

      <p className="text-xl font-semibold mt-6">
        {news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text}
      </p>

    
      <p className="text-lg leading-8 mt-6 whitespace-pre-line">
        {news.text}
      </p>
    </div>
  );
};

export default Page;