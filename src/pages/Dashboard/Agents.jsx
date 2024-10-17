import React, { useContext, useState } from 'react'
import Button from '../../components/Button'
import { UserIcon } from '../../assets/images/Image'
import { Checkbox, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context'
import AgentsItem from '../../components/AgentsItem'
import Loading from '../../assets/images/loading.png'

function Agents() {
  const { agents, setAgents } = useContext(Context)
  const [isLoading, setIsLoading] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [allAgents, setAllAgents] = useState(agents)

  const [checkAll, setCheckAll] = useState(JSON.parse(localStorage.getItem("checkAll")) || false)
  const navigate = useNavigate();

  function handleCheckAll(e) {
    setCheckAll(e.target.checked)
    if (e.target.checked) {
      agents.forEach(item => item.isChecked = true)
    }
    else {
      agents.forEach(item => item.isChecked = false)
    }
    setAgents([...agents])
  }

  function deleteBtnClick(id) {
    setDeleteModal(true)
    setDeleteId(id)
  }

  function handleDeleteAgent() {
    setDeleteModal(false)
    setIsLoading(true)
    const deleteIndex = agents.findIndex(item => item.id == deleteId)
    agents.splice(deleteIndex, 1)
    setTimeout(() => {
      setIsLoading(false)
      setAgents([...agents])
    }, 1000)
  }

  function handleSearchAgent(e) {
    setIsLoading(true)
    if (e.target.value) {
      const filteredAgent = agents.filter(item => item.username.toLowerCase().includes(e.target.value.toLowerCase()))
      setTimeout(() => {
        setIsLoading(false)
        setAllAgents(filteredAgent)
      }, 1000)
    }
    else{
      setTimeout(() => {
        setIsLoading(false)
        setAgents(agents)
      }, 1000)
    }
  }

  localStorage.setItem("checkAll", JSON.stringify(checkAll))

  return (
    <div className='p-[50px]'>
      <p className='text-[12px] leading-[18px] text-white font-bold mb-[33px]'>Admin Management   Agents</p>
      <div className='flex items-center justify-between'>
        <h2 className='text-[16px] text-white leading-[24px] font-bold'>Agents</h2>
        <div className='flex items-center space-x-[20px]'>
          <input onChange={handleSearchAgent} className='py-[12px] search-input text-white rounded-[50px] pl-[50px] bg-transparent border-[2px] border-white outline-none focus:shadow-sm focus:shadow-white w-[216px] ' type="text" placeholder='Search Agents' name='searching' aria-label='Searching...' />
          <Button onClick={() => navigate("add")} extraStyle={'flex items-center mx-0 justify-center w-[134px] gap-[7px]'}>
            <UserIcon />
            <span className='text-[10px] leading-[15px] font-normal'>Add Agent</span>
          </Button>
        </div>
      </div>
      <div className='p-[40px] border-[2px] border-white rounded-lg mt-[28px]'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-start text-white w-[20%] pl-5'>
                <Checkbox checked={checkAll} onChange={handleCheckAll} className='text-white'>Account Status</Checkbox>
              </th>
              <th className='text-center text-white w-[20%]'>User Name</th>
              <th className='text-center text-white w-[40%]'>Email</th>
              <th className='text-end text-white w-[20%] pr-5'>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <div className='flex justify-center w-[450%] mt-5'>
              <img src={Loading} alt="Loaing..." />
            </div>
              : allAgents.map(item => <AgentsItem deleteBtnClick={deleteBtnClick} item={item} key={item.id} />)}
          </tbody>
        </table>
      </div>
      <Modal open={deleteModal} okText='Delete' onOk={handleDeleteAgent} onCancel={() => setDeleteModal(false)} title={"Are You Sure Delete This Agent?"}>

      </Modal>
    </div>
  )
}

export default Agents