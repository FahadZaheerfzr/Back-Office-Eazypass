import Head from 'next/head'
import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Topbar from './TopBar/Topbar'
import Dashboard from './Mains/Dashboard'

const pageHeadingText = {
  "Résumé": {
    "heading": "Bienvenue à nouveau, Maxime",
    "description": "Voici le résumé de la présence de vos collaborateurs au bureau",
    "icon": ""
  },

  "Rappels": {
    "heading": "Rappels",
    "description": "Définissez le rythme des rappels pour que vos collaborateurs n’oublient pas leur déclaration",
    "icon": "/Dashboard/Sidebar/bell-black.svg"

  },
  "Collaborateurs": {
    "heading": "Collaborateurs",
    "description": "Ajoutez vos nouveaux collaborateurs et supprimez ceux qui ont quitté l’entreprise",
    "icon": "/Dashboard/Sidebar/user-black.svg"
  },
  "Documents": {
    "heading": "Documents",
    "description": "Contrôlez les attestations de télétravail de l’assurance habitation de vos collaborateurs",
    "icon": "/Dashboard/Sidebar/checkout-black.svg",
  },
  "Télétravail": {
    "heading": "Télétravail",
    "description": "Définissez votre politique de télétravail, par service, par direction,  pour l’ensemble de l’entreprise",
    "icon": "/Dashboard/Sidebar/checkout-black.svg",
  },
  "Flex-office": {
    "heading": "Flex-office",
    "description": "Pilotez l’affluence au bureau ainsi que votre nombre de places",
    "icon": "/Dashboard/Sidebar/case-black.svg",
  },
  "Paramètres": {
    "heading": "Paramètres",
    "description": "Configurez vos préférences",
    "icon": "/Dashboard/Sidebar/settings-black.svg",
  },

}

export default function DashboardLayout(props) {
  const [active, setActive] = useState("Résumé");

  const handleClick = (name) => {
    setActive(name);
  }
  return (

    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className='w-full flex'>
        <div className='w-[20%]'>
          <Sidebar handleClick={handleClick} active={active} />
        </div>
        <div className='w-[80%] '>
          <Topbar name={pageHeadingText[active].heading} description={pageHeadingText[active].description}
            icon={pageHeadingText[active].icon}
          />
          <div className='px-[5%]'>
            <Dashboard />
          </div>

        </div>
      </div>
    </>
  )
}
