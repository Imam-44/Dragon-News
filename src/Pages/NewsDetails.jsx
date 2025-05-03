import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayouts/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
  const data = useLoaderData();
  const {id} = useParams();
  const [news, setNews] = useState({});
//  console.log(data, id , news);
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  },[data, id]);
  return (
     <>
      <header className='py-5'>
        <Header/>
      </header>

      <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
     <section className='col-span-9'>
      <h1 className='font-bold '>News Details</h1>
      <NewsDetailsCard news={news}/>
      </section>

      <aside className='col-span-3'>
        <RightAside/>
      </aside>
      </main>
     </>
  );
};

export default NewsDetails;