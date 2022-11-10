import Image from 'next/image'
import React, { useContext } from 'react'
import { CollaboratorContext } from '../../../context/GlobalProvider'
import Styles from './Components.module.css'



const teletravail_colors = {
    "Fixe 2 jours/semaine": "#347AE2",
    "Télétravail ponctuel": "#E59523",
    "Libre 3 jours/ semaine": "#7C8DB5",
    "Libre et illimité": "#E6EDFF",
}

export default function SendWarning({ toggleVisible, collaborator }) {
    const { rows } = useContext(CollaboratorContext);

    const result = rows.find(obj => {
        return obj.id === collaborator
    })

    return (
        <div className={`${Styles.editCollaboratorForm} h-full w-full pt-12 pb-8 pr-8`}>
            <div className='absolute flex  pl-12'>
                <Image className='cursor-pointer' src={'/Dashboard/Home/back-arrow.svg'} width={45} height={31}
                    onClick={toggleVisible}
                />
                <span className='font-Roboto font-medium text-2xl ml-5'>Retour</span>
            </div>
            <div className='w-full flex  flex-col items-center'>
                <Image src={'/Dashboard/Notifications/warning.png'} width={40} height={40} />
                <span className='font-Roboto text-3xl '>
                    Envoyer un avertissement
                </span>
            </div>

            <div className='flex items-center'>
                <Image src={"/Dashboard/Home/dummy-pic.svg"} width={300} height={300} />
                <div className='flex flex-col'>
                    <span className='font-Roboto font-medium text-3xl text-[#373737]'>{result.nom}</span>
                    <span className='font-Roboto font-medium text-xl text-[#373737] mt-3'>{result.fanction}</span>
                    <span className='font-Roboto text-sm text-[#737373]'>Service {result.service}</span>
                    <div className='box-shadow-style  mt-3 px-2 flex items-center'>
                        <div className={`w-2 h-2 bg-[${teletravail_colors[result.teletravail]}] rounded-full`}
                            style={{ background: teletravail_colors[result.teletravail] }}

                        />
                        <span className='text-xs py-[10px] font-Poppins ml-2'>{result.teletravail}</span>
                    </div>

                </div>
            </div>

            <div className='reminders-box-shadow mx-[8%]'>
                <div className='ml-4 mt-2'>
                    <span className='font-Roboto font-medium text-[15px]'>
                        Objet :
                    </span>
                    <span className='font-Poppins text-xs ml-1'>
                        Oubli de déclaration de votre planning en télétravail/présentiel
                    </span>

                </div>
                <div className='border border-[#D7D0D0] mt-1' />

                <div className='ml-4 mt-2'>
                    <span className='font-Roboto font-medium text-[15px]'>
                        Texte :
                    </span>
                    <p className='font-Poppins text-xs pb-4 w-[95%]'>
                        Bonjour {result.nom},<br />
                        Vous avez oublié de déclarer votre présence au bureau ou en télétravail pour les jours suivants : <br />
                        <ul className=' block list-disc ml-5'>
                            <li>Lundi 22 septembre 2022</li>
                            <li>Mardi 23 septembre 2022</li>
                            <li>Lundi 29 septembre 2022</li>
                        </ul>
                        <br />
                        En l’asbence de votre déclaration, nous ne sommes pas en mesure de vous verser votre indemnité de télétravail d’un montant de 9,87€ / jour télétravaillé. <br />
                        Le présent oubli représente un manque à gagner de 29,61 € pour vous. <br /><br />

                        Comptant sur votre future diligence,<br />
                        Nous vous souhaitons une très belle journée.<br /><br />

                        Votre service RH

                    </p>
                </div>


            </div>

            <div className='w-full flex justify-end items-center mt-11 mb-5'>
                <div className='bg-black flex items-center font-Poppins box-shadow-style text-white mr-11'>
                    <div className={`w-2 h-2 ml-3 bg-[#A6231C] rounded-full`} />
                    <span className='ml-2 mr-5 my-2'>
                        Ne pas envoyer
                    </span>
                </div>
                <div className='bg-black flex items-center font-Poppins box-shadow-style text-white'>
                    <div className={`w-2 h-2 ml-3 bg-[#279A44] rounded-full`} />
                    <span className='ml-2 mr-5 my-2'>
                        Envoyer
                    </span>
                </div>
            </div>
        </div>
    )
}