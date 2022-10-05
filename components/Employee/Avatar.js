import React, { useState } from "react";
import Modal from "./Modal";
export default function Avatars() {
  const [modalStatus, setModalStatus] = useState(false);
  const numberOfAttendees = 8;

  const openModal = () => {
    setModalStatus(true);
    console.log("modal opened");
  };

  return (
    <div className="flex justify-center my-12">
      {modalStatus && <Modal />}
      <div
        onClick={() => {
          setModalStatus(true);
        }}
        className="flex -space-x-2 relative z-0 p-2 bg-red-400 cursor-pointer"
      >
        <span className="z-50 relative top-3 -left-1 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"></span>
        <img
          className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="relative -z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white bg-black text-center pt-1.5 font-bold text-white ">
          +{numberOfAttendees - 4}
        </div>
      </div>
      <div className="flex my-auto font-bold">sont presents aujourd'hui</div>
    </div>
  );
}
