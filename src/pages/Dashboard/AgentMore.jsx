import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
import { ArrowBack } from '../../assets/images/Image'

function AgentMore() {
    const { agents } = useContext(Context)
    const { id } = useParams()
    const singleAgent = agents.find(item => item.id == id)
    const navigate = useNavigate()

    return (
        <div className='p-[50px]'>
            <p className='text-[12px] leading-[18px] text-white font-bold mb-[33px]'>Admin Management   Agents</p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-5'>
                    <button onClick={() => navigate("/agents")}><ArrowBack /></button>
                    <h2 className='text-[16px] text-white leading-[24px] font-bold'>{singleAgent.username}</h2>
                </div>
                <div className='flex items-center space-x-[20px]'>
                    <Button onClick={() => navigate("update")} extraStyle={'flex items-center mx-0 justify-center w-[134px] gap-[7px]'}>
                        <span className='text-[10px] leading-[15px] font-normal'>Update Agent</span>
                    </Button>
                </div>
            </div>
            <div className='w-[60%] flex justify-between p-5 rounded-lg border-[2px] border-white mt-10'>
                <ul className='space-y-5 w-[50%]'>
                    <li className='flex flex-col'>
                        <span className='text-slate-500 text-[15px] '>ID</span>
                        <p className='text-white text-[22px] font-semibold'>{id}</p>
                    </li>
                    <li className='flex flex-col'>
                        <span className='text-slate-500 text-[15px] '>Username</span>
                        <p className='text-white text-[22px] font-semibold'>{singleAgent.username}</p>
                    </li>
                    <li className='flex flex-col'>
                        <span className='text-slate-500 text-[15px] '>Useremail</span>
                        <p className='text-white text-[22px] font-semibold'>{singleAgent.useremail}</p>
                    </li>
                    <li className='flex flex-col'>
                        <span className='text-slate-500 text-[15px] '>About</span>
                        <p className='text-white text-[22px] font-semibold'>{singleAgent.about}</p>
                    </li>
                    <li className='flex flex-col'>
                        <span className='text-slate-500 text-[15px] '>Status</span>
                        <p className={`${singleAgent.status ? "text-green-500" : "text-red-500"} text-[22px] font-semibold`}>{singleAgent.status ? "Active" : "Down"}</p>
                    </li>
                </ul>
                <li className='space-y-5 w-[50%]'>
                    <div className='flex flex-col'>
                        <img src={singleAgent.imgUrl} alt="Single Agent Img" width={300} height={300} />
                    </div>
                </li>
            </div>
        </div>
    )
}

export default AgentMore