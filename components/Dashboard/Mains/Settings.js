import Image from 'next/image'
import React from 'react'

const addresses = [
    {
        title: "Siège social - Paris VIIIe",
        des: "4 rue de la Boétie",
        code: "75008",
        city: "Paris",
        country: "France",
        default: true
    },
    {
        title: "Bureau hauts-de-france - Amiens",
        des: "4 rue des indes noires",
        code: "80440",
        city: "Boves",
        country: "France",
        default: false
    }
]

export default function Settings() {
    return (
        <div className='flex mt-9 pb-8'>
            <div className='w-[40%] flex flex-col'>
                <span className='font-Poppins font-medium text-xl'>
                    Profil personnel
                </span>
                <span className='mt-7 mb-3 font-Poppins'>
                    Photo de profil
                </span>
                <Image src={"/Dashboard/Settings/avatar.svg"} layout={"fixed"} width={110} height={110} />

                <div className='mt-6 flex flex-col mr-[20%]'>
                    <label className='font-Poppins'>Prénom</label>
                    <input type={"text"} className="border-2 border-[#E5E5E5] rounded-[7px] h-9 mt-4" />
                </div>
                <div className='mt-4 flex flex-col mr-[20%]'>
                    <label htmlFor='name' className='font-Poppins'>Nom</label>
                    <input id='name' type={"text"} className="border-2 border-[#E5E5E5] rounded-[7px] h-9 mt-4" />
                </div>
                <div className='mt-4 flex flex-col mr-[20%]'>
                    <label htmlFor='email' className='font-Poppins'>Email</label>
                    <input id='email' type={"text"} className="border-2 border-[#E5E5E5] rounded-[7px] h-9 mt-4" />
                </div>
                <div className='mt-4 flex flex-col mr-[20%]'>
                    <label htmlFor='telephone' className='font-Poppins'>N° de tél</label>
                    <input id='telephone' type={"text"} className="border-2 border-[#E5E5E5] rounded-[7px] h-9 mt-4" />
                </div>
                <div className='mt-4 flex flex-col mr-[50%]'>
                    <label htmlFor='language' className='font-Poppins'>Langues</label>
                    <select id='language' defaultValue={""} className="border-2 border-[#E5E5E5] rounded-[7px] h-9 mt-4">
                        <option></option>
                        <option>French</option>
                    </select>
                </div>
            </div>

            <div className='w-[60%]'>
                <span className='font-Poppins font-medium text-xl'>
                    Lieux de travail de vos équipes
                </span>

                <div className='border border-[#E6EDFF] rounded-xl px-5'>
                    <div className='flex mt-4 justify-end'>
                        <div className='mr-7 bg-black flex justify-center items-center w-[30px] h-[30px] rounded-full'>
                            <span className='font-Poppins font-semibold text-white text-2xl'>
                                +
                            </span>
                        </div>
                        <Image src={"/Dashboard/Sidebar/settings-black.svg"} width={30} height={30} />
                    </div>

                    {addresses.map(address => (
                        <div className='mt-2 mb-7 ml-8'>
                            <div className='flex'>
                                <div className=''>
                                    <Image src={"/Dashboard/Settings/home.svg"} width={43} height={34} />
                                </div>

                                <div className='flex flex-col font-Poppins'>
                                    <span className='font-Poppins font-medium text-xl mt-[6px]'>
                                        {address.title}
                                    </span>
                                    <span className='mt-[10px]'>{address.des}</span>
                                    <span>{address.code}</span>

                                    <span>{address.city}, {address.country}</span>


                                </div>
                            </div>
                            {address.default?
                            <div className=' ml-4 mt-3'>
                                <span className='font-Poppins text-[#7C8DB5]'>
                                    Ceci est le lieu de travail configuré par défaut
                                </span>
                            </div>:null
                            }
                        </div>
                    )
                    )}
                    


                </div>

                <div className='mt-5'>
                    <span className='font-Poppins font-medium text-xl'>
                    Mot de passe
                    </span>
                    <div className='mt-4 flex flex-col mr-[40%]'>
                    <label htmlFor='oldPassword' className='font-Poppins'>Ancien mot de passe</label>
                    <input id='oldPassword' type={"text"} className="border-2 border-[#E5E5E5] rounded-[7px] h-9 mt-4" />
                </div>
                <div className='mt-4 flex flex-col mr-[40%]'>
                    <label htmlFor='newPassword' className='font-Poppins'>Nouveau  mot de passe</label>
                    <input id='newPassword' type={"text"} className="border-2 border-[#E5E5E5] rounded-[7px] h-9 mt-4" />
                </div>
                    
                </div>
            </div>
        </div>
    )
}
