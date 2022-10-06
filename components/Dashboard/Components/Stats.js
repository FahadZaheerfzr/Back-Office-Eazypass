import Image from 'next/image'
import React from 'react'

export default function Stats({ figure, icon, description, index, profit, border,flex }) {
    return (
        <div className={`w-1/4 ${border? 'border-r border-[#E6EDFF]': ''} `}>
            <div className='flex items-center justify-between px-[10%]'>
                <span className='font-Poppins lg:text-xl xl:text-2xl  font-semibold'>{figure} <span className='lg:text-sm xl:text-base font-medium'>{flex}</span></span>
                <Image className='' src={icon} width={44} height={44} />
            </div>

            <div className='px-[10%]'>
                <span className='font-Poppins md:text-xs lg:text-sm xl:text-base '>{description}</span>
            </div>

            <div className='mt-3 px-[10%] flex items-center'>
            {profit>0?
                <Image src={"/Dashboard/Home/profit.svg"} width={20} height={20} />
                : <Image src={"/Dashboard/Home/loss.svg"} width={20} height={20} />
            }
                <span className='font-Poppins md:text-xs xl:text-sm text-[#7C8DB5]'>{parseFloat(index).toFixed(1)}</span>

                <span className='font-Poppins md:text-xs xl:text-sm ml-3 text-[#7C8DB5]'>{profit>0 ? "+" : ""}{profit}% ce mois</span>

            </div>
        </div>
    )
}
