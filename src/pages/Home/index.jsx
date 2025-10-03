import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { FaShippingFast } from 'react-icons/fa';
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />
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

      <section className='py-16 bg-white'>
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
      <br />
      <br />
      <br />

      <br />
      <br />
    </>
  );
};

export default Home;
