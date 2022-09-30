import Image from 'next/image'
import React from 'react'

export default function IconText({ icon, name, unread, clickEvent, active, footer_nav }) {

  if (footer_nav){
    return (
    
      <div aria-hidden role={"button"} className={`w-full md:mt-5 lg:mt-6 cursor-pointer flex items-center justify-between pl-[20%] font-Poppins text-base 
      ${name==='Log out'? 'text-[#A6231C]' : 'text-[#7C8DB5]'} `}>
        <div className='flex items-center'>
          <Image src={icon} width={20} height={18} />
          <span className=' ml-3 md:text-sm lg:text-base'>{name}</span>
        </div>
        
        {unread > 0 ?
          <div className='flex justify-center items-center w-5 h-5 mr-10 rounded-full bg-[#A6231C]'>
            <span className='text-white text-xs'>{unread}</span>
          </div> : null
        }
      </div>
    )
  }
  return (
    
    <div aria-hidden role={"button"} className={`w-full md:mt-5 lg:mt-6 cursor-pointer flex items-center justify-between pl-[20%] font-Poppins text-base 
    ${active ? 'text-black border-r-4 border-black' : 'text-[#7C8DB5]'} `}
      onClick={() => clickEvent(name)}>

      <div className='flex items-center'>
        <Image src={icon} width={20} height={18} />
        <span className=' ml-3 md:text-sm lg:text-base'>{name}</span>
      </div>
      
      {unread > 0 ?
        <div className='flex justify-center items-center w-5 h-5 mr-10 rounded-full bg-[#A6231C]'>
          <span className='text-white text-xs'>{unread}</span>
        </div> : null
      }
    </div>
  )
}
