import React from 'react'
import { SignInLogo } from '../../assets/images/Image'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

function SignUp() {
    return (
        <div className='text-center pt-[63px] flex flex-col items-center '>
            <SignInLogo />
            <h2 className=' text-white mt-[14.04px] leading-[37.5px] text-[25px] font-bold '>Sign Up</h2>
            <form autoComplete='off' className='w-[362px] text-start mt-[10px]'>
                <label className='flex flex-col'>
                    <span className='text-[12px] text-white leading-[16px] font-normal inline-block mb-[17px]'>Email</span>
                    <input required className='py-[23px] pl-[34px] rounded-[100px] leading-[24px] text-[12px] font-normal placeholder:text-[#858585]' type="email" name='email' placeholder='Email' />
                </label>
                <label className='flex flex-col mt-[27px]'>
                    <span className='text-[12px] text-white leading-[16px] font-normal inline-block mb-[17px]'>Password</span>
                    <input required className='py-[23px] pl-[34px] rounded-[100px] leading-[24px] text-[12px] font-normal placeholder:text-[#858585]' type="password" name='password' placeholder='Password' />
                </label>
                <Link className='text-white mt-[9px] font-normal block text-center text-[10px] leading-[15px] mb-[7px]' to={'/'}>Sign In</Link>
                <Button title={'Sign Up'} type={'submit'}/>
            </form>
        </div>
    )
}

export default SignUp