import React from 'react'


const div_colors = [
    "#279A44", "#E59523",
    "#A6231C", "#0BC7F0",
    "#7C8DB5", "#347AE2",
    "#000", "#772AD8",
]

const teletravail_colors = {
    "Fixe 2 jours/semaine": "#347AE2",
    "Télétravail ponctuel": "#E59523",
    "Libre 3 jours/ semaine": "#7C8DB5",
    "Libre et illimité": "#E6EDFF",
}

const rows = [
    {
        id: 0,
        collaborate: [
            "Commercial", "Marketing", "Comptabilité"
        ],
        teletravail: "Fixe 2 jours/semaine",
        date: "Dec 1, 2022",
    },
    {
        id: 1,
        collaborate: [
            "Juridique", "Services généraux", "Ressources humaines"
        ],
        teletravail: "Libre 3 jours/ semaine",
        date: "Dec 3, 2022",
    },
    {
        id: 2,
        collaborate: [
            "Financier", "Innovation", "Communication"
        ],
        teletravail: "Télétravail ponctuel",
        date: "Dec 3, 2022",
    },
    {
        id: 3,
        collaborate: [
            "Direction et managers"
        ],
        teletravail: "Libre et illimité",
        date: "Dec 3, 2022",
    },

]
export default function TeleworkTable() {

    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8">

                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-[#E6EDFF]">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left font-Poppins text-xs font-medium text-black sm:pl-6 md:pl-0"
                                        >
                                            Collaborateurs concernés
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left font-Poppins text-xs font-medium text-black">
                                            Télétravail
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left font-Poppins text-xs font-medium text-black">
                                            Date d’ajout
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-right font-Poppins text-xs font-medium text-black">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#E6EDFF]">
                                    {rows.map((row) => (
                                        <tr key={row.id}>
                                            <td className="whitespace-nowrap text-center py-4 pl-4 pr-3 text-xs text-black sm:pl-6 md:pl-0">
                                                <div className='flex'>
                                                    {row.collaborate.map(item => (
                                                        <div key={row.collaborate.indexOf(item)} className={`box-shadow-style mr-6 flex justify-center items-center`}
                                                        style={{ background: div_colors[Math.floor(Math.random() * 8)] }}>
                                                                <div className='w-2 h-2 bg-[#E6EDFF] rounded-full' />
                                                                <span className='font-Poppins text-xs text-white ml-2'>
                                                                    {item}
                                                                </span>
                                                        </div>
                                                    )
                                                    )}
                                                </div>
                                            </td>

                                            <td className="  text-center py-4 px-3 text-xs text-black">
                                                <div className='flex items-center justify-center  box-shadow-style '>
                                                    <div className={`w-2 h-2 bg-[${teletravail_colors[row.teletravail]}] rounded-full`}
                                                        style={{ background: teletravail_colors[row.teletravail] }}
                                                    />
                                                    <span className='ml-2'>{row.teletravail}</span>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap text-left py-4 px-3 text-xs text-black">{row.date}</td>




                                            <td role={"button"} className="relative whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 md:pr-0">
                                                <div className="flex justify-center" >
                                                    <div className='w-1 h-1 ml-3 bg-black rounded-full' />
                                                    <div className='w-1 h-1 ml-[2px] bg-black rounded-full' />
                                                    <div className='w-1 h-1 ml-[2px] bg-black rounded-full' />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}