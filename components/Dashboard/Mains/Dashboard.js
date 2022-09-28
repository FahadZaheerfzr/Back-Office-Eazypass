import React from 'react'
import Stats from '../Components/Stats'
import Styles from './Dashboard.module.css'

const stats = [
    {
        "id":0,
        "figure":103,
        "icon":"/Dashboard/users.svg",
        "description":"collaborateurs",
        "index":10.2,
        "profit":1.01
    },
    {
        "id":1,
        "figure":"37,08",
        "icon":"/Dashboard/case.svg",
        "description":"équivalents TP sur site",
        "index":3.1,
        "profit":0.49
    },
    {
        "id":2,
        "figure":75,
        "icon":"/Dashboard/completed.svg",
        "description":"places au bureau",
        "index":2.00,
        "profit":-0.91
    },
    {
        "id":3,
        "figure":"3,2",
        "icon":"/Dashboard/return.svg",
        "description":"jours TT / semaine",
        "index":0.2,
        "profit":1.51
    },
]

export default function Dashboard() {
    return (
        <div className='w-full'>
            <div className='flex justify-end'>
                <select defaultValue={'Toute l’entreprise'} className={`${Styles.customSelect} mr-5`}>
                    <option>Toute l’entreprise</option>
                </select>
                <select defaultValue={'7 derniers jours'}  className={`${Styles.customSelect}`}>
                    <option >7 derniers jours</option>
                </select>
            </div>

            <div className='mt-5 flex justify-evenly rounded-xl border border-[#E6EDFF] p-5'>
                {stats.map(stat=>(
                    <Stats key={stat.id} figure={stat.figure} description={stat.description}
                        icon={stat.icon} index={stat.index} profit={stat.profit} border={stat.id==3?false:true}
                    />
                ))}
            </div>
        </div>
    )
}
