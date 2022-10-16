import React, { useState } from "react";
import Modal from "./Modal";
export default function Avatars() {
  const [modalStatus, setModalStatus] = useState(false);
  const numberOfAttendees = 8;

  const avatars = [
    {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Jimmy Khan",
      avatar:
        "https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg",
    },
    {
      name: "Elon Gates",
      avatar: "https://thispersondoesnotexist.com/image",
    },
    {
      name: "Dominic Toretto",
      avatar:
        "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg",
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
        <img
          className="relative z-30 inline-block h-8 w-8 xs:h-10 xs:w-10 rounded-full "
          src={avatars[0].avatar}
          alt=""
        />
        <img
          className="relative z-20 inline-block h-8 w-8 xs:h-10 xs:w-10 rounded-full "
          src={avatars[1].avatar}
          alt=""
        />
        <img
          className="relative z-10 inline-block h-8 w-8 xs:h-10 xs:w-10 rounded-full "
          src={avatars[2].avatar}
          alt=""
        />
        <img
          className="relative z-0 inline-block h-8 w-8 xs:h-10 xs:w-10 rounded-full "
          src={avatars[3].avatar}
          alt=""
        />
        <div className="relative -z-10 inline-block h-8 w-8 xs:h-10 xs:w-10 rounded-full xs:text-base text-sm bg-black text-center pt-1 xs:pt-1.5 font-bold text-white ">
          +{numberOfAttendees - 4}
        </div>
      </div>
      <div className="flex my-auto text-[10px] xs:text-xs font-Roboto font-bold ml-1 xs:ml-2">
        sont presents aujourd'hui
      </div>
    </div>
  );
}
