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
    const [seats, setSeats] = useState(75);
    const [percentValue, setPercentValue] = useState(37);
    const [visible, setVisible] = useState(true);

    const decreaseValue = () => {
        if (percentValue > 0) {
            setPercentValue(percentValue - 1);
        }
    }

    const increaseValue = () => {
        if (percentValue < 100) {
            setPercentValue(percentValue + 1);
        }

    }

    const decreaseSeatsValue = () => {
        if (seats > 0) {
            setSeats(seats - 1);
        }
    }

    const increaseSeatsValue = () => {
        if (seats < 100) {
            setSeats(seats + 1);
        }

    }

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
                        flex={stat.flex ? stat.flex : null}
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

                <div className='box-shadow-style h-48 mt-8 w-[80%] flex flex-col justify-evenly'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center ml-6'>
                            <div className='w-5 h-5 rounded-full bg-[#347AE2] flex justify-center items-center text-white cursor-pointer'
                                onClick={decreaseSeatsValue}
                            >
                                <span className='font-Poppins font-semibold'>-</span>
                            </div>
                            <span className='font-Poppins font-semibold text-4xl text-[#347AE2] mx-2'>
                                {seats}
                            </span>
                            <div className='w-5 h-5 rounded-full bg-[#347AE2] flex justify-center items-center text-white cursor-pointer'
                                onClick={increaseSeatsValue}
                            >
                                <span className='font-Poppins font-semibold'>+</span>
                            </div>
                        </div>

                        <span className='font-Poppins text-base font-medium mx-8'>
                            nombre de places disponibles au bureau
                        </span>

                        <div className='mr-6'>
                            <Image src={"/Dashboard/Home/case.svg"} width={55} height={55} />
                        </div>
                    </div>
                    <div className='flex justify-between items-center ml-6'>
                        <div className=''>
                            <div className='flex items-center cursor-pointer'
                                onClick={() => setVisible(!visible)}
                            >
                                <div className='w-2 h-2 border-2 border-[#347AE2] rounded-full' />
                                <span className='font-Poppins font-medium text-sm ml-2 mr-1'>Recommandation</span>
                                <Image src={"/Dashboard/flex/shape.svg"} width={11} height={7} />
                            </div>
                            {visible &&
                                <div className='w-[87%]'>
                                    <span className='font-Poppins text-[#7C8DB5] text-xs'>
                                        Chaque jour, 37 collaborateurs viennent au bureau en moyenne. Vous avez 75 places disponibles. Ce mois, votre affluence record sur une journée est de 44 personnes.
                                        Vous pouvez supprimer environ 20 places au bureau et gagner de l’espace m2.
                                    </span>
                                </div>
                            }
                        </div>

                        <div>
                            <button className='box-shadow-style font-Poppins'>
                                Appliquer
                            </button>
                        </div>
                    </div>
                </div>

                <div className='box-shadow-style h-32 mb-8 mt-8 w-[80%] flex flex-col justify-evenly'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center ml-6'>
                            <div className='w-5 h-5 rounded-full bg-[#347AE2] flex justify-center items-center text-white cursor-pointer'
                                onClick={decreaseValue}
                            >
                                <span className='font-Poppins font-semibold'>-</span>
                            </div>
                            <span className='font-Poppins font-semibold text-4xl text-[#347AE2] mx-2'>
                                {percentValue}%
                            </span>
                            <div className='w-5 h-5 rounded-full bg-[#347AE2] flex justify-center items-center text-white cursor-pointer'
                                onClick={increaseValue}
                            >
                                <span className='font-Poppins font-semibold'>+</span>
                            </div>
                        </div>

                        <span className='font-Poppins text-base font-medium mx-8'>
                            jauge maximale de présence au bureau chaque jour
                        </span>

                        <div className='mr-6 my-box'>
                            <Image src={"/Dashboard/Flex/meter.svg"} width={25} height={25} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}