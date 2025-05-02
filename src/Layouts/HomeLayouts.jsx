import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/latestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayouts/LeftAside';
import RightAside from '../Components/HomeLayouts/RightAside';

const HomeLayouts = () => {
  return (
     <>
      <header className='w-11/12 mx-auto'>
      <Header/>
       <section className='my-3'>
       <LatestNews/>
       </section>
       <nav className='my-5'>
        <Navbar/>
       </nav>
      </header>

      {/* main  */}
       <main className='w-11/12 mx-auto my-5  grid grid-cols-12 gap-5'>
        <aside className='col-span-3'>
          <LeftAside/>
        </aside>
         <section className="main col-span-6">
          <Outlet/>
         </section>
        <aside className='col-span-3'>
          <RightAside/>
        </aside>
       </main>
     </>
  );
};

export default HomeLayouts;