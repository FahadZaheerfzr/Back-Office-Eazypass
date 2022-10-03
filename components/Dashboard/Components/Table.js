import React from 'react'
import Styles from './Components.module.css'

const rows = [
    {
        no: '1',
        id: '#12594',
        date: 'Dec 1, 2021',
        collaborateur: 'Frank Murlo',
        site: '4 rue des indes noires 80440 Boves',
        montant: '€73,83',
        paiement: 'Effectué',
    },
]

export default function Table() {
    return (
        <div className='mt-8 w-full border border-[#E6EDFF] rounded-xl '>
            <div className='flex justify-between px-5 items-center h-8 mt-8'>
                <span className='font-Poppins font-medium md:text-base lg:text-lg'>Indemnité forfaitaire de télétravail</span>


                <select className={`ml-3 text-xs ${Styles.chartSelect}`} defaultValue={"Ce mois"}>
                    <option>Ce mois</option>
                </select>
            </div>

            <div className="px-4 sm:px-6 lg:px-8">

                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left font-Poppins text-xs font-medium text-black sm:pl-6 md:pl-0"
                                        >
                                            No
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left font-Poppins text-xs font-medium text-black">
                                            ID
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left font-Poppins text-xs font-medium text-black">
                                            Date
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left font-Poppins text-xs font-medium text-black">
                                            Collaborateur
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left font-Poppins text-xs font-medium text-black">
                                            Site
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left font-Poppins text-xs font-medium text-black">
                                            Montant
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left font-Poppins text-xs font-medium text-black">
                                            Paiement
                                        </th>

                                        <th scope="col" className="py-3.5 px-3 text-left font-Poppins text-xs font-medium text-black">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {rows.map((row) => (
                                        <tr key={row.no}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-black sm:pl-6 md:pl-0">
                                                {row.no}
                                            </td>
                                            <td className="whitespace-nowrap py-4 px-3 text-xs text-black">{row.id}</td>
                                            <td className="whitespace-nowrap py-4 px-3 text-xs text-black">{row.date}</td>
                                            <td className="whitespace-nowrap py-4 px-3 text-xs text-black">{row.collaborateur}</td>
                                            <td className="whitespace-nowrap py-4 px-3 text-xs text-black">{row.site}</td>
                                            <td className="whitespace-nowrap py-4 px-3 text-xs text-black">{row.montant}</td>
                                            <td className="whitespace-nowrap py-4 px-3 text-xs text-black">
                                                <div className='flex items-center'>
                                                    <div className='w-2 h-2 bg-[#279A44] rounded-full' />
                                                    <span className={`box-shadow-style`}>{row.paiement}</span>
                                                </div>
                                            </td>



                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 md:pr-0">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900 flex">
                                                    <div className='w-1 h-1 ml-3 bg-black rounded-full'></div>
                                                    <div className='w-1 h-1 ml-[2px] bg-black rounded-full'></div>
                                                    <div className='w-1 h-1 ml-[2px] bg-black rounded-full'></div>
                                                </a>
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
