import React, { useState } from 'react'
import { SignInLogo } from '../../assets/images/Image'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
import toast, { Toaster } from 'react-hot-toast'
import { useContext } from 'react'
import Loading from '../../assets/images/loading.png'

function SignIn() {
    const { token, setToken } = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)
    const signUpData = JSON.parse(localStorage.getItem("signUp"))

    function handleSignInSubmit(e) {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        setIsLoading(true)
        if (signUpData) {
            if (data.email == signUpData.email && data.password == signUpData.password) {
                setTimeout(() => {
                    setIsLoading(false)
                    setToken(data)
                }, 1000)
            }
            else {
                setTimeout(() => {
                    setIsLoading(false)
                    toast.error("User not found!")
                }, 1000)
            }
        }
        else {
            if (data.email == "ruslan@gmail.com" && data.password == "1234") {
                setTimeout(() => {
                    setIsLoading(false)
                    setToken(data)
                }, 1000)
            }
            else {
                setTimeout(() => {
                    setIsLoading(false)
                    toast.error("User not found!")
                }, 1000)
            }
        }
    }
    return (
        <div className='text-center pt-[63px] flex flex-col items-center'>
            <Toaster position="top-center" reverseOrder={false}
            />
            <SignInLogo />
            <h2 className=' text-white mt-[14.04px] leading-[37.5px] text-[25px] font-bold '>Sign In</h2>
            <form onSubmit={handleSignInSubmit} className='w-[362px] text-start mt-[10px]'>
                <label className='flex flex-col'>
                    <span className='text-[12px] text-white leading-[16px] font-normal inline-block mb-[17px]'>Email</span>
                    <input className='py-[23px] outline-none focus:shadow-md focus:shadow-white pl-[34px] rounded-[100px] leading-[24px] text-[12px] font-normal placeholder:text-[#858585]' type="email" name='email' placeholder='Email' />
                </label>
                <label className='flex flex-col mt-[27px]'>
                    <span className='text-[12px] text-white leading-[16px] font-normal inline-block mb-[17px]'>Password</span>
                    <input className='py-[23px] pl-[34px] outline-none focus:shadow-md focus:shadow-white rounded-[100px] leading-[24px] text-[12px] font-normal placeholder:text-[#858585]' type="password" name='password' placeholder='Password' />
                </label>
                <Link className='text-white hover:scale-110 duration-300 mt-[9px] font-normal block text-center text-[10px] leading-[15px] mb-[7px]' to={'/sign-up'}>Sign Up</Link>
                <Button type={'submit'}>
                    {isLoading ? <img className='scale-[2] mx-auto' src={Loading} alt="Loading..." width={30} /> : "Sign In"}
                </Button>
            </form>
        </div>
    )
}

export default SignIn