import React from "react";
import Avatars from "../Employee/Mobile/Avatar";
import Image from "next/image";
export default function ManagerCalendar() {
  const fullDate = new Date();
  const day = fullDate.toLocaleString("fr", { weekday: "long" });
  const date = fullDate.toLocaleString("fr", { day: "2-digit" });
  const month = fullDate.toLocaleString("fr", { month: "long" });

  return (
    <div
      className={` xs:w-[390px]  rounded-xl xs:rounded-[20px] 
      p-2 xs:p-4 flex flex-col my-6 mx-auto
      `}
      style={{
        background: "linear-gradient(205.81deg, #20DE33 0%, #555CFF 100%)",
      }}
    >
      <div className="flex justify-center">
        <div>
          <Image
            width={100}
            height={100}
            src="/Employee/calendar.png"
            className="xs:w-20 w-14"
          />
        </div>
        <div className="font-Poppins font-medium text-2xl xs:text-[32px] ml-4 my-auto">
          <span className="capitalize">{day + " "}</span>
          {date + " "} {month}
        </div>
      </div>
      <div className="bg-black w-full mx-auto justify-self-center mt-8"></div>
      <Avatars />
    </div>
  );
}