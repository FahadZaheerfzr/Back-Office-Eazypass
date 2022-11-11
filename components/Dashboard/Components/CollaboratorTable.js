import React, { useContext } from 'react'
import { CollaboratorContext } from '../../../context/GlobalProvider'


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
 * This component is used to display the collaborators table
 */
export default function Collaborator({toggleVisible}) {
    const {rows} = useContext(CollaboratorContext);
    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8">

                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-center font-Poppins text-xs font-medium text-black sm:pl-6 md:pl-0"
                                        >
                                            Nom, Prénom
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-center font-Poppins text-xs font-medium text-black">
                                            Date d’ajout
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-center font-Poppins text-xs font-medium text-black">
                                            Fonction
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-center font-Poppins text-xs font-medium text-black">
                                            Service
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-center font-Poppins text-xs font-medium text-black">
                                            Télétravail
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-center font-Poppins text-xs font-medium text-black">
                                            Assurance habitation
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-center font-Poppins text-xs font-medium text-black">
                                            Modifier
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {rows.map((row) => (
                                        <tr key={row.id}>
                                            <td className="whitespace-nowrap text-center py-4 pl-4 pr-3 text-xs text-black sm:pl-6 md:pl-0">
                                                {row.nom}
                                            </td>
                                            <td className="whitespace-nowrap text-center py-4 px-3 text-xs text-black">{row.date}</td>
                                            <td className="whitespace-nowrap text-center py-4 px-3 text-xs text-black">{row.fanction}</td>
                                            <td className="whitespace-nowrap text-center py-4 px-3 text-xs text-black">{row.service}</td>
                                            <td className="  text-center py-4 px-3 text-xs text-black">
                                                <div className='flex items-center justify-center  box-shadow-style '>
                                                    <div className={`w-2 h-2 bg-[${teletravail_colors[row.teletravail]}] rounded-full`} 
                                                        style={{background: teletravail_colors[row.teletravail]}}
                                                    />
                                                    <span className='ml-2'>{row.teletravail}</span>
                                                </div>
                                            </td>
                                            <td className="flex items-center justify-center text-center py-4 px-3 text-xs text-black">
                                                <div className=' box-shadow-style flex items-center'>
                                                    <div className={`w-2 h-2 bg-[${assurance_colors[row.assurance]}] rounded-full`} />
                                                    <span className='ml-2'>{row.assurance}</span>
                                                </div>
                                            </td>


                                            
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 md:pr-0">
                                                <div role={"button"} onClick={()=>toggleVisible(row.id)} className="flex" >
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