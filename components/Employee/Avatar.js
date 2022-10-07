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
        <span className="z-50 relative top-3 -left-1 block h-4 w-4 rounded-full  bg-green-400"></span>
        <img
          className="relative z-30 inline-block h-10 w-10 rounded-full "
          src={avatars[0].avatar}
          alt=""
        />
        <img
          className="relative z-20 inline-block h-10 w-10 rounded-full "
          src={avatars[1].avatar}
          alt=""
        />
        <img
          className="relative z-10 inline-block h-10 w-10 rounded-full "
          src={avatars[2].avatar}
          alt=""
        />
        <img
          className="relative z-0 inline-block h-10 w-10 rounded-full "
          src={avatars[3].avatar}
          alt=""
        />
        <div className="relative -z-10 inline-block h-10 w-10 rounded-full  bg-black text-center pt-1.5 font-bold text-white ">
          +{numberOfAttendees - 4}
        </div>
      </div>
      <div className="flex my-auto text-xs font-Roboto font-bold ml-2">
        sont presents aujourd'hui
      </div>
    </div>
  );
}
