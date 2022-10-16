import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { CollaboratorProvider } from '../../../context/GlobalProvider';
import AddCollaborator from '../Components/AddCollaborator';
import CollaboratorTable from '../Components/CollaboratorTable'
import EditCollaborator from '../Components/EditCollaborator';

export default function Collaborators() {
    const [visible, setVisible] = useState(false);
    const [visibleForm, setVisibleForm] = useState(false);
    const [selectedRow, setSelectedRow] = useState();

    const toggleVisible = (id) => {
        setVisible(!visible);
        setVisibleForm(false);
        setSelectedRow(id);
    }

    const toggleVisibleForm = () => {
        setVisibleForm(!visibleForm);
        setVisible(false);
    }

    useEffect(() => {

        const keyDownHandler = event => {
            

            if (event.key === 'Escape') {
                event.preventDefault();

                // 👇️ your logic here
                setVisible(false);
                setVisibleForm(false);
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        // 👇️ clean up event listener
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };

    }, []);
    return (
        <CollaboratorProvider>

            {visibleForm &&
                <div className='absolute z-10  -mt-36 w-2/3 ml-[2%]'>
                    <AddCollaborator toggleVisible={toggleVisibleForm} />
                </div>
            }
            {visible &&
                <div className='absolute z-10  -mt-36 w-2/3 ml-[2%]'>
                    <EditCollaborator toggleVisible={toggleVisible} collaborator={selectedRow} />
                </div>
            }
            <div className='mt-9 p-5 w-full border border-[#E6EDFF] rounded-xl '>
                <div className='flex justify-between items-center'>
                    <span className={`font-Poppins font-medium text-xl`}>
                        Listing
                    </span>
                    <span className={`font-Poppins text-xs box-shadow-style cursor-pointer hover:bg-[#47A097] hover:text-white`}
                        onClick={toggleVisibleForm}>
                        Ajouter un nouveau collaborateur
                    </span>
                </div>

                <div className='mt-7 bg-black w-9 h-6 rounded-2xl flex justify-center items-center'>
                    <span className='font-Poppins font-medium text-white'>
                        103
                    </span>
                </div>

                <div className='mt-7 w-9 flex flex-col justify-center items-center'>
                    <div>
                        <Image src={'/Dashboard/Home/magnifying_glass.svg'} layout={"fixed"} width={32} height={32} />
                    </div>
                    <span className=' text-[#373737] text-xs font-Roboto'>
                        Search
                    </span>
                </div>

                <div className='w-full'>
                    <CollaboratorTable toggleVisible={toggleVisible} />
                </div>
            </div>


        </CollaboratorProvider>
    )
}
