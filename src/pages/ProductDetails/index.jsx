import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QtyBox from '../../components/QtyBox';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className='py-5'>
        <div className='container'>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link
              underline='hover'
              color='inherit'
              href='/'
              className=' transition !text-[14px] !text-[rgba(0,0,0,0.9)] hover:!text-primary'>
              Home
            </Link>
            <Link
              underline='hover'
              color='inherit'
              href='/'
              className='transition !text-[14px] !text-[rgba(0,0,0,0.9)] hover:!text-primary'>
              Fashion
            </Link>
            <Typography className='!text-[14px]'>
              Chikankari Woven Kurta
            </Typography>
          </Breadcrumbs>
        </div>
      </div>

      <section className='bg-white py-5'>
        <div className='container flex gap-8 items-center'>
          <div className='productZoomContainer w-[40%] '>
            <ProductZoom />
          </div>
          <div className='productContent w-[60%] pr-10'>
            <h1 className='text-[24px] font-[600] mb-2 '>
              Siril Poly Silk White & Beige Color Saree With Blouse Piece |
              sarees for Women | saree | sarees
            </h1>
            <div className='flex items-center gap-3'>
              <span className='text-gray-400 text-[13px]'>
                Brands:{' '}
                <span className='font-[500] text-black opacity-75'>
                  House of Chikankari
                </span>
              </span>

              <Rating
                name='size-small'
                defaultValue={2}
                size='small'
                readOnly
              />
              <span className='text-[13px] cursor-pointer'>Review (5)</span>
            </div>

            <div className='flex items-center gap-4 mt-4'>
              <span className='oldPrice line-through text-gray-500 text-[20px] font-[500]'>
                $58.00
              </span>
              <span className='price text-primary text-[20px] font-[600]'>
                $58.00
              </span>

              <span className='text-[14px]'>
                Available In Stock:{' '}
                <span className='text-green-600 font-[600]'>141 Items</span>
              </span>
            </div>

            <p className='mt-3 pr-10 mb-5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className='flex items-center gap-3'>
              <span className='text-[16px]'>Size:</span>
              <div className='flex items-center gap-1'>
                <Button
                  className={`!min-w-[40px] !h-[30px] !border !text-[rgba(0,0,0,0.7)] !border-[rgba(0,0,0,0.1)] ${
                    productActionIndex === 0 ? '!bg-primary !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(0)}>
                  S
                </Button>
                <Button
                  className={`!min-w-[40px] !h-[30px] !border !text-[rgba(0,0,0,0.7)] !border-[rgba(0,0,0,0.1)] ${
                    productActionIndex === 1 ? '!bg-primary !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(1)}>
                  M
                </Button>
                <Button
                  className={`!min-w-[40px] !h-[30px] !border !text-[rgba(0,0,0,0.7)] !border-[rgba(0,0,0,0.1)] ${
                    productActionIndex === 2 ? '!bg-primary !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(2)}>
                  L
                </Button>
                <Button
                  className={`!min-w-[40px] !h-[30px] !border !text-[rgba(0,0,0,0.7)] !border-[rgba(0,0,0,0.1)] ${
                    productActionIndex === 3 ? '!bg-primary !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(3)}>
                  XL
                </Button>
                <Button
                  className={`!min-w-[40px] !h-[30px] !border !text-[rgba(0,0,0,0.7)] !border-[rgba(0,0,0,0.1)] ${
                    productActionIndex === 4 ? '!bg-primary !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(4)}>
                  XXL
                </Button>
              </div>
            </div>

            <p className='text-[14px] !mt-5 !mb-2 text-[#000]'>
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>
            <div className='flex items-center  gap-4 py-4'>
              <div className='qtyBoxWrapper w-[70px]'>
                <QtyBox />
              </div>

              <Button className='btn-org flex gap-2'>
                <MdOutlineShoppingCart className='text-[22px]' /> Add to Cart
              </Button>
            </div>

            <div className='flex items-center gap-4 mt-4'>
              <span className='flex items-center gap-2 text-[15px] cursor-pointer font-[500]'>
                <FaRegHeart className='text-[18px]' /> Add to Wishlist
              </span>
              <span className='flex items-center gap-2 text-[15px] cursor-pointer font-[500]'>
                <IoGitCompareOutline className='text-[18px]' /> Add to Compare
              </span>
            </div>
          </div>
        </div>

        <div className='container pt-10'>
          <div className='flex items-center gap-8 mb-5'>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 ? 'text-primary' : ''
              }`}
              onClick={() => setActiveTab(0)}>
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 ? 'text-primary' : ''
              }`}
              onClick={() => setActiveTab(1)}>
              Product Details
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 ? 'text-primary' : ''
              }`}
              onClick={() => setActiveTab(2)}>
              Reviews (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className='shadow-md w-full px-8 py-5 rounded-md'>
              <p>
                The best is yet to come! Give your walls a voice with a framed
                poster. This aesthethic, optimistic poster will look great in
                your desk or in an open-space office. Painted wooden frame with
                passe-partout for more depth.
              </p>

              <h4>Lightweight Design</h4>
              <p>
                Designed with a super light geometric case, the Versa family
                watches are slim, casual and comfortable enough to wear all day
                and night. Switch up your look with classic, leather, metal and
                woven accessory bands. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.
              </p>

              <h4>Free Shipping & Return</h4>
              <p>
                We offer free shipping for products on orders above 50$ and
                offer free delivery for all orders in US.
              </p>

              <h4>Money Back Guarantee</h4>
              <p>
                We guarantee our products and you could get back all of your
                money anytime you want in 30 days.
              </p>

              <h4>Online Support</h4>
              <p>
                You will get 24 hour support with this purchase product and you
                can return it within 30 days for an exchange.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className='shadow-md w-full px-8 py-5 rounded-md'>
              <div class='relative overflow-x-auto'>
                <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class='px-6 py-3'>
                        Stand Up
                      </th>
                      <th scope='col' class='px-6 py-3'>
                        Folded (w/o wheels)
                      </th>
                      <th scope='col' class='px-6 py-3'>
                        Folded (w/ wheels)
                      </th>
                      <th scope='col' class='px-6 py-3'>
                        Door Pass Through
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                      <td class='px-6 py-4 font-[500]'>
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </td>
                      <td class='px-6 py-4 font-[500]'>
                        32.5″L x 18.5″W x 16.5″H
                      </td>
                      <td class='px-6 py-4 font-[500]'>
                        32.5″L x 24″W x 18.5″H
                      </td>
                      <td class='px-6 py-4 font-[500]'>24</td>
                    </tr>
                    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                      <td class='px-6 py-4 font-[500]'>
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </td>
                      <td class='px-6 py-4 font-[500]'>
                        32.5″L x 18.5″W x 16.5″H
                      </td>
                      <td class='px-6 py-4 font-[500]'>
                        32.5″L x 24″W x 18.5″H
                      </td>
                      <td class='px-6 py-4 font-[500]'>24</td>
                    </tr>
                    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                      <td class='px-6 py-4 font-[500]'>
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </td>
                      <td class='px-6 py-4 font-[500]'>
                        32.5″L x 18.5″W x 16.5″H
                      </td>
                      <td class='px-6 py-4 font-[500]'>
                        32.5″L x 24″W x 18.5″H
                      </td>
                      <td class='px-6 py-4 font-[500]'>24</td>
                    </tr>
                    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                      <td class='px-6 py-4 font-[500]'>
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </td>
                      <td class='px-6 py-4 font-[500]'>
                        32.5″L x 18.5″W x 16.5″H
                      </td>
                      <td class='px-6 py-4 font-[500]'>
                        32.5″L x 24″W x 18.5″H
                      </td>
                      <td class='px-6 py-4 font-[500]'>24</td>
                    </tr>
                    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                      <td class='px-6 py-4 font-[500]'>
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </td>
                      <td class='px-6 py-4 font-[500]'>
                        32.5″L x 18.5″W x 16.5″H
                      </td>
                      <td class='px-6 py-4 font-[500]'>
                        32.5″L x 24″W x 18.5″H
                      </td>
                      <td class='px-6 py-4 font-[500]'>24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className='shadow-md w-[80%] px-8 py-5 rounded-md'>
              <div className='w-full productReviewsContainer'>
                <h2 className='text-[18px]'>Customer questions & answers</h2>
                <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5'>
                  <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img
                          src='https://avatars.githubusercontent.com/u/53128146?v=4'
                          alt=''
                          className='w-full'
                        />
                      </div>
                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Ademuyiwa Otubusin</h4>
                        <h5 className='text-[13px]'>2025-10-13</h5>
                        <p className='!mt-0 !mb-0'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>

                    <Rating name='size-small' defaultValue={4} readOnly />
                  </div>
                  <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img
                          src='https://avatars.githubusercontent.com/u/53128146?v=4'
                          alt=''
                          className='w-full'
                        />
                      </div>
                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Ademuyiwa Otubusin</h4>
                        <h5 className='text-[13px]'>2025-10-13</h5>
                        <p className='!mt-0 !mb-0'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>

                    <Rating name='size-small' defaultValue={4} readOnly />
                  </div>
                  <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img
                          src='https://avatars.githubusercontent.com/u/53128146?v=4'
                          alt=''
                          className='w-full'
                        />
                      </div>
                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Ademuyiwa Otubusin</h4>
                        <h5 className='text-[13px]'>2025-10-13</h5>
                        <p className='!mt-0 !mb-0'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>

                    <Rating name='size-small' defaultValue={4} readOnly />
                  </div>
                  <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img
                          src='https://avatars.githubusercontent.com/u/53128146?v=4'
                          alt=''
                          className='w-full'
                        />
                      </div>
                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Ademuyiwa Otubusin</h4>
                        <h5 className='text-[13px]'>2025-10-13</h5>
                        <p className='!mt-0 !mb-0'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>

                    <Rating name='size-small' defaultValue={4} readOnly />
                  </div>
                  <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img
                          src='https://avatars.githubusercontent.com/u/53128146?v=4'
                          alt=''
                          className='w-full'
                        />
                      </div>
                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Ademuyiwa Otubusin</h4>
                        <h5 className='text-[13px]'>2025-10-13</h5>
                        <p className='!mt-0 !mb-0'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>

                    <Rating name='size-small' defaultValue={4} readOnly />
                  </div>
                </div>

                <br />

                <div className='reviewForm bg-[#f1f1f1] p-4 rounded-md'>
                  <h2 className='text-[18px]'>Add a review</h2>
                  <form className='w-full mt-5'>
                    <TextField
                      id='outlined-multiline-flexible'
                      label='Write a review'
                      className='w-full !mb-5'
                      multiline
                      rows={5}
                    />

                    <Rating name='size-small' defaultValue={4} />

                    <div className='flex items-center mt-5'>
                      <Button className='btn-org'>Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='container pt-10'>
          <h2 className='text-[20px] font-[600]'>Related Products</h2>
          <ProductsSlider items={6} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
