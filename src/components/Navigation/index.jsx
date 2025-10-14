import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { LiaAngleDownSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { GoRocket } from 'react-icons/go';
import CategoryPanel from './CategoryPanel';
import './style.css';

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = (newOpen) => {
    setIsOpenCatPanel(newOpen);
  };
  return (
    <>
      <nav>
        <div className='container flex items-center justify-end gap-8'>
          <div className='col_1 w-[20%]'>
            <Button
              className='!text-black gap-2 w-full'
              onClick={openCategoryPanel}>
              <RiMenu2Fill className='text-[18px]' />
              Shop by Categories
              <LiaAngleDownSolid className='text-[13px] ml-auto font-bold' />
            </Button>
          </div>

          <div className='col_2 w-[60%]'>
            <ul className='flex items-center gap-3 nav'>
              <li className='list-none'>
                <Link
                  to={'/'}
                  className='link transition text-[14px] font-[500]'>
                  <Button className='!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Home
                  </Button>
                </Link>
              </li>

              <li className='list-none relative'>
                <Link
                  to={'/productListing'}
                  className='link transition text-[14px] font-[500]'>
                  <Button className='!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Fashion
                  </Button>
                </Link>

                <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                    <li className='list-none w-full relative'>
                      <Link to='/' className='w-full'>
                        <Button className=' w-full !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !text-left !justify-start !rounded-none'>
                          Men
                        </Button>
                      </Link>
                      <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                        <ul>
                          <li className='list-none w-full'>
                            <Link to='/' className='w-full'>
                              <Button className=' w-full !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !text-left !justify-start !rounded-none'>
                                T-Shirt
                              </Button>
                            </Link>
                          </li>
                          <li className='list-none w-full'>
                            <Link to='/' className='w-full'>
                              <Button className='  w-full !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !text-left !justify-start !rounded-none'>
                                Jeans
                              </Button>
                            </Link>
                          </li>
                          <li className='list-none w-full'>
                            <Link to='/' className='w-full'>
                              <Button className=' w-full !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !text-left !justify-start !rounded-none'>
                                Footwear
                              </Button>
                            </Link>
                          </li>
                          <li className='list-none w-full'>
                            <Link to='/' className='w-full'>
                              <Button className=' w-full !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !text-left !justify-start !rounded-none'>
                                Watch
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='list-none w-full'>
                      <Link to='/' className='w-full'>
                        <Button className=' w-full !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !text-left !justify-start !rounded-none'>
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                      <Link to='/' className='w-full'>
                        <Button className=' w-full !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !text-left !justify-start !rounded-none'>
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                      <Link to='/' className='w-full'>
                        <Button className=' w-full !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !text-left !justify-start !rounded-none'>
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                      <Link to='/' className='w-full'>
                        <Button className=' w-full !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !text-left !justify-start !rounded-none'>
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='list-none'>
                <Link to={'/'} className=' text-[14px] font-[500]'>
                  <Button className='!font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className='list-none'>
                <Link to={'/'} className=' text-[14px] font-[500]'>
                  <Button className=' !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                    Bags
                  </Button>
                </Link>
              </li>

              <li className='list-none'>
                <Link
                  to={'/'}
                  className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                    Footwear
                  </Button>
                </Link>
              </li>

              <li className='list-none'>
                <Link
                  to={'/'}
                  className='link transition text-[14px] font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                    Groceries
                  </Button>
                </Link>
              </li>

              <li className='list-none'>
                <Link
                  to={'/'}
                  className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                    Beauty
                  </Button>
                </Link>
              </li>

              <li className='list-none'>
                <Link
                  to={'/'}
                  className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                    Wellness
                  </Button>
                </Link>
              </li>

              <li className='list-none'>
                <Link
                  to={'/'}
                  className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                    Jewelry
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className='col_3 w-[20%]'>
            <p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0'>
              <GoRocket className='text-[18px]' />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
