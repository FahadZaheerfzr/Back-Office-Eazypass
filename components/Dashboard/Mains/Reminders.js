import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import NotificationBox from '../Components/NotificationBox'
import ReminderTable from '../Components/ReminderTable'
import Styles from './Dashboard.module.css'
import SendWarning from '../Components/SendWarning';

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
    id: 1,
    title: 'Intense - 2 rappels / jour jusqu’au 1er jour non déclaré',
    icon: "/Dashboard/Notifications/intense.svg",
  },
  {
    id: 2,
    title: 'Normal - 1 rappel / jour jusqu’au 1er jour non déclaré',
    icon: "/Dashboard/Notifications/normal.svg",
  },
]

const triggers = [
  {
    id: 1,
    title: "Déclaration en amont",
    description: "Le planning doit être déclaré au plus tard le dernier jour ouvré de la semaine ou du mois précédents",
    icon: "/Dashboard/Notifications/backward.png",
    additional: true,
  },
  {
    id: 2,
    title: "Déclaration a posteriori",
    description: "Le planning doit être déclaré au plus tard le dernier jour ouvré de la semaine ou du mois en cours",
    icon: "/Dashboard/Notifications/forward.png",
    additional: false,
  },
]

export default function Reminders() {
  const [active, setActive] = useState(0);
  const [apps, setApps] = useState([
    {
      id: 1,
      title: "Par email",
      icon: "/Dashboard/Notifications/email.svg",
      checked: true,
    },
    {
      id: 2,
      title: "Application",
      icon: "/Dashboard/Notifications/app.svg",
      checked: true,
    },
    {
      id: 3,
      title: "Teams",
      icon: "/Dashboard/Notifications/teams.svg",
      checked: false,
    },
    {
      id: 4,
      title: "Agenda outlook",
      icon: "/Dashboard/Notifications/outlook.svg",
      checked: false,
    },
  ]);


  const [ratioSelect, setRatioSelect] = useState(1);
  const [triggerSelect, setTriggerSelect] = useState(1);
  const [visible, setVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState();

  const toggleVisible = (id) => {
    setVisible(!visible);
    setSelectedRow(id);
  }

  const myFunction = (event, id) => {
    event.preventDefault();
    setActive(id);
  }


  const handleCheck = (event, index) => {
    let newArr = [...apps];
    newArr[index].checked = event.target.checked;
    setApps(newArr);
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [visible])


  return (
    <>

      {visible &&
        <div className='absolute z-10  -mt-36 w-2/3 ml-[2%]'>
          <SendWarning toggleVisible={toggleVisible} collaborator={selectedRow} />
        </div>
      }
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
              {apps.map((app, index) => (
                <div key={app.id} className='flex items-center'>
                  <input className='lg:w-[20px] lg:h-[20px] xl:w-[22px] xl:h-[22px]' type={"checkbox"} defaultChecked={app.checked}
                    onChange={(event) => handleCheck(event, index)}
                  />
                  <div className={`flex lg:h-7 lg:w-7 xl:h-8 xl:w-8 justify-center items-center rounded-full`}
                    style={app.checked ? { backgroundColor: '#0C79FE' } : { backgroundColor: '#e6ebfd' }}
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
                  <input className='lg:w-[20px] lg:h-[20px] xl:w-[22px] xl:h-[22px]' type={"checkbox"} checked={ratioSelect === item.id}
                    onChange={() => setRatioSelect(item.id)}
                  />
                  <div className={`flex lg:h-7 lg:w-7 xl:h-8 xl:w-8 justify-center items-center rounded-full`}
                    style={item.id === ratioSelect ? { backgroundColor: '#0C79FE' } : { backgroundColor: '#e6ebfd' }}
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

        <div className={`${Styles.remindersBoxShadow} mt-6 pl-4 pb-9`}>
          <div className='mt-3 '>
            <span className='font-Poppins font-medium'>
              Déclenchement des notifications
            </span>
          </div>
          {triggers.map((trigger) => (
            <>
              <div key={trigger.id} className='flex items-center mt-5'>
                <input className='lg:w-[20px] lg:h-[20px] xl:w-[22px] xl:h-[22px]' type={"checkbox"} checked={triggerSelect === trigger.id}
                  onChange={() => setTriggerSelect(trigger.id)}
                />
                <div className={`flex lg:h-7 lg:w-7 xl:h-8 xl:w-8 justify-center items-center rounded-full`}
                  style={trigger.id === triggerSelect ? { backgroundColor: '#0C79FE' } : { backgroundColor: '#e6ebfd' }}
                >
                  <Image src={trigger.icon} width={20} height={20} layout={"fixed"} />
                </div>
                <div className='flex flex-col'>
                  <span className='font-Poppins font-medium ml-3 lg:text-sm xl:text-base'>
                    {trigger.title}
                  </span>
                  <span className='font-Poppins ml-3 text-[#7C8DB5] lg:text-sm xl:text-base'>
                    {trigger.description}
                  </span>
                </div>

              </div>
              {trigger.additional &&
                <div className='font-Poppins mt-8 pb-3 ml-[7%]'>
                  <span>
                    Envoi des rappels
                  </span>
                  <select className={`${Styles.remindersBoxShadow} mx-2 font-Poppins font-medium px-1`}>
                    <option>3 jours</option>
                  </select>
                  <span>
                    avant le dernier jour ouvré pour déclarer son planning
                  </span>
                </div>

              }
            </>
          ))}


        </div>

        <div className='mt-9 p-5 w-full border border-[#E6EDFF] rounded-xl '>
          <div className='flex justify-between items-center'>
            <span className={`font-Poppins font-medium text-xl text-[#A6231C]`}>
              Déclarations non réalisées
            </span>
          </div>

          <div className='mt-7 bg-[#A6231C] w-9 h-6 rounded-2xl flex justify-center items-center'>
            <span className='font-Poppins font-medium text-white'>
              13
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
            <ReminderTable toggleVisible={toggleVisible} />
          </div>
        </div>
      </div>

    </>
  )
}
