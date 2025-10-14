import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleUp } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa6';


const QtyBox = () => {
  const [qtyValue, setQtyValue] = useState(1);

  const plusQty = () => {
    setQtyValue(qtyValue + 1);
  };

  const minusQty = () => {
    if (qtyValue > 1) {
      setQtyValue(qtyValue - 1);
    }
  };
  return (
    <div className='qtyBox flex items-center relative'>
      <input
        type='number'
        className='w-full h-[40px] p-2 pl-5 text-[15px] focus:outline-none border-1 border-[rgba(0,0,0,0.2)] rounded-md'
        value={qtyValue}
      />

      <div className='flex items-center flex-col justify-between h-[40px]  absolute top-0 right-0 z-50 '>
        <Button
          className='!min-w-[30px] !h-[20px] !w-[30px] !text-[rgba(0,0,0,0.7)] !rounded-none'
          onClick={plusQty}>
          <FaAngleUp className='text-[12px] opacity-55' />
        </Button>
        <Button
          className='!min-w-[30px] !h-[20px] !w-[30px] !text-[rgba(0,0,0,0.7)] !rounded-none'
          onClick={minusQty}>
          <FaAngleDown className='text-[12px] opacity-55' />
        </Button>
      </div>

      
    </div>
  );
};

export default QtyBox;
