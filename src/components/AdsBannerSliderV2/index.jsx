import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import BannerBoxV2 from '../BannerBoxV2';

const AdsBannerSliderV2 = (props) => {
  return (
    <div className='py-5 w-full'>
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className='smlBtn'>
        <SwiperSlide>
          <BannerBoxV2
            info='right'
            desc='S22 Samsung Smartphone'
            price='$250.00'
            image={
              'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info='right'
            desc='Armchair Mad By shopstic'
            price='$190.00'
            image={
              'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info='right'
            desc='Noise Wireless Headphones'
            price='$129.00'
            image={
              'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSliderV2;
