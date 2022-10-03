import React from 'react'
import Document from '../Components/Document'

const documents = [
    {
        id:0,
        image:"/Dashboard/Documents/Verified.webp",
        heading: "Attestations validées",
        description: "Dernière consultation ",
        unread: 0,
    },
    {
        id:1,
        image:"/Dashboard/Documents/Pending.jpeg",
        heading: "Attestations en attente",
        description: "Vérifiez les documents transmis",
        unread: 2,
    },
    {
        id:2,
        image:"/Dashboard/Documents/Refused.jpeg",
        heading: "Attestations refusées",
        description: "Dernière consultation ",
        unread: 0,
    },
]

export default function Documents() {

    return (
        <div className='w-full h-[70vh] flex justify-evenly items-center'>
            {documents.map(document=>(
                <Document key={document.id} heading={document.heading}
                    description={document.description} image={document.image}
                    unread={document.unread}
                />
            ))}
        </div>
    )
}
