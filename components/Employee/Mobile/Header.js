import React, { useState } from "react";
import Image from "next/image";
import BackArrow from "./BackArrow";
import { useRouter } from "next/router";
import Styles from '../../Dashboard/Topbar/Profile.module.css'
export default function Header({ showBack }) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const toggleVisible = () => {
    setVisible(!visible);
  }
  return (
    <>
      <div className="flex flex-col ">
        {showBack && <BackArrow />}
        <div className="flex  justify-center">
          <div className="w-1/3 "> </div>
          <div className="pt-10 w-1/3 flex justify-center">
            <Image
              src={"/Login/Sans titre.svg"}
              width={200}
              height={100}
              layout={"fixed"}
            />
          </div>
          <div className="w-1/3 flex pt-6 pr-6 justify-end "
            onClick={() => toggleVisible()}>
            <span className="hidden xs:flex">
              <Image
                width={60}
                height={60}
                layout={"fixed"}
                src={"/Employee/avatar.png"}
              />
            </span>
            <span className=" xs:hidden translate-y-6">
              <Image
                width={40}
                height={40}
                layout={"fixed"}
                src={"/Employee/avatar.png"}
              />
            </span>
            {visible ?
              <div className={`${Styles.changeAccount} z-10 mt-16 pt-3 pb-4 flex flex-col absolute`}>

                <div className='flex items-center pl-2 cursor-pointer'
                  onClick={() => router.push("/admin/dashboard", undefined, { shallow: true })}>

                  <div className={`${Styles.profileRectangle} w-10 h-10`}>
                    <Image src={'/Dashboard/Home/user.svg'} width={100} height={100} />
                  </div>
                  <span className='font-Poppins ml-2'>Administrateur</span>

                  <div className='ml-4'>
                    <Image src={'/Dashboard/Home/active.svg'} width={15} height={15} />
                  </div>


                </div>

                <div className='flex items-center mt-4 pl-2 cursor-pointer'
                  onClick={() => router.push("/manager", undefined, { shallow: true })}>

                  <div className={`${Styles.profileRectangle} w-10 h-10`}>
                    <Image src={'/Dashboard/Home/manager.svg'} width={100} height={100} />
                  </div>
                  <span className='font-Poppins ml-2'>Manager</span>

                </div>

                <div className='flex items-center mt-4 pl-2 cursor-pointer'
                  onClick={() => router.push("/employee", undefined, { shallow: true })}>

                  <div className={`${Styles.profileRectangle} w-10 h-10 flex justify-center items-center`}>
                    <Image src={'/Dashboard/Home/person.svg'} width={14} height={14} />
                  </div>
                  <span className='font-Poppins ml-2'>Collaborateur</span>

                </div>
              </div> : null
            }
          </div>
        </div>
      </div>
    </>
  );
}