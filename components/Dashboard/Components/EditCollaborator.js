import Image from 'next/image'
import React, { useContext } from 'react'
import { CollaboratorContext } from '../../../context/GlobalProvider'
import Styles from './Components.module.css'



const assurance_colors = {
  "Valide" : "#279A44",
  "Envoyée" : "#E59523",
  "Non envoyée" : "#A6231C",
}

const teletravail_colors = {
  "Fixe 2 jours/semaine" : "#347AE2",
  "Télétravail ponctuel" : "#E59523",
  "Libre 3 jours/ semaine" : "#7C8DB5",
  "Libre et illimité" : "#E6EDFF",
}

/*
 * This component is used to display a single collaborator from
 * the colaborator table
 */
export default function EditCollaborator({ toggleVisible, collaborator }) {
  const {rows} = useContext(CollaboratorContext);

  const result = rows.find(obj => {
    return obj.id === collaborator
  })

  return (
    <div className={`${Styles.editCollaboratorForm} h-full w-full pt-12 pb-8 pr-8`}>
      <div className='flex  pl-12'>
        <Image className='cursor-pointer' src={'/Dashboard/Home/back-arrow.svg'} width={45} height={31}
          onClick={toggleVisible}
        />
        <span className='font-Roboto font-medium text-2xl ml-5'>Retour</span>
      </div>

      <div className='flex items-center'>
        <Image src={"/Dashboard/Home/dummy-pic.svg"} width={300} height={300} />

        <span className='font-Roboto font-medium text-3xl text-[#373737] mr-6'>{result.nom}</span>
        <Image src={"/Dashboard/Home/edit.svg"} width={21} height={23} />
      </div>

      <div className='pl-[9%]'>
        <div className='flex' >
          <div className='key flex flex-col justify-center'>
            <div className='flex flex-col justify-center items-center h-14'>
              <Image src={"/Dashboard/Collaborator/user.svg"} width={35} height={35} />
              <span className='text-xs text-[#5d5d5d] font-Roboto mt-1'>Fonction</span>
            </div>

            <div className='flex flex-col justify-center items-center mt-5 h-14'>
              <Image src={"/Dashboard/Collaborator/calendar.svg"} width={35} height={35} />
              <span className='text-xs text-[#5d5d5d] font-Roboto mt-1'>Télétravail</span>
            </div>

            <div className='flex flex-col justify-center items-center mt-5 h-14'>
              <Image src={"/Dashboard/Collaborator/mail.svg"} width={35} height={35} />
              <span className='text-xs text-[#5d5d5d] font-Roboto mt-1'>Mail</span>
            </div>

            <div className='flex flex-col justify-center items-center mt-5 h-14'>
              <Image src={"/Dashboard/Collaborator/headset.svg"} width={35} height={35} />
              <span className='text-xs text-[#5d5d5d] font-Roboto mt-1'>Tel.</span>
            </div>


            <div className='flex flex-col justify-center items-center mt-5 h-14'>
              <Image src={"/Dashboard/Collaborator/home.svg"} width={35} height={35} />
              <span className='text-xs text-[#5d5d5d] font-Roboto mt-1'>Site</span>
            </div>

            <div className='flex flex-col justify-center items-center mt-5 h-14'>
              <Image src={"/Dashboard/Collaborator/verified.svg"} width={35} height={35} />
              <span className='text-xs text-[#5d5d5d] font-Roboto mt-1'>Assurance habitation</span>
            </div>

          </div>
          <div className='ml-[25%]'>
            <div className='value flex flex-col justify-center h-14'>
              <span className='text-xl font-Roboto font-medium capitalize'>{result.fanction}</span>
              <span className='text-sm font-Roboto text-[#5d5d5d]'>Service {result.service}</span>
            </div>

            <div className='value flex flex-col justify-center mt-5 h-14'>
              <div className='box-shadow-style flex items-center'>
                <div className={`w-2 h-2 bg-[${teletravail_colors[result.teletravail]}] rounded-full`}
                style={{background: teletravail_colors[result.teletravail]}} 

                />
                <span className='text-xs font-Poppins ml-2'>{result.teletravail}</span>
              </div>
            </div>

            <div className='value flex flex-col justify-center  mt-5 h-14'>
              <span className='text-xl font-Roboto text-[#373737]'>{result.mail}</span>
            </div>

            <div className='value flex flex-col justify-center  mt-5 h-14'>
              <span className='text-xl font-Roboto text-[#373737]'>{result.telephone}</span>
            </div>

            <div className='value flex flex-col justify-center  mt-5 h-14'>
              <span className='text-lg font-Roboto text-[#373737]'>{result.address}</span>
            </div>


            <div className='value flex items-center mt-5 h-14'>
              <div className='box-shadow-style flex items-center'>
                <div className={`w-2 h-2 bg-[${assurance_colors[result.assurance]}] rounded-full`} />
                <span className='text-xs font-Poppins ml-3 mr-3 mt-1 mb-1'>{result.assurance}</span>
              </div>
              <div className='flex ml-6'>
              <Image src={"/Dashboard/Collaborator/paper-clip.svg"} width={20} height={30} />
                <span className='font-Roboto text-xl font-semibold ml-2'>Télécharger</span>
              </div>
            </div>
          </div>




        </div>

      </div>

      <div className='w-full flex justify-end items-center mt-11 mb-5'>
          <div className='w-7 h-7 rounded-full border-2 border-[#DF3D3D] flex items-center justify-center'>
              <div className='w-1/2 h-0 border rounded-lg border-[#DF3D3D]' />
          </div>        

          <span className='font-Roboto font-semibold text-[#DF3D3D] text-xl ml-3'>Supprimer</span>
      </div>
    </div>
  )
}