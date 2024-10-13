import React, { useState } from 'react'
import { OverviewIcon, UsersIcon, AgentsIcon, CardsIcon, BitcoinEthereumIcon, PaymentsIcon, TransactionsIcon, StatisticsIcon, LogoutIcon } from '../assets/images/Image'
import { NavLink, useNavigate } from 'react-router-dom'
import { Modal } from "antd";

function Navbar() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const navbarList = [
    {
      id: 1,
      icon: <OverviewIcon />,
      title: "Overview",
      path: "/",
      notificationCount: null
    },
    {
      id: 2,
      icon: <UsersIcon />,
      title: "Users",
      path: "/users",
      notificationCount: null
    },
    {
      id: 3,
      icon: <AgentsIcon />,
      title: "Agents",
      path: "/agents",
      notificationCount: null
    },
    {
      id: 4,
      icon: <CardsIcon />,
      title: "Cards",
      path: "/cards",
      notificationCount: 19
    },
    {
      id: 5,
      icon: <BitcoinEthereumIcon />,
      title: "Bitcoin & Ethereum",
      path: "/bitcoin-ethereum",
      notificationCount: null
    },
    {
      id: 6,
      icon: <PaymentsIcon />,
      title: "Payments",
      path: "/payments",
      notificationCount: 10
    },
    {
      id: 7,
      icon: <TransactionsIcon />,
      title: "Transactions",
      path: "/transactions",
      notificationCount: null
    },
    {
      id: 8,
      icon: <StatisticsIcon />,
      title: "Statistics",
      path: "/statistics",
      notificationCount: null
    },
  ]
  function handleSureLogOut() {
    localStorage.clear()
    setIsOpenModal(false)
    location.reload()
    localtion.pathname = "/"
  }

  return (
    <div className='w-[20%] h-[100vh] pt-[44px] pr-[17px]   border-r-[2px] border-white overflow-y-auto'>
      {navbarList.map(item => (
        <NavLink className={"flex items-center relative pl-[55px] py-[18px] rounded-r-[100px]  space-x-[21px]"} to={item.path}>
          {item.icon}
          <span className='text-white text-[12px] leading-[18px] font-normal'>{item.title}</span>
          {item.notificationCount ?
            <button className='w-[20px] font-semibold absolute top-0 bottom-0 my-auto right-[21px] text-[8px] text-white h-[20px] bg-[#a559a7] rounded-full'>{item.notificationCount}</button> : ""}
        </NavLink>
      ))}
      <button onClick={() => setIsOpenModal(true)} className='flex items-center mt-[20px] relative pl-[55px] py-[18px] rounded-r-[100px]  space-x-[21px]'>
        <LogoutIcon />
        <span className='text-white text-[12px] leading-[18px] font-normal'>Logout</span>
      </button>
      <Modal title="Are you sure Logout?" open={isOpenModal} onOk={handleSureLogOut} onCancel={() => setIsOpenModal(false)}></Modal>
    </div>
  )
}

export default Navbar