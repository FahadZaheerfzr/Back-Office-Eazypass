import Image from 'next/image'
import IconText from './IconText'
import React from 'react'
import Styles from './Sidebar.module.css'

const nav_items = [
    {
        "id": 0,
        "name": "Résumé",
        "icon-active": "/Dashboard/Sidebar/chart.svg",
        "icon": "/Dashboard/Sidebar/chart-dull.svg",
        "unread":0,
    },
    {
        "id": 1,
        "name": "Télétravail",
        "icon-active": "/Dashboard/Sidebar/case-black.svg",
        "icon": "/Dashboard/Sidebar/case.svg",
        "unread":0,
    },
    {
        "id": 6,
        "name": "Rappels",
        "icon-active": "/Dashboard/Sidebar/bell-black.svg",
        "icon": "/Dashboard/Sidebar/bell-black.svg",
        "unread":0,
    },
    {
        "id": 2,
        "name": "Collaborateurs",
        "icon-active": "/Dashboard/Sidebar/user-black.svg",
        "icon": "/Dashboard/Sidebar/user.svg",
        "unread":0,
    },
    
    {
        "id": 3,
        "name": "Flex-office",
        "icon-active": "/Dashboard/Sidebar/flex.png",
        "icon": "/Dashboard/Sidebar/flex-dull.png",
        "unread":0,
    },
    {
        "id": 4,
        "name": "Documents",
        "icon-active": "/Dashboard/Sidebar/checkout-black.svg",
        "icon": "/Dashboard/Sidebar/checkout.svg",
        "unread":2,
    },
    {
        "id": 5,
        "name": "Paramètres",
        "icon-active": "/Dashboard/Sidebar/settings-black.svg",
        "icon": "/Dashboard/Sidebar/settings.svg",
        "unread":0,
    },
]
export default function Sidebar({handleClick, active}) {
    
    return (
        <div className='h-screen w-full flex flex-col justify-between'>
            <div>
                <Image src={'/Dashboard/eazy-pass-header.svg'} layout={'responsive'} width={264} height={63} />

            </div>

            <div className={`${Styles.container}`}>
                <div className={`flex flex-col justify-between`}>
                {nav_items.map( item => (
                    <IconText  key={item.id} name={item.name} icon={item.name===active?item['icon-active']:item.icon} clickEvent={handleClick}          
                     unread={item.unread} active={item.name===active?true:false} />
                )
                )} 
                </div>

            </div>

            <div>

                <Image src={'/Dashboard/eazy-pass-footer.svg'} layout={'responsive'} width={264} height={48} />
            </div>

        </div>
    )
}
