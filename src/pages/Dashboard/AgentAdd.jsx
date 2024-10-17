import React, { useContext, useEffect, useState } from 'react'
import { UploadImgIcon } from '../../assets/images/Image'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
import { useNavigate, useParams } from 'react-router-dom'
import CustomLoading from '../../components/CustomLoading'
import { ArrowBack } from '../../assets/images/Image'

function AgentAdd() {
  const navigate = useNavigate();
  const { id } = useParams()
  const { agents, setAgents } = useContext(Context);
  const [username, setUsername] = useState("")
  const [useremail, setUseremail] = useState("")
  const [about, setAbout] = useState("")
  const [imgUrl, setImgUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmitAgent(e) {
    e.preventDefault()
    if (id) {
      const updateAgent = agents.find(item => item.id == id)
      updateAgent.imgUrl = imgUrl
      updateAgent.username = username
      updateAgent.useremail = useremail
      updateAgent.about = about
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setAgents([...agents])
        navigate(-1)
      }, 2000)
    }
    else {
      const data = {
        id: agents.length + 1,
        isChecked: false,
        status: true,
        imgUrl,
        username,
        useremail,
        about,
      }
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setAgents([...agents, data])
        navigate(-1)
      }, 2000)
    }
  }


  useEffect(() => {
    if (id) {
      const updateAgent = agents.find(item => item.id == id)
      setImgUrl(updateAgent.imgUrl)
      setUsername(updateAgent.username)
      setUseremail(updateAgent.useremail)
      setAbout(updateAgent.about)
    }
  }, [])

  return (
    <div className='p-[50px]'>
      <p className='text-[12px] leading-[18px] text-white font-bold mb-[33px]'>Admin Management   Agents</p>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-5'>
          <button onClick={() => navigate("/agents")}><ArrowBack /></button>
          <h2 className='text-[16px] text-white leading-[24px] font-bold'>Agent {id ? "Update" : "Create"}</h2>
        </div>
      </div>
      <form autoComplete='off' onSubmit={handleSubmitAgent} className='p-[40px] border-[2px] border-white rounded-lg mt-[28px]'>
        <label className='w-[244px] h-[166px] border-[2px] mx-auto mb-[83px]  border-white rounded-md flex flex-col items-center pt-[52px]  '>
          <input onChange={(e) => setImgUrl(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden' />
          {imgUrl ? <img className='w-full h-full' src={imgUrl} alt="Choose Img" width={"100%"} height={"100%"} />
            : <>
              <UploadImgIcon />
              <strong className='font-bold text-[12px] text-white mt-[19px] inline-block'>Upload Agent image here</strong>
            </>
          }

        </label>
        <label className='flex flex-col w-[362px] mb-[27px] mx-auto mt-[27px]'>
          <span className='text-[12px] text-white leading-[16px] font-normal inline-block mb-[17px]'>Agent Name</span>
          <input value={username} onChange={(e) => setUsername(e.target.value)} className='py-[23px] pl-[34px] outline-none focus:shadow-md focus:shadow-white rounded-[100px] leading-[24px] text-[12px] font-normal placeholder:text-[#858585] text-white bg-transparent border-white border-[2px]' type="text" name='agentName' placeholder='Enter name' />
        </label>
        <label className='flex flex-col w-[362px] mb-[27px] mx-auto mt-[27px]'>
          <span className='text-[12px] text-white leading-[16px] font-normal inline-block mb-[17px]'>Agent Email</span>
          <input value={useremail} onChange={(e) => setUseremail(e.target.value)} className='py-[23px] pl-[34px] outline-none focus:shadow-md focus:shadow-white rounded-[100px] leading-[24px] text-[12px] font-normal placeholder:text-[#858585] text-white bg-transparent border-white border-[2px]' type="email" name='agentEmail' placeholder='Enter email' />
        </label>
        <label className='flex flex-col w-[362px] mb-[27px] mx-auto mt-[27px]'>
          <span className='text-[12px] text-white leading-[16px] font-normal inline-block mb-[17px]'>Agent About</span>
          <input value={about} onChange={(e) => setAbout(e.target.value)} className='py-[23px] pl-[34px] outline-none focus:shadow-md focus:shadow-white rounded-[100px] leading-[24px] text-[12px] font-normal placeholder:text-[#858585] text-white bg-transparent border-white border-[2px]' type="text" name='agentAbout' placeholder='Enter about agent' />
        </label>
        <Button type={"submit"} extraStyle={"font-normal"}>{id ? "Update" : "Add"} Agent</Button>
      </form>
      {isLoading ? <CustomLoading /> : ""}
    </div>
  )
}

export default AgentAdd