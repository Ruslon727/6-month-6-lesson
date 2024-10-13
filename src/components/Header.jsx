import React from 'react'
import LogoDashboard from '../assets/images/LogoDashboard.svg'
import PartLogo from '../assets/images/PartLogo.svg'
import {Bell} from '../assets/images/Image'

function Header() {
  return (
    <div className='py-[24px] border-b-[2px] flex items-center justify-between border-white px-[65px] '>
      <img src={LogoDashboard} alt="Site Logo" width={104} height={21} />
      <div className='flex items-center space-x-[77px]'>
        <div className='flex items-center space-x-[11px]'>
          <img src={PartLogo} alt="Logo half" width={36} height={36} />
          <span className='text-white text-[12px] font-normal leading-[24px] '>CoinBase</span>
        </div>
        <Bell/>
      </div>
    </div>
  )
}

export default Header