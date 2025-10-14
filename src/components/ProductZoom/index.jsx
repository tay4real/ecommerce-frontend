import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const zoomSliderBig = useRef();
  const zoomSliderSmall = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderBig.current.swiper.slideTo(index);
    zoomSliderSmall.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className='flex gap-3'>
        <div className='slider w-[15%]'>
          <Swiper
            ref={zoomSliderSmall}
            direction={'vertical'}
            slidesPerView={5}
            spaceBetween={5}
            navigation={true}
            modules={[Navigation]}
            className='zoomProductSliderThumbs !h-[485px] !overflow-hidden'>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 0 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(0)}>
                <img
                  src='https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp'
                  alt='product'
                  className='w-full transition-all group-hover:scale-x-105'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 1 ? 'opacity-90' : 'opacity-30'
                }`}
                onClick={() => goto(1)}>
                <img
                  src='https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg'
                  alt='product'
                  className='w-full transition-all group-hover:scale-x-105'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 2 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(2)}>
                <img
                  src='https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg'
                  alt='product'
                  className='w-full transition-all group-hover:scale-x-105'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 3 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(3)}>
                <img
                  src='https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp'
                  alt='product'
                  className='w-full transition-all group-hover:scale-x-105'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 4 ? 'opacity-90' : 'opacity-30'
                }`}
                onClick={() => goto(4)}>
                <img
                  src='https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg'
                  alt='product'
                  className='w-full transition-all group-hover:scale-x-105'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        <div className='zoomContainer w-[85%] h-[500px] overflow-hidden '>
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}>
            <SwiperSlide>
              <div className='item rounded-md overflow-hidden cursor-pointer group'>
                <InnerImageZoom
                  zoomType='hover'
                  zoomScale={1}
                  src='https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='item rounded-md overflow-hidden cursor-pointer group'>
                <InnerImageZoom
                  zoomType='hover'
                  zoomScale={1}
                  src='https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='item rounded-md overflow-hidden cursor-pointer group'>
                <InnerImageZoom
                  zoomType='hover'
                  zoomScale={1}
                  src='https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='item rounded-md overflow-hidden cursor-pointer group'>
                <InnerImageZoom
                  zoomType='hover'
                  zoomScale={1}
                  src='https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='item rounded-md overflow-hidden cursor-pointer group'>
                <InnerImageZoom
                  zoomType='hover'
                  zoomScale={1}
                  src='https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg'
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
