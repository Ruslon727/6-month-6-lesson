import React, { useContext, useState } from 'react'
import { DeleteIcon, MoreIcon } from '../assets/images/Image'
import { Checkbox } from 'antd'
import { Context } from '../context/Context'

function AgentsItem({ item }) {
    const { agents, setAgents } = useContext(Context)
    const [isPending, setIsPending] = useState(false)

    function handleCheckBtn(e) {
        item.isChecked = !item.isChecked
        setAgents([...agents])
    }

    function handleStatusBtnClick() {
        setIsPending(true)
        setTimeout(() => {
            setIsPending(false)
            item.status = !item.status
        }, 1000)
        setAgents([...agents])
    }
    return (
        <tr className='border-[2px] border-white'>
            <td className='space-x-[15px] py-[19px] pl-5'>
                <Checkbox onChange={handleCheckBtn} checked={item.isChecked}></Checkbox>
                <button onClick={handleStatusBtnClick} className={`${isPending ? "active-pending" : (item.status ? "bg-green-500" : "bg-red-500")} w-[91px] duration-500 h-[27px] rounded-[215px] font-bold text-[12px] leading-[18px] text-white py-[5px]`}>{isPending ? "Pending" : (item.status ? "Active" : "Down")}</button>
            </td>
            <td className='space-x-[17px] py-[19px] flex items-center justify-center'>
                <img className='rounded-full' src={item.imgUrl} alt="random img" width={36} height={36} />
                <strong className='text-white text-[12px] font-normal leading-[20px]'>{item.username}</strong>
            </td>
            <td className='text-center py-[19px] text-white text-[12px] leading-[20px]'>{item.useremail}</td>
            <td className='py-[19px] text-end space-x-5 pr-5'>
                <button className='align-middle hover:scale-[1.4] duration-300'><DeleteIcon /></button>
                <button className='align-middle hover:scale-[1.4] duration-300'><MoreIcon /></button>
            </td>
        </tr>
    )
}

export default AgentsItem