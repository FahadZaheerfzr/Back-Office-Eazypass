import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';
import Styles from './Components.module.css'
const data = [
  {
    name: 'Lun',
    attendance: 21.6,
  },
  {
    name: 'Mar',
    attendance: 45.7,
  },
  {
    name: 'Mer',
    attendance: 61.8,
  },
  {
    name: 'Jeu',
    attendance: 22.9,
  },
  {
    name: 'Ven',
    attendance: 41.3,
  },
  {
    name: 'Sam',
    attendance: 68.6,

  },
  {
    name: 'Dim',
    attendance: 28.8,
  },

];

export default function Charts() {
  return (
    <div className='mt-8 lg:w-[742px] border border-[#E6EDFF] rounded-xl '>
    <div className='flex px-5 items-center h-8 mt-8'>
      <span className='font-Poppins font-medium md:text-base lg:text-lg'>Présence moyenne au bureau chaque jour</span>
      <div className='w-2 h-2 mt-1 bg-[#E59523] rounded-full ml-3'>

      </div>
      <span className='text-xs ml-2 mt-1 font-Poppins'>% de collaborateurs présents</span>
    
      <select className={`ml-3 text-xs ${Styles.chartSelect}`} defaultValue={"Ce mois"}>
        <option>Ce mois</option>
      </select>
    </div>
    <ResponsiveContainer width="97%" height={250}>
      <LineChart
        data={data}
        margin={{
          top: 25,
          right: 10,
          left: 10,
          bottom: 25,
        }}
      >
        <CartesianGrid vertical={false} stroke="#E6EDFF" />
        <XAxis stroke='#7C8DB5' axisLine={false} tickLine={false} tickMargin={18.5}  padding={{left:32, right:50}} dataKey="name" />
        <YAxis stroke='#7C8DB5' axisLine={false} tickLine={false} tickMargin={16} tickCount={6}  domain={[0,100]}  />
        <Tooltip />
        <Line type="monotone" dataKey="attendance" stroke="#E59523" strokeWidth={2} activeDot={{r:8}}/>
      </LineChart>
      </ResponsiveContainer>

      </div>
  );

}
