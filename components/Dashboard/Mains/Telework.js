import dynamic from "next/dynamic";

import Image from 'next/image';
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from 'react'
import { ManagerContext } from "../../../context/ManagerProvider";
import AvatarTelework from "../Components/AvatarTelework";
import RangeSlider from '../Components/RangeSlider'
import Styles from './Dashboard.module.css'

const DynamicTeleworkTable = dynamic(() => import('../Components/TeleworkTable'), {
    ssr: false,
});
const DesktopContainer = dynamic(
    () => import("../../Drag/DesktopContainer"),
    { ssr: false }
);
export default function Telework() {
    const [concerns, setConcerns] = useState([
        {
            tag: "Toute l’entreprise",
            color: "#347AE2",
        }
    ]);

    const [sauf, setSauf] = useState([
        {
            tag: "Commercial",
            color: "#E69523",
        },
        {
            tag: "Marketing",
            color: "#279A44",
        },
        {
            tag: "Comptabilité",
            color: "#7C8DB5",
        },
    ]);
    const [visible, setVisible] = useState(false);
    const [tag, setTag] = useState("");
    const [color, setColor] = useState("#347AE2");
    const [tempfixed, setTempFixed] = useState(true);
    const [saufForm, setSaufForm] = useState(false);
    const { fixed } = useContext(ManagerContext);

    const [percentValue, setPercentValue] = useState(20);
    const router = useRouter();
    const decreaseValue = () => {
        if (percentValue > 0) {
            setPercentValue(percentValue - 10);
        }
    }

    const increaseValue = () => {
        if (percentValue < 100) {
            setPercentValue(percentValue + 10);
        }
    }

    const addConcern = () => {

        if (!saufForm) {
            setConcerns([...concerns, {
                tag: tag,
                color: color,
            }]);
        } else {
            setSauf([...sauf, {
                tag: tag,
                color: color,
            }]);
        }
        setVisible(false);
    }

    useEffect(() => {

        const keyDownHandler = event => {


            if (event.key === 'Escape') {
                event.preventDefault();

                // 👇️ your logic here
                setVisible(false);
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        // 👇️ clean up event listener
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };

    }, []);

    if (router.pathname === '/manager') {
        return (
            <div className="mt-6 w-full">
                <div className="box-shadow-style w-full border border-[#E6E5E5]">
                    <div className="mt-2 flex items-center pl-3">
                        <span className="font-Poppins font-medium mr-3">
                            Demandes exceptionnelles de télétravail
                        </span>
                        <div className="w-5 h-5 flex justify-center items-center bg-[#A6231C] rounded-full text-white font-Poppins text-xs" >
                            4
                        </div>
                    </div>

                    <div className="box-shadow-style w-full mt-7">
                        <div className="flex w-full items-center mt-6">
                            <div className="w-[25%] flex justify-between items-center px-[2%]">
                                <Image src={"/Dashboard/Telework/avatar.svg"} width={76} height={76} />
                                <span className="font-Poppins font-medium">
                                    Estelle Darcy <br />
                                    Copywriter
                                </span>
                            </div>
                            <div className="w-[35%] flex flex-col justify-center items-center px-[2%]">
                                <span className="font-Poppins font-medium">
                                    Jeudi 22 sept. 2022
                                </span>
                                <span className="font-Poppins text-sm mt-4">
                                    "Je dois exceptionnellement aller chercher mes enfants à 15h, ils ont un spectacle de danse...."
                                    <span className=" underline ml-6 text-xs">
                                        Voir plus
                                    </span>
                                </span>

                            </div>

                            <div className="w-[40%] flex justify-center items-center">
                                <div>
                                    <Image src={"/Dashboard/Telework/location.png"} className="z-10 relative" width={32} height={32} />
                                </div>
                                <AvatarTelework />
                                <span className="ml-3 font-medium text-lg font-Inter">
                                    seront au bureau
                                </span>

                            </div>
                        </div>

                        <div className="flex justify-end mb-3">
                            <div className="flex justify-center w-10 h-10 items-center rounded-full border-2 border-[#A6231C]">
                                <div className="w-4 h-0 border border-[#A6231C]" />
                            </div>

                            <div className="flex justify-center w-10 h-10 items-center rounded-full border-4 border-[#00b90f] ml-5 text-[#00b90f] text-2xl font-bold">
                                ✓
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-7 mb-5">
                        <span className="font-Poppins font-medium mr-2">
                            Voir plus (3 autres demandes)
                        </span>
                        <Image src={"/Dashboard/Telework/chevron-down.svg"} width={11} height={11} />

                    </div>
                </div>

                {
                    fixed &&
                    <div className="border border-[#E6E5E5] mt-8 pl-5 mx-2 rounded-xl">
                        <div className="mt-5 mb-6">
                            <span className="font-Poppins font-medium text-xl">
                                Définition du planning hebdomadaire
                            </span>
                        </div>

                        <div className="flex w-full mt-1">
                            <div className="w-[45%]">
                                <div className='big-box rounded-xl  flex items-center justify-between pl-4 pr-8'>
                                    <div className='flex flex-col my-2'>
                                        <span className='font-Poppins font-medium'>
                                            Jauge <span className='text-[#347AE2]'>minimale</span>  de présence / jour
                                        </span>
                                        <span className='font-Poppins text-sm text-[#7C8DB5] mt-2'>
                                            Nombre minimum de coillaborateurs <br /> devant être présents au bureau.
                                        </span>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='font-Poppins font-semibold text-4xl text-[#347AE2] mx-2'>
                                            4 <span className="text-base">pers.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[45%] ml-[5%]">
                                <div className='big-box rounded-xl  flex items-center justify-between pl-4 pr-8'>
                                    <div className='flex flex-col my-2'>
                                        <span className='font-Poppins font-medium'>
                                            Jauge <span className='text-[#347AE2]'>maximale</span>  de présence / jour
                                        </span>
                                        <span className='font-Poppins text-sm text-[#7C8DB5]  mt-2'>
                                            Nombre maximum de coillaborateurs <br /> devant être présents au bureau.
                                        </span>
                                    </div>
                                    <div className='flex justify-center items-center h-full'>
                                        <Image src={"/Dashboard/Telework/infinite.svg"} width={85} height={85} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full mt-7 mb-6">
                            <div className='big-box rounded-xl w-[45%] pl-4 pr-8'>
                                <div className='mt-4 mb-7'>
                                    <span className='font-Poppins font-medium'>Nombre de jours en télétravail /semaine</span>
                                </div>

                                <div className='mt-10 ml-6 mb-6 pointer-events-none'>
                                    <RangeSlider
                                        initialMin={1}
                                        initialMax={3}
                                        min={0}
                                        max={6}
                                        step={1}
                                        priceCap={2}
                                        disabled={true}
                                    />
                                </div>
                            </div>

                            <div className='big-box rounded-xl w-[45%] pl-4 pr-8 ml-[5%]'>
                                <div className='mt-4 mb-7'>
                                    <span className='font-Poppins font-medium'>Nombre de jours en télétravail /semaine</span>
                                </div>

                                <div className='mt-8 ml-6 mb-6 pointer-events-none'>
                                    <span className="font-Poppins md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#347AE2]">
                                        13 <span className="font-medium md:text-sm lg:text-base text-black">places disponibles pour </span> 13 <span className="font-medium text-base text-black">personnes</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="box-shadow-style mx-4 mt-8">
                    {fixed ? null :
                        <div className="flex w-full pt-2 pl-3">
                            <div className=" w-[55%] flex items-center ">
                                <span className="font-Poppins text-xl font-medium mr-3">
                                    Validation du planning hebdomadaire
                                </span>
                                <div className="w-5 h-5 flex justify-center items-center bg-[#A6231C] rounded-full text-white font-Poppins text-xs" >
                                    1
                                </div>
                            </div>
                            <div className=" w-[45%] flex items-center ">
                                <div className="box-shadow-style bg-[#279A44]">
                                    <span className="font-Poppins text-xs text-white">
                                        Valider le planinng
                                    </span>
                                </div>
                                <div className="box-shadow-style bg-[#A6231C] ml-5">
                                    <span className="font-Poppins text-xs text-white">
                                        Refuser le planning
                                    </span>
                                </div>

                            </div>
                        </div>
                    }
                    <div className="mt-2">
                        <DesktopContainer option={false} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {visible &&
                <div className={` absolute  w-2/3 ml-[2%]  h-2/3 backdrop-blur-sm flex items-center justify-center z-10`}>
                    <div className="w-1/2 box-shadow-style bg-white h-full">
                        <div className='flex justify-center text-xl font-semibold items-center my-10 font-Poppins'>
                            Add Collaborateurs concernés
                        </div>
                        <div className='mt-4 ml-2 w-2/3 flex flex-col'>
                            <label htmlFor='tag' className='font-Poppins'>Tag</label>
                            <input id='tag' type={"text"} className="border-2 border-[#E5E5E5] rounded-[7px] h-9 mt-4 p-2"
                                onChange={event => (setTag(event.target.value))} />
                        </div>
                        <div className='mt-4 ml-2 w-2/3 flex flex-col'>
                            <label htmlFor='color' className='font-Poppins'>Color</label>
                            <input id='color' type={"color"} className="border-2 border-[#E5E5E5] rounded-[7px] h-9 mt-4" value={color}
                                onChange={event => (setColor(event.target.value))} />

                        </div>
                        <div className='flex justify-center items-center mt-16'>
                            <button className='bg-[#47A097] w-1/2 text-white font-Poppins font-medium px-4 py-2 rounded-[7px] mr-4'
                                onClick={addConcern}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            }
            <div className={`mt-11 ${Styles.customHeight} py-5 border border-[#E5E5E5] rounded-xl overflow-scroll`}>
                <div className='flex items-center pl-5 pr-10 justify-between'>
                    <span className='font-Poppins text-xl font-medium'>Votre politique de télétravail</span>
                    <span className='font-Poppins text-xs box-shadow-style'>Sauvegarder</span>
                </div>

                <div className='mt-8 big-box border flex flex-col mx-11 pt-3  px-4 border-[#E5E5E5] rounded-[10px]'>
                    <span className='font-Poppins font-medium'>
                        Collaborateurs concernés
                    </span>
                    <div className='flex justify-between mt-1'>
                        <div className="flex">
                            {
                                concerns.map((concern, index) => (
                                    <div key={index} className={`box-shadow-style flex mr-5 justify-center items-center bg-[${concern.color}]`}
                                        style={{ backgroundColor: concern.color }}>
                                        <div className='w-2 h-2 bg-[#E6EDFF] rounded-full ' />
                                        <span className='font-Poppins text-xs text-white ml-2'>{concern.tag}</span>
                                    </div>
                                ))
                            }

                        </div>
                        <div className='box-shadow-style flex cursor-pointer justify-center items-center bg-[#E6EDFF]'
                            onClick={() =>{setSaufForm(false); setVisible(!visible)}}>
                            <span className='font-Poppins text-xs'>Modifier</span>
                        </div>
                    </div>
                    <span className='font-Poppins font-medium mt-3'>
                        Sauf
                    </span>

                    <div className='flex justify-between mt-1 mb-5'>
                        <div className='flex'>
                            {sauf.map((sau, index) => (
                                <div key={index} className={`box-shadow-style mr-5  flex justify-center items-center bg-[${sau.color}]`}
                                style={{ backgroundColor: sau.color }}>
                                    <div className='w-2 h-2 bg-[#E6EDFF] rounded-full ' />
                                    <span className='font-Poppins text-xs text-white ml-2'>{sau.tag}</span>
                                </div>
                            ))}



                        </div>

                        <div className='box-shadow-style flex justify-center items-center bg-[#E6EDFF]'
                        onClick={() => {setSaufForm(true); setVisible(!visible)}}>
                            <span className='font-Poppins text-xs'>Modifier</span>
                        </div>
                    </div>



                </div>

                <div className='mt-5 px-10 flex justify-between '>
                    <div className='big-box rounded-xl w-[45%] flex items-center justify-between pl-4 pr-8'>
                        <div className='flex flex-col my-2'>
                            <span className='font-Poppins font-medium'>
                                Jours libres
                            </span>
                            <span className='font-Poppins text-sm text-[#7C8DB5] mt-2'>
                                Vos collaborateurs choisissent leurs jours en<br /> télétravail
                            </span>
                        </div>
                        <div className=''>
                            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" value="" checked={tempfixed ? false : true} id="default-toggle" className="sr-only peer"
                                    onChange={() => setTempFixed(!tempfixed)}
                                />
                                <div className="w-11 h-6 bg-[#737272] peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-[#6FCE0F]" />
                            </label>
                        </div>
                    </div>

                    <div className='big-box rounded-xl w-[45%] flex items-center justify-between pl-4 pr-8'>
                        <div className='flex flex-col my-2'>
                            <span className='font-Poppins font-medium'>
                                Jours fixes
                            </span>
                            <span className='font-Poppins text-sm text-[#7C8DB5] mt-2'>
                                Les jours en télétravail de vos collaborateurs <br /> sont définis au préalable et fixes
                            </span>
                        </div>
                        <div className=''>
                            <label htmlFor="default-toggle2" className="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" value="" checked={tempfixed ? true : false} id="default-toggle2" className="sr-only peer"
                                    onChange={() => setTempFixed(!tempfixed)}
                                />
                                <div className="w-11 h-6 bg-[#737272] peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-[#6FCE0F]" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='mt-10 px-10 flex'>
                    <div className='big-box rounded-xl w-[45%] pl-4 pr-8'>
                        <div className='mt-2 mb-7'>
                            <span className='font-Poppins font-medium'>Nombre de jours en télétravail /semaine</span>
                        </div>

                        <div className='flex justify-between'>
                            <span >Limiter le nombre de jours en télétravail</span>

                            <label htmlFor="default-toggle1" className="inline-flex relative cursor-pointer">
                                <input type="checkbox" value="" defaultChecked id="default-toggle1" className="sr-only peer" />
                                <div className="w-11 h-6 bg-[#737272] peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-[#6FCE0F]" />
                            </label>
                        </div>

                        <div className='mt-16 ml-6 mb-16'>
                            <RangeSlider
                                initialMin={1}
                                initialMax={3}
                                min={0}
                                max={6}
                                step={1}
                                priceCap={2}
                            />
                        </div>
                    </div>
                    <div className='w-[52%] ml-[3%]'>
                        <div className='big-box rounded-xl  flex items-center justify-between pl-4 pr-8'>
                            <div className='flex flex-col my-2'>
                                <span className='font-Poppins font-medium'>
                                    Jauge <span className='text-[#347AE2]'>minimale</span>  de présence / jour
                                </span>
                                <span className='font-Poppins text-sm text-[#7C8DB5] mt-2'>
                                    Nombre minimum de coillaborateurs <br /> devant être présents au bureau.
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-5 h-5 rounded-full bg-[#347AE2] flex justify-center items-center text-white cursor-pointer'
                                    onClick={decreaseValue}
                                >
                                    <span className='font-Poppins font-semibold'>-</span>
                                </div>
                                <span className='font-Poppins font-semibold text-4xl text-[#347AE2] mx-2'>
                                    {percentValue == 100 ?
                                        <Image src={"/Dashboard/Telework/infinite.svg"} width={100} height={100} />
                                        : percentValue + "%"}
                                </span>
                                <div className='w-5 h-5 rounded-full bg-[#347AE2] flex justify-center items-center text-white cursor-pointer'
                                    onClick={increaseValue}
                                >
                                    <span className='font-Poppins font-semibold'>+</span>
                                </div>
                            </div>
                        </div>
                        <div className='big-box mt-10 rounded-xl  flex items-center justify-between pl-4 pr-8'>
                            <div className='flex flex-col my-2'>
                                <span className='font-Poppins font-medium'>
                                    Jauge <span className='text-[#347AE2]'>maximale</span>  de présence / jour
                                </span>
                                <span className='font-Poppins text-sm text-[#7C8DB5]  mt-2'>
                                    Nombre maximum de coillaborateurs <br /> devant être présents au bureau.
                                </span>
                            </div>
                            <div className='flex justify-center items-center h-full'>
                                <Image src={"/Dashboard/Telework/infinite.svg"} width={100} height={100} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mt-12'>
                    <button className='box-shadow-style font-Poppins font-medium text-xl'>Sauvegarder</button>
                    <span className='font-Poppins text-sm mt-6'>
                        Dernière sauvegarde le 11 août 2022 à 18h54
                    </span>
                </div>

                <div className='flex flex-col items-start px-[5%] mt-16'>
                    <Image src={"/Dashboard/Sidebar/checkout-black.svg"} width={24} height={24} />
                    <span className='font-Poppins font-medium text-xl mt-1'>
                        Récapitulatif de vos paramétrages
                    </span>
                </div>
                <div className='border border-[#E6EDFF] mx-[3%] rounded-xl mt-6'>
                    <DynamicTeleworkTable />
                </div>
            </div>
        </>
    )
}
