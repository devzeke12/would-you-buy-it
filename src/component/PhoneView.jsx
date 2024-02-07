import React from 'react';
import phoneview from '../assets/Row 1/Gig 1/download (87).png'

const PhoneView = ({ children }) => {
  return (
    <div className="relative w-full h-[600px]  bg-contain flex justify-center" style={{ backgroundImage: `url(${phoneview})`}}>
        <img src={phoneview} alt='' className='h-full absolute' />
        {children}
    </div>
  );
};

export default PhoneView;
