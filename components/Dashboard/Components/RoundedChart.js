import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip, PolarAngleAxis } from 'recharts';

const data = [
    {
        name: "Marketing",
        "Number of Days in Office": 23,
        fill: '#34C759',
    },
    {
        name: "RH",
        "Number of Days in Office": 18,
        fill: '#FF9500',
    },
    {
        name: "Comptabilité",
        "Number of Days in Office": 15,
        fill: '#347AE2',
    }
];


export default function RoundedChart() {


    return (
        <div className='xl:ml-8 w-[252px] flex flex-col  mt-8 border border-[#E6EDFF] rounded-xl'>

            <div className='mt-8 px-5 flex  items-center'>
                <span className='font-Poppins text-lg font-medium'>Présence / service</span>

                <div className='w-1 h-1 ml-3 bg-black rounded-full' />
                <div className='w-1 h-1 ml-[2px] bg-black rounded-full' />
                <div className='w-1 h-1 ml-[2px] bg-black rounded-full' />
            </div>
            <div className='w-[100%] h-[216px] flex justify-center items-center'>
                <ResponsiveContainer width="100%" height="100%">

                    <RadialBarChart startAngle={90} endAngle={450} cx="50%" cy="50%" innerRadius="40%" outerRadius="80%" barSize={7} data={data}>
                        <PolarAngleAxis type="number" domain={[0, 30]} tick={false} />
                        <RadialBar
                            background
                            clockWise
                            dataKey="Number of Days in Office"
                        />
                        <Tooltip labelFormatter={(index) => data[index].name} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>

            <div className='flex items-center justify-evenly'>
            <div className='w-2 h-2 rounded-full bg-[#279A44]' />
                <span className='font-Poppins text-xs'>Marketing</span>
                <div className='w-2 h-2 rounded-full bg-[#E59523]' />

                <span className='font-Poppins text-xs'>RH</span>
                <div className='w-2 h-2 rounded-full bg-[#347AE2]' />

                <span className='font-Poppins text-xs'>Comptabilité</span>
            </div>
        </div>
    )

}
