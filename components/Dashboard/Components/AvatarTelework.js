import React from "react";
import Image from "next/image";

export default function AvatarTelework() {
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
      <div className="flex -space-x-2 -ml-3 relative z-0 ">
          <Image
            width={40}
            height={40}
            className="relative  rounded-full z-20 "
            src={avatars[1].avatar}
            alt=""
          />
          <Image
            width={40}
            height={40}
            className="relative  rounded-full z-20 "
            src={avatars[1].avatar}
            alt=""
          />
          <Image
            width={40}
            height={40}
            className="relative  rounded-full z-20 "
            src={avatars[1].avatar}
            alt=""
          />
          <Image
            width={40}
            height={40}
            className="relative  rounded-full z-20 "
            src={avatars[1].avatar}
            alt=""
          />
        <div className="relative -z-10 flex h-10 w-10 rounded-full xs:text-base text-sm bg-black justify-center items-center font-bold text-white ">
          +{numberOfAttendees - 4}
        </div>
      </div>
  );
}
