import Image from 'next/image'
import React, { useState } from 'react'
import NotificationBox from '../Components/NotificationBox'
import Styles from './Dashboard.module.css'

const notification_options = [
  {
    id: 1,
    color: "#347AE2",
  },
  {
    id: 2,
    color: "#E59523",
  },
  {
    id: 3,
    color: "#279A44",
  },
]

const ratio = [
  {
    id:1,
    title:'Intense - 2 rappels / jour jusqu’au 1er jour non déclaré',
    icon: "/Dashboard/Notifications/intense.svg",
  },
  {
    id:2,
    title:'Normal - 1 rappel / jour jusqu’au 1er jour non déclaré',
    icon: "/Dashboard/Notifications/normal.svg",
  },
]

export default function Reminders() {
  const [active, setActive] = useState(0);
  const [apps, setApps] = useState([
    {
      id: 1,
      title: "Par email",
      icon: "/Dashboard/Notifications/email.svg",
      checked:true,
    },
    {
      id: 2,
      title: "Application",
      icon: "/Dashboard/Notifications/app.svg",
      checked:true,
    },
    {
      id: 3,
      title: "Teams",
      icon: "/Dashboard/Notifications/teams.svg",
      checked:false,
    },
    {
      id: 4,
      title: "Agenda outlook",
      icon: "/Dashboard/Notifications/outlook.svg",
      checked:false,
    },
  ]);

  
  const [ratioSelect, setRatioSelect] = useState(1);

  const myFunction = (event, id) => {
    event.preventDefault();
    setActive(id);
  }


  const handleCheckRatio = (event, index)=>{
      let newArr = [...ratio];
      newArr[index].checked = event.target.checked;
      setRatio(newArr);
  }
  return (
    <div className='mt-7'>
      <div className={`${Styles.remindersBoxShadow} pl-4 pb-9`}>
        <div className='mt-3 '>
          <span className='font-Poppins font-medium'>
            Rythme des déclarations
          </span>
        </div>

        <div className='flex w-full justify-between mt-5'>
          {notification_options.map(option => (
            <NotificationBox key={option.id} id={option.id} color={option.color} myFunction={myFunction} active={option.id === active ? true : false}
              enabled={active > 0 ? true : false}
            />
          ))
          }
        </div>
      </div>

      <div className='flex mt-9'>
        <div className={`${Styles.remindersBoxShadow} w-[45%] pl-4 pb-6`}>
          <div className='mt-3'>
            <span className='font-Poppins font-medium'>
              Notifications
            </span>
          </div>

          <div className='grid grid-cols-2 gap-4 mt-4'>
            {apps.map((app,index) => (
              <div key={app.id} className='flex items-center'>
                <input className='lg:w-[20px] lg:h-[20px] xl:w-[22px] xl:h-[22px]' type={"checkbox"} defaultChecked={app.checked}
                  onChange={(event)=>handleCheck(event,index)}
                 />
                <div className={`flex lg:h-7 lg:w-7 xl:h-8 xl:w-8 justify-center items-center rounded-full`}
                style={app.checked?{backgroundColor:'#0C79FE'}:{backgroundColor:'#e6ebfd'}}
                >
                  <Image src={app.icon} width={45} height={50} layout={"fixed"} />
                </div>
                <span className='font-Poppins ml-3 lg:text-sm xl:text-base'>
                  {app.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={`${Styles.remindersBoxShadow} ml-[3%] w-[52%] pl-4 pb-6`}>
          <div className='mt-3'>
            <span className='font-Poppins font-medium'>
            Mode de rappel
            </span>
          </div>

          <div className=''>
          {ratio.map((item) => (
              <div key={item.id} className='flex items-center mt-4'>
                <input className='lg:w-[20px] lg:h-[20px] xl:w-[22px] xl:h-[22px]' type={"checkbox"} checked={ratioSelect===item.id}
                  onChange={()=>setRatioSelect(item.id)}
                 />
                <div className={`flex lg:h-7 lg:w-7 xl:h-8 xl:w-8 justify-center items-center rounded-full`}
                style={item.id===ratioSelect?{backgroundColor:'#0C79FE'}:{backgroundColor:'#e6ebfd'}}
                >
                  <Image src={item.icon} width={45} height={50} layout={"fixed"} />
                </div>
                <span className='font-Poppins ml-3 lg:text-sm xl:text-base'>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
