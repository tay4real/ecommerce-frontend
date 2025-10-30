import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <section className='section py-10'>
      <div className='container'>
        <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
          <h3 className='text-center text-[18px] text-black'>
            Login to your account
          </h3>

          <form className='w-full mt-5'>
            <div className='form-group w-full mb-5'>
              <TextField
                type='email'
                id='email'
                label='Email Id *'
                variant='outlined'
                className='w-full'
              />
            </div>
            <div className='form-group w-full mb-5 relative'>
              <TextField
                type={isShowPassword ? 'text' : 'password'}
                id='password'
                label='Password *'
                variant='outlined'
                className='w-full'
              />
              <Button
                className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? (
                  <IoMdEye className='text-[20px] opacity-75' />
                ) : (
                  <IoMdEyeOff className='text-[20px] opacity-75' />
                )}
              </Button>
            </div>

            <Link className='link cursor-pointer text-[14px] font-[500]'>
              Forgot Password?
            </Link>

            <div className='flex items-center w-full mt-3 mb-3'>
              <Button className='btn-org btn-lg w-full'>Login</Button>
            </div>

            <p className='text-center'>
              Not Registered?{' '}
              <Link
                className='link text-[14px] font-[600] text-primary'
                to='/register'>
                Sign Up
              </Link>
            </p>

            <p className='text-center font-[500]'>
              Or continue with social account
            </p>

            <Button className='flex items-center gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black'>
              <FcGoogle className='text-[20px]' /> Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
