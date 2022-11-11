import Image from 'next/image'
import React from 'react'

/*
 * This component displays the options for notifications available
 * to the admin
 */
export default function NotificationBox({id, enabled, title, description, active, color, myFunction }) {
    return (
        <div className='flex w-[32%]'>
        <div className={`flex items-center text-${active||!enabled ?'white':'[#7C8DB5]'} bg-[${active||!enabled ? color: '#E6EDFF'}] px-3 py-1 box-shadow-style cursor-pointer`}
        onClick={(event)=>myFunction(event, id)}>
            <input className='w-2 h-2 mr-2' type={"radio"} 
            onClick={(event)=>myFunction(event, id)} />

            <span className='font-Poppins  text-sm'>
                {title} <br/>
                <span className={`text-${active||!enabled?'[#E6EDFF]':'[#7C8DB5]'}`} >
                {description}
                </span>
            </span>
        </div>
        { active && <div className='relative -left-5 -top-2'>
        <Image src={"/Dashboard/notifications/checked.png"} width={64} height={64} />
        </div>
        }
        
        </div>
    )
}
