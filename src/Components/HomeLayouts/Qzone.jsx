import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import playImage from '../../assets/playground.png';

const Qzone = () => {
  return (
     <div className='bg-base-200 p-3'>
       <h1 className='font-bold mb-5'> Qzone</h1>

       <div className='space-y-5'>
        <img src={swimmingImage} alt="" />
        <img src={playImage} alt="" />
        <img src={classImage} alt="" />
       </div>
     </div>
  );
};

export default Qzone;