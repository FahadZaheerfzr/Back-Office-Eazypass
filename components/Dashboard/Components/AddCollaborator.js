import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { CollaboratorContext } from '../../../context/GlobalProvider';
import Styles from './Components.module.css'

export default function AddCollaborator({ toggleVisible }) {
  const [name, setName] = useState("");
  const [func, setFunc] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("Choisir un lieu de travail");

  const { addCollaborator } = useContext(CollaboratorContext);

  const submitForm = (e) => {
    e.preventDefault();
    const row = {
      id: Math.floor(Math.random() * 100000),
      nom: name,
      date: new Date().toDateString().slice(3,),
      fanction: func,
      service: service,
      teletravail: 'Fixe 2 jours/semaine',
      assurance: 'Valide',
      address: address,
      telephone: telephone,
      mail: email,
    }

    addCollaborator(row);
    toggleVisible();
  }

  return (
    <div className={`${Styles.editCollaboratorForm} h-full w-full pl-16 pt-12 pb-8 pr-8`}>
      <div className='flex justify-between items-center'>
        <span className='font-Poppins font-medium text-xl'>Ajouter un collaborateur</span>
        <div className='flex items-center'>
          <span className='font-Poppins font-medium underline mr-6'>Importer une photo</span>
          <Image src={"/Dashboard/Collaborator/dummy-profile.svg"} width={50} height={50} style={{borderRadius:12}} />
        </div>
      </div>
      <form>
        <div className='w-full mt-10'>
          <label htmlFor='name' className='font-Roboto font-bold'>Nom, Prénom</label><br />
          <input id='name' className='border border-[#BFBFBF] pl-4 rounded-lg w-2/3 h-9 mt-4' type="text"
            value={name} onChange={(event) => setName(event.target.value)} required
          />
        </div>

        <div className='w-full mt-10'>
          <label htmlFor='function' className='font-Roboto font-bold'>Fonction</label><br />
          <input id='function' className='border border-[#BFBFBF] pl-4 rounded-lg w-2/3 h-9 mt-4' type="text"
            value={func} onChange={(event) => setFunc(event.target.value)} required />
          <span className='text-xs font-Roboto ml-14'>Ex: Web designer</span>
        </div>

        <div className='w-full mt-10'>
          <label htmlFor='service' className='font-Roboto font-bold'>Service</label><br />
          <input id='service' className='border border-[#BFBFBF] pl-4 rounded-lg w-2/3 h-9 mt-4' type="text"
            value={service} onChange={(event) => setService(event.target.value)} required
          />
          <span className='text-xs font-Roboto ml-14'>Ex : marketing</span>

        </div>

        <div className='w-full mt-10'>
          <label htmlFor='email' className='font-Roboto font-bold'>Adresse email</label><br />
          <input id='email' className='border border-[#BFBFBF] pl-4 rounded-lg w-2/3 h-9 mt-4' type="text"
            value={email} onChange={(event) => setEmail(event.target.value)} required
          />
        </div>

        <div className='w-full mt-10'>
          <label htmlFor='telephone' className='font-Roboto font-bold'>N° de téléphone</label><br />
          <input id='telephone' className='border border-[#BFBFBF] pl-4 rounded-lg w-2/3 h-9 mt-4' type="text"
            value={telephone} onChange={(event) => setTelephone(event.target.value)} required
          />
        </div>

        <div className='w-full flex items-center mt-10'>
          <div className='w-2/3'>
            <label htmlFor='address' className='font-Roboto font-bold'>Site</label><br />
            <select id='address' className='border border-[#BFBFBF] text-xs pl-4 rounded-lg w-full h-9 mt-4'
              defaultValue={"Choisir un lieu de travail"} onChange={(event) => setAddress(event.target.value)} >
              <option>Choisir un lieu de travail</option>
            </select>
          </div>
          <div className='text-xs font-Roboto ml-14 w-1/3 flex-wrap'>Choisissez un lieu de travail parmi ceux renseignés dans vos paramètres.</div>
        </div>

        <div className='flex justify-center mt-10'>
          <button type='submit' className='text-[#FBFBFB] w-36 h-9 text-xs font-Inter bg-black rounded-3xl' 
            onClick={submitForm}>
            Ajouter
          </button>
        </div>
      </form>
    </div>
  )
}