import React from 'react'
import LoadingImg from '../assets/images/loading.png'

function CustomLoading() {
  return (
    <div className='fixed flex items-center justify-center inset-0 bg-[#00000029] backdrop-blur'>
       <img src={LoadingImg} alt="Loading..." width={300}/> 
    </div>
  )
}

export default CustomLoading