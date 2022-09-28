import Image from 'next/image'
import React from 'react'

export default function Topbar({name, description, icon}) {
  return (
    <div className='w-full'>
        <Image src={'/Dashboard/topbar.svg'} layout={'responsive'} width={1000} height={28} />
        <div className='w-full mt-10 flex justify-between'>
            <div className='w-1/2  pl-[5%]'>
                <div className=''>
                <Image src={icon} width={17} height={17} />

                </div>
                <div className=''>
                    <span className='font-Poppins  lg:text-lg  xl:text-xl'>{name}</span>
                </div>
                <div >
                    <span className='font-Poppins font-normal text-[#7C8DB5]'>{description}</span>
                </div>
            </div>

            <div className='w-1/2 pr-[5%] h-fit flex items-center justify-end'>
            <div>
                <Image src={'/Dashboard/search.svg'} width={20} height={20}/>
            </div>
            <div className='md:ml-2 xl:ml-7'>
                <Image src={'/Dashboard/notification.svg'} width={20} height={20}/>
            </div>
            <div className='md:ml-5 lg:ml-7 xl:ml-9'>
                <Image src={'/Dashboard/avatar.svg'} width={42} height={42}/>
            </div>

            <div className='md:ml-2 xl:ml-3'>
                <span className='font-Poppins md:text-sm lg:text-base'>Maxime Duvauchelle</span>
            </div>
            <div className='mt-1 md:ml-2 xl:ml-3'>
                <Image src={'/Dashboard/chevron-down.svg'} width={15} height={15}/>
            </div>
            </div>

        </div>
    </div>
  )
}
