import Image from "next/image";
import React, { useState } from "react";
import Styles from "./Profile.module.css";
import { useRouter } from "next/router";

export default function Topbar({ name, description, icon }) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className="w-full">
      <Image
        src={"/Dashboard/Home/topbar.svg"}
        layout={"responsive"}
        width={1000}
        height={28}
      />

      <div className="w-full mt-10 px-[5%] flex justify-between">
        <div className="w-1/2">
          <div className="">
            {icon && <Image src={icon} width={17} height={17} />}
          </div>
          <div className="">
            <span className="font-Poppins lg:text-lg xl:text-xl">{name}</span>
          </div>
          <div>
            <span className="font-Poppins font-normal text-[#7C8DB5]">
              {description}
            </span>
          </div>
        </div>

        <div className="w-1/2 h-fit flex items-center justify-end">
          <div className="">
            <Image src={"/Dashboard/Home/search.svg"} width={20} height={20} />
          </div>
          <div className="md:ml-2 xl:ml-7 ">
            <Image
              src={"/Dashboard/Home/notification.svg"}
              width={20}
              height={20}
            />
          </div>
          <div
            className={`${
              visible ? "${Styles.changeAccount}" : ""
            } md:ml-5 lg:ml-7 xl:ml-9 py-2 px-1`}
          >
            <div className="flex items-center">
              <div className="">
                <Image
                  src={"/Dashboard/Home/avatar.svg"}
                  width={42}
                  height={42}
                />
              </div>

              <div className="md:ml-2 xl:ml-3">
                <span className="font-Poppins md:text-sm lg:text-base">
                  Maxime Duvauchelle
                </span>
              </div>
              <div
                className="mt-1 md:ml-2 xl:ml-3 cursor-pointer"
                onClick={() => toggleVisible()}
              >
                <Image
                  src={"/Dashboard/Home/chevron-down.svg"}
                  width={15}
                  height={15}
                />
              </div>
            </div>
            {visible ? (
              <div
                className={`${Styles.changeAccount} z-10 mt-0 pt-3 pb-4 flex flex-col absolute`}
              >
                <div className="flex items-center pl-2 cursor-pointer">
                  <div className={`${Styles.profileRectangle} w-10 h-10`}>
                    <Image
                      src={"/Dashboard/Home/user.svg"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <span className="font-Poppins ml-2">Administrateur</span>

                  <div className="ml-4">
                    <Image
                      src={"/Dashboard/Home/active.svg"}
                      width={15}
                      height={15}
                    />
                  </div>
                </div>

                <div
                  className="flex items-center mt-4 pl-2 cursor-pointer"
                  onClick={() => router.push("/manager")}
                >
                  <div className={`${Styles.profileRectangle} w-10 h-10`}>
                    <Image
                      src={"/Dashboard/Home/manager.svg"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <span className="font-Poppins ml-2">Manager</span>
                </div>

                <div
                  className="flex items-center mt-4 pl-2 cursor-pointer"
                  onClick={() => router.push("/employee")}
                >
                  <div
                    className={`${Styles.profileRectangle} w-10 h-10 flex justify-center items-center`}
                  >
                    <Image
                      src={"/Dashboard/Home/person.svg"}
                      width={14}
                      height={14}
                    />
                  </div>
                  <span className="font-Poppins ml-2">Collaborateur</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
