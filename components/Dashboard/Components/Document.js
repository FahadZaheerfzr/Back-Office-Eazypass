import Image from 'next/image'
import React from 'react'

/*
 * This component is for the document verification section
 */
export default function Document({heading, description, image, unread}) {
  return (
    <div className='w-1/3 px-2'>
            <div className='w-full flex justify-end ml-2'>
                {unread > 0?
                <div className='text-white bg-[#be2d22] -mt-3 rounded-full w-8 h-8 flex justify-center items-center absolute z-20'>
                    {unread}
                </div>
                : null
                }
            </div>
            <div className='w-full'>
            
                <Image className='z-10 rounded-tl-xl rounded-tr-xl'  src={image} layout={'responsive'} width={400} height={330} />
            </div>
            <div className='border px-4 -mt-1 py-6 border-[#7C8DB5] rounded-br-xl rounded-bl-xl'>
            <div className=''>
                <span className='font-Poppins font-medium text-xl'>
                {heading}
                </span>
            </div>
            <div className=''>
                <span className='font-Poppins text-[#7C8DB5] lg:text-xs xl:text-sm'>
                {description}
                </span>
            </div>
            </div>
    </div>
  )
}
