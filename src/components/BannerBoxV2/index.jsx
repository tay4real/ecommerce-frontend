import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const BannerBoxV2 = (props) => {
  return (
    <div className='bannerBoxV2 w-full overflow-hidden rounded-md group relative'>
      <img
        src={props.image}
        alt=''
        className='w-full transition-all duration-150 group-hover:scale-105'
      />

      <div
        className={`info absolute p-5 top-0 ${
          props.info === 'left' ? 'left-0' : 'right-0 pl-14'
        } w-[70%] h-[100%] z-50 flex justify-center items-center flex-col gap-2`}>
        <h2 className='text-[18px] font-[600]'>{props.desc}</h2>

        <span className='text-[20px] text-primary font-[600] w-full'>
          {props.price}
        </span>

        <div className='w-full'>
          <Link
            to={'/'}
            className='link uppercase text-[16px] font-[600] underline'>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
