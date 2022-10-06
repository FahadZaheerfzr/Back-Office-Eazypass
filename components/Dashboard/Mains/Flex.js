import Image from 'next/image'
import React, { useState } from 'react'
import Stats from '../Components/Stats'
import Styles from './Dashboard.module.css'

const stats = [
    {
        "id": 0,
        "figure": "103",
        "icon": "/Dashboard/Home/users.svg",
        "description": "collaborateurs",
        "index": "10.2",
        "profit": "1.01",
    },
    {
        "id": 1,
        "figure": "37,08",
        "flex": "pers.",
        "icon": "/Dashboard/Home/case.svg",
        "description": "présentes sur site / jour",
        "index": "3.1",
        "profit": "0.49",
    },
    {
        "id": 2,
        "figure": "0,73",
        "icon": "/Dashboard/Home/completed.svg",
        "description": "taux de flex",
        "index": "2.00",
        "profit": "-0.91",
    },
    {
        "id": 3,
        "figure": "3,2",
        "icon": "/Dashboard/Home/return.svg",
        "description": "jours TT / semaine",
        "index": "0.2",
        "profit": "1.51",
    },
]

export default function Flex() {
    const [avg, setAvg] = useState(44);
    return (
        <div className='w-full'>
            <div className='flex justify-end'>
                <select defaultValue={'Toute l’entreprise'} className={`${Styles.customSelect} mr-5`}>
                    <option>Toute l’entreprise</option>
                </select>
                <select defaultValue={'7 derniers jours'} className={`${Styles.customSelect}`}>
                    <option >7 derniers jours</option>
                </select>
            </div>

            <div className='mt-5 flex justify-evenly rounded-xl border border-[#E6EDFF] p-5'>
                {stats.map(stat => (
                    <Stats key={stat.id} figure={stat.figure} description={stat.description}
                        icon={stat.icon} index={stat.index} profit={stat.profit} border={stat.id == 3 ? false : true}
                        flex={stat.flex?stat.flex:null}
                    />
                ))}
            </div>

            <div className='flex flex-col items-center mt-7 bg-[#FFFEFE]'>
                <div className='box-shadow-style flex items-center h-32 justify-center w-[80%]'>
                    <span className='font-Poppins font-semibold text-4xl text-[#347AE2]'>
                        {avg}
                    </span>
                    <span className='font-Poppins text-base font-medium ml-1 text-[#347AE2]'>pers.</span>

                    <span className='font-Poppins text-base font-medium mx-8'>
                    affluence maximale atteinte sur une journée
                    </span>
                    <span className='text-[#7C8DB5] font-Poppins text-base font-medium mr-6'>
                        Le jeudi 11 août 2022                    
                    </span>

                    <Image src={"/Dashboard/Home/users.svg"} width={55} height={55} />
                </div>

                <div className='box-shadow-style flex items-center h-48 mt-8'>
                    <span className='font-Poppins font-semibold text-4xl text-[#347AE2] ml-5'>
                        {avg}
                    </span>
                    <span className='font-Poppins text-base font-medium ml-1 text-[#347AE2]'>pers.</span>

                    <span className='font-Poppins text-base font-medium mx-8'>
                    affluence maximale atteinte sur une journée
                    </span>
                   

                    <Image src={"/Dashboard/Home/case.svg"} width={55} height={55} />
                </div>
            </div>

        </div>
    )
}
