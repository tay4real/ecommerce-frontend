import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { FaShippingFast } from 'react-icons/fa';
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../components/ProductsSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import BlogItem from '../../components/BlogItem';
import Footer from '../../components/Footer';
import HomeBannerV2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/BannerBoxV2';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />
      <section className='py-6'>
        <div className='container flex  gap-5'>
          <div className='part1 w-[70%]'>
            <HomeBannerV2 />
          </div>
          <div className='part2 w-[30%] flex items-center gap-5 justtify-center flex-col'>
            <BannerBoxV2
              info='left'
              desc='Samsung Gear VR Camera'
              price='$129.00'
              image={
                'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'
              }
            />
            <BannerBoxV2
              info='right'
              desc='Marcel Dining Room Chair'
              price='$129.00'
              image={
                'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg'
              }
            />
          </div>
        </div>
      </section>
      <HomeCatSlider />
      <section className='bg-white py-8'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='leftSec'>
              <h2 className='text-[20px] font-[600]'>Popular Products</h2>
              <p className='text-[14px] font-[400]'>
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div className='rightSec w-[60%]'>
              <Tabs
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons
                allowScrollButtonsMobile
                aria-label='scrollable force tabs example'>
                <Tab label='Fashion' />
                <Tab label='Electronics' />
                <Tab label='Bags' />
                <Tab label='Footwear' />
                <Tab label='Smart Tablet' />
                <Tab label='Groceries' />
                <Tab label='Beauty' />
                <Tab label='Wellness' />
                <Tab label='Jewellery' />
              </Tabs>
            </div>
          </div>
          <ProductsSlider items={6} />
        </div>
      </section>
      <section className='py-4 pt-2 bg-white'>
        <div className='container'>
          <div className='freeShipping  p-4 w-[80%] m-auto border-2  border-[#ff5252] flex items-center justify-between rounded-md mb-7'>
            <div className='flex items-center gap-4'>
              <FaShippingFast className='text-[50px]' />{' '}
              <span className='text-[25px] font-[600] uppercase'>
                Free Shipping
              </span>
            </div>
            <div className=''>
              <p className='mb-0 font-[500]'>
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>

            <p className='font-bold text-[25px]'>- Only $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>
      <section className='p-5 pt-0  bg-white'>
        <div className='container'>
          <h2 className='text-[20px] font-[600]'>Popular Products</h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className='p-5 pt-0  bg-white'>
        <div className='container'>
          <h2 className='text-[20px] font-[600]'>Featured Products</h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className='p-5 pb-8 pt-0  bg-white blogSection'>
        <div className='container'>
          <h2 className='text-[20px] font-[600] mb-4'>From The Blog</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            className='blogSlider'>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
