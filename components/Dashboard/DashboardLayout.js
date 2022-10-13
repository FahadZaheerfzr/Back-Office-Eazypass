import Head from 'next/head'
import React, { useState } from 'react'
import Sidebar from './Sidebar/Navbar'
import Topbar from './Topbar/ProfileBar'
import Dashboard from './Mains/Dashboard'
import Collaborators from './Mains/Collaborators'
import Documents from './Mains/Documents'
import Telework from './Mains/Telework'
import Flex from './Mains/Flex'
import Settings from './Mains/Settings'
import Reminders from './Mains/Reminders'

const pageHeadingText = {
  "Résumé": {
    "heading": "Bienvenue à nouveau, Maxime",
    "description": "Voici le résumé de la présence de vos collaborateurs au bureau",
    "icon": "",
    "component": <Dashboard />,
  },

  "Rappels": {
    "heading": "Rappels",
    "description": "Définissez le rythme des rappels pour que vos collaborateurs n’oublient pas leur déclaration",
    "icon": "/Dashboard/Sidebar/bell-black.svg",
    "component": <Reminders />,

  },
  "Collaborateurs": {
    "heading": "Collaborateurs",
    "description": "Ajoutez vos nouveaux collaborateurs et supprimez ceux qui ont quitté l’entreprise",
    "icon": "/Dashboard/Sidebar/user-black.svg",
    "component": <Collaborators />,
  },
  "Documents": {
    "heading": "Documents",
    "description": "Contrôlez les attestations de télétravail de l’assurance habitation de vos collaborateurs",
    "icon": "/Dashboard/Sidebar/checkout-black.svg",
    "component": <Documents />,
  },
  "Télétravail": {
    "heading": "Télétravail",
    "description": "Définissez votre politique de télétravail, par service, par direction,  pour l’ensemble de l’entreprise",
    "icon": "/Dashboard/Sidebar/checkout-black.svg",
    "component": <Telework />,
  },
  "Flex-office": {
    "heading": "Flex-office",
    "description": "Pilotez l’affluence au bureau ainsi que votre nombre de places",
    "icon": "/Dashboard/Sidebar/case-black.svg",
    "component": <Flex />,

  },
  "Paramètres": {
    "heading": "Paramètres",
    "description": "Configurez vos préférences",
    "icon": "/Dashboard/Sidebar/settings-black.svg",
    "component": <Settings />,
  },

}

export default function DashboardLayout(props) {
  const [active, setActive] = useState("Résumé");
  const [visible, setVisible] = useState(false)
  const handleClick = (name) => {
    setActive(name);
  }

  const toggleVisible = () => {
    setVisible(!visible);
  }
  return (

    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <div className='lg:hidden flex text-red-600 h-screen justify-center items-center'>
        Super Admin needs to login through desktop
      </div>
      
      <div className='hidden lg:flex w-full'>
        <div className={`bg-white md:fixed z-40 ${visible?'md:block':'md:hidden'} lg:block md:w-[30%] lg:w-[20%] lg:fixed`}>
          <Sidebar handleClick={handleClick} active={active} />
        </div>
        <div role={"button"} className='h-screen lg:hidden  z-50 flex mt-[40%]' 
        onClick={()=>toggleVisible()}>
                <div className='fixed side-panel'>
                    <div className='side-panel-content'>
                    { visible?
                        "X"
                        :<>
                        <div className=' w-4 h-[2px] bg-white '></div>
                        <div className=' mt-1 w-4 h-[2px] bg-white '></div>
                        <div className=' mt-1 w-4 h-[2px] bg-white '></div>
                        </>
                    }
                    </div>
                </div>
            </div>
        <div className='md:w-[100%] h-screen lg:w-[80%] lg:ml-[20%]'>
          <Topbar name={pageHeadingText[active].heading} description={pageHeadingText[active].description}
            icon={pageHeadingText[active].icon}
          />
          <div className='px-[5%]'>
            {pageHeadingText[active].component}
          </div>

        </div>
      </div>
    </>
  )
}
