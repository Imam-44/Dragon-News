import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/latestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayouts/LeftAside';
import RightAside from '../Components/HomeLayouts/RightAside';
import Loading from '../Pages/Loading';

const HomeLayouts = () => {
  const {state} = useNavigation()
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
        <aside className='col-span-3 sticky top-2 h-fit'>
          <LeftAside/>
        </aside>
         <section className="main col-span-6">
         {state == 'loading' ? <Loading/> : <Outlet/>} 
         </section>
        <aside className='col-span-3 sticky top-2 h-fit'>
          <RightAside/>
        </aside>
       </main>
     </>
  );
};

export default HomeLayouts;