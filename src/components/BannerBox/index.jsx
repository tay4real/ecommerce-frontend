import React from 'react';
import { Link } from 'react-router-dom';

const BannerBox = (props) => {
  return (
    <div className='box bannerBox overflow-hidden rounded-lg group'>
      <Link to={props.link}>
        <img
          src={props.img}
          alt='banner'
          className='w-full transition-all group-hover:scale-110 group-hover:rotate-2'
        />
      </Link>
    </div>
  );
};

export default BannerBox;
