import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

export default function Avatars() {
  const [modalStatus, setModalStatus] = useState(false);
  const numberOfAttendees = 8;

  const avatars = [
    {
      name: "John Doe",
      avatar: "/Employee/avatars.png",
    },
    {
      name: "Jimmy Khan",
      avatar: "/Employee/avatars.png",
    },
    {
      name: "Elon Gates",
      avatar: "/Employee/avatars.png",
    },
    {
      name: "Dominic Toretto",
      avatar: "/Employee/avatars.png",
    },
  ];

  return (
    <div className="flex justify-center">
      {modalStatus && (
        <Modal
          isOpen={modalStatus}
          setIsOpen={setModalStatus}
          avatars={avatars}
        />
      )}
      <div
        onClick={() => {
          setModalStatus(true);
        }}
        className="flex -space-x-2 relative z-0 py-2 cursor-pointer"
      >
        <span className="z-50 relative top-3 -left-1 block xs:h-4 xs:w-4 h-3 w-3 rounded-full  bg-green-400" />
        <span className="relative  inline-block">
          <Image
            width={40}
            height={40}
            className="relative  rounded-full z-20 "
            src={avatars[1].avatar}
            alt=""
          />
        </span>
        <span className="relative  inline-block ">
          <Image
            width={40}
            height={40}
            className="relative  rounded-full z-20 "
            src={avatars[1].avatar}
            alt=""
          />
        </span>
        <span className="relative  inline-block ">
          <Image
            width={40}
            height={40}
            className="relative  rounded-full z-20 "
            src={avatars[1].avatar}
            alt=""
          />
        </span>
        <span className="relative  inline-block ">
          <Image
            width={40}
            height={40}
            className="relative  rounded-full z-20 "
            src={avatars[1].avatar}
            alt=""
          />
        </span>
        <div className="relative -z-10 h-10 w-10 xs:h-10 xs:w-10  rounded-full xs:text-base text-sm bg-black flex justify-center items-center font-bold text-white ">
          +{numberOfAttendees - 4}
        </div>
      </div>
      <div className="flex my-auto text-[10px] xs:text-xs font-Inter font-bold ml-1 xs:ml-2">
        sont presents aujourd'hui
      </div>
    </div>
  );
}