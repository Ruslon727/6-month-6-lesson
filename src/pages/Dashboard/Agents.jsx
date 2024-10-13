import React from 'react'
import Button from '../../components/Button'
import { DeleteIcon, MoreIcon, UserIcon } from '../../assets/images/Image'
import { Checkbox } from 'antd'

function Agents() {
  return (
    <div className='p-[50px]'>
      <p className='text-[12px] leading-[18px] text-white font-bold mb-[33px]'>Admin Management   Agents</p>
      <div className='flex items-center justify-between'>
        <h2 className='text-[16px] text-white leading-[24px] font-bold'>Agents</h2>
        <div className='flex items-center space-x-[20px]'>
          <input className='py-[12px] search-input text-white rounded-[50px] pl-[50px] bg-transparent border-[2px] border-white outline-none focus:shadow-sm focus:shadow-white w-[216px] ' type="text" placeholder='Search Agents' name='searching' aria-label='Searching...' />
          <Button extraStyle={'flex items-center mx-0 justify-center w-[134px] gap-[7px]'}>
            <UserIcon />
            <span className='text-[10px] leading-[15px] font-normal'>Add Agent</span>
          </Button>
        </div>
      </div>
      <div className='p-[40px] border-[2px] border-white rounded-lg mt-[28px]'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-start text-white w-[20%]'>
              <Checkbox className='text-white'>
                Account Status
              </Checkbox>
              </th>
              <th className='text-center text-white w-[20%]'>User Name</th>
              <th className='text-center text-white w-[40%]'>Email</th>
              <th className='text-end text-white w-[20%]'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-[2px] border-white'>
              <td className='space-x-[15px] py-[19px]'>
                <Checkbox></Checkbox>
                <button className='bg-[#5DF888] w-[91px] h-[27px] rounded-[215px] font-bold text-[12px] leading-[18px] text-white py-[5px]'>Active</button>
              </td>
              <td className='space-x-[17px] py-[19px] flex items-center justify-center'>
                <img className='rounded-full' src="https://picsum.photos/id/2/500/500" alt="random img" width={36} height={36} />
                <strong className='text-white text-[12px] font-normal leading-[20px]'>Ramon Ridwan</strong>
              </td>
              <td className='text-center py-[19px] text-white text-[12px] leading-[20px]'>Ramonridwan@protonmail.com</td>
              <td className='py-[19px] text-end '>
                <button><DeleteIcon/></button>
                <button><MoreIcon/></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Agents