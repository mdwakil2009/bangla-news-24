import Link from 'next/link';
import React from 'react';
interface  IMostRead{
     id:string
     title:string
}

const MostRead = async() => {
     const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read")
     const data = await res.json()
     const news:IMostRead[]  = data.data
    
     return (
          <div className='card bg-base-200 p-5 boder border-gray-500 mt-5'>
               <h2 className='font-bold text-2xl'>সর্বাধিক পঠিত</h2>

               <div className='grid gap-5'>
                   {news.map((n,i)=> <Link  href={`/news/${n.id}`} className=' flex min-w-0 gap-4 items-start font-bold' key={n.id}>
                    <p className='shrink-0 text-red-600 '>{i+1}</p>
                    <span className='min-w-0 break-words leading-snug'>{n.title}</span>
                   </Link>
               )}
               </div>
          </div>
     );
};

export default MostRead;