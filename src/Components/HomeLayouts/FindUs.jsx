import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <>
      <h1 className='font-bold '> Find Us On</h1>

      <div>
        <div className="join join-vertical  w-full">
          <button className="btn bg-base-100 justify-start join-item"> <FaFacebook size={18} /> Facebook</button>
          <button className="btn bg-base-100 justify-start join-item"> <FaTwitter size={18}/> Twitter</button>
          <button className="btn bg-base-100 justify-start join-item"> <FaInstagram size={18}/> Instagram</button>
        </div>
      </div>
    </>
  );
};

export default FindUs;