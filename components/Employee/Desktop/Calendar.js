import React from "react";
import { FaCircle } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
export default function Calendar() {
  const today = new Date();
  const month = today.toLocaleString("fr", { month: "long" });
  const date = today.toLocaleString("fr", { day: "numeric" });
  const day = today.toLocaleString("fr", { weekday: "long" });
  return (
    <div
      className="flex flex-col w-full py-4 px-6 rounded-[20px]"
      style={{
        background: " linear-gradient(205.81deg, #20DE33 0%, #555CFF 100%)",
      }}
    >
      <div className="flex">
        <div className="w-7/12 capitalize lg:text-5xl text-3xl font-medium font-Roboto">
          {day}
          <br />
          {date}
          <br />
          <span className="capitalize">{month}</span>
        </div>
        <div className="flex flex-col w-5/12 ">
          <div className="mx-auto mt-4">
            <img src={`/Employee/calendar.png`} alt="calendar" className="" />
          </div>
          <div className="flex mt-4 justify-center">
            <button className="text-white bg-black rounded-lg mx-2 shadow py-0.5 px-2.5 ">
              <IoChevronBack className="mx-auto" />
            </button>
            <button className="text-white bg-black rounded-lg mx-2 shadow py-0.5 px-2.5 ">
              <IoChevronForward className="mx-auto" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <div className="bg-white font-Poppins text-xs px-3 py-1 w-fit rounded-lg">
          <FaCircle
            className={`inline-block text-[10px] mr-2 text-[#772AD8]`}
          />
          Matinée
        </div>
        <div className="w-full bg-[#8572FF] font-Poppins rounded-[10px] h-[60px] text-white  flex  text-center">
          <div className="w-16">
            <img
              src="/Employee/desktop-teletravail.png"
              className="object-scale-down h-[60px]"
            />
          </div>
          <div className="my-auto mx-auto">Télétravail</div>
          <div className="w-16" />
        </div>

        <div className="bg-white font-Poppins text-xs px-3 py-1 w-fit rounded-lg mt-4">
          <FaCircle
            className={`inline-block text-[10px] mr-2 text-[#347AE2]`}
          />
          Après-midi
        </div>
        <div className="w-full bg-[#1C93D6] font-Poppins rounded-[10px] h-[60px] text-white  flex  text-center">
          <div className="w-16">
            <img
              src="/Employee/desktop-bureau.png"
              className="object-scale-down h-[60px]"
            />
          </div>
          <div className="my-auto mx-auto">Bureau</div>
          <div className="w-16" />
        </div>

        <div className="w-full flex justify-center">
          <div
            className="font-Roboto font-bold text-[20px] px-8 py-1 text-white rounded-lg"
            style={{
              background:
                "linear-gradient(136.64deg, #59DD2B 1.59%, #282ECA 98.89%)",
            }}
          >
            <button className=""> Modifier</button>
          </div>
        </div>
      </div>
    </div>
  );
}
