import React from 'react'
import { SignInLogo } from '../../assets/images/Image'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
import toast, { Toaster } from 'react-hot-toast'
import { useContext } from 'react'

function SignIn() {
    const {token, setToken} = useContext(Context)
    function handleSignInSubmit(e) {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        if (data.email == "ruslan@gmail.com" && data.password == "1234") {
            setToken(data)
        }
        else {
            toast.error("User not found!");
        }
    }
    return (
        <div className='text-center pt-[63px] flex flex-col items-center '>
            <Toaster position="top-center" reverseOrder={false}
            />
            <SignInLogo />
            <h2 className=' text-white mt-[14.04px] leading-[37.5px] text-[25px] font-bold '>Sign In</h2>
            <form onSubmit={handleSignInSubmit} className='w-[362px] text-start mt-[10px]'>
                <label className='flex flex-col'>
                    <span className='text-[12px] text-white leading-[16px] font-normal inline-block mb-[17px]'>Email</span>
                    <input className='py-[23px] pl-[34px] rounded-[100px] leading-[24px] text-[12px] font-normal placeholder:text-[#858585]' type="email" name='email' placeholder='Email' />
                </label>
                <label className='flex flex-col mt-[27px]'>
                    <span className='text-[12px] text-white leading-[16px] font-normal inline-block mb-[17px]'>Password</span>
                    <input className='py-[23px] pl-[34px] rounded-[100px] leading-[24px] text-[12px] font-normal placeholder:text-[#858585]' type="password" name='password' placeholder='Password' />
                </label>
                <Link className='text-white mt-[9px] font-normal block text-center text-[10px] leading-[15px] mb-[7px]' to={'/sign-up'}>Sign Up</Link>
                <Button title={'Sign In'} type={'submit'} />
            </form>
        </div>
    )
}

export default SignIn