
import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link
      href={`/news/${news.id}`}
      className="mt-4 block w-full min-w-0"
    >
      <div className="card w-full overflow-hidden bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-md">
        <figure className="w-full">
          <Image
            width={600}
            height={600}
            src={news.imageUrl}
            alt=""
            className="h-48 w-full object-cover sm:h-56 md:h-60 lg:h-64"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </figure>

        <div className="card-body gap-2 p-3 sm:p-4 md:p-5">
          <p className="mb-1 text-sm font-medium text-red-600">
            {news.category}
          </p>

          <h2 className="card-title cursor-pointer text-base font-semibold leading-snug text-gray-800 sm:text-lg">
            {news.title}
          </h2>

          <p className="line-clamp-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            {news.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
