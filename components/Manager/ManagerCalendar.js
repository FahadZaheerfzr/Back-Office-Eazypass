import React from "react";
import Avatar from "../Employee/Avatar";

export default function ManagerCalendar() {
  const fullDate = new Date();
  const day = fullDate.toLocaleString("fr", { weekday: "long" });
  const date = fullDate.toLocaleString("fr", { day: "2-digit" });
  const month = fullDate.toLocaleString("fr", { month: "long" });

  return (
    <div
      className={`h-[220px] xs:w-[390px] rounded-[20px] xs:p-4
      flex flex-col my-6 w-full mx-2 xs:mx-auto
      p-2`}
      style={{
        background: "linear-gradient(205.81deg, #20DE33 0%, #555CFF 100%)",
      }}
    >
      <div className="flex">
        <div>
          <img src="/Employee/calendar.png" />
        </div>
        <div className="font-Poppins text-lg font-semibold ml-2 xs:text-2xl xs:ml-4  my-auto">
          <span className="capitalize">{day + " "}</span>
          {date + " "} {month}
        </div>
      </div>
      <div className="bg-black w-full mx-auto justify-self-center mt-8"></div>
      <Avatar />
    </div>
  );
}
