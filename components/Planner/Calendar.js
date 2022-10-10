import React, { Fragment, useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

import DialogBox from "./DialogBox";

export default function Calendar() {
  /* FETCH FUNCTIONS */
  const places = 35;
  const fetchDayNumber = (date) => {
    const day = date.getDay();
    return day;
  };
  const fetchDate = (date) => {
    const dateNumber = date.toLocaleString("fr", { day: "2-digit" });
    return dateNumber;
  };
  const fetchMonth = (date) => {
    const month = date.toLocaleString("fr", { month: "long" });
    return month;
  };

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [clickedDate, setClickedDate] = useState();
  const today = new Date();
  const todayDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [monthFullOfDates, setMonthFullOfDates] = useState(() => {
    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const timestamp = new Date(currentYear, currentMonth, i);
      const date = i;
      const isToday =
        i === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      const hasPassed = timestamp < today;
      const declarationStatus =
        timestamp.getDate() <= today.getDate()
          ? ["declared", "not declared"][Math.floor(Math.random() * 2)]
          : "pending";
      const morningMode =
        declarationStatus === "declared"
          ? ["Télétravail", "Bureau"][Math.floor(Math.random() * 2)]
          : "";
      const afternoonMode =
        declarationStatus === "declared"
          ? ["Télétravail", "Bureau"][Math.floor(Math.random() * 2)]
          : "";
      const fixed = false;

      dates.push({
        timestamp,
        date,
        isToday,
        hasPassed,
        declarationStatus,
        morningMode,
        afternoonMode,
        fixed,
      });
    }
    return dates;
  });
  const emptyDivs = fetchDayNumber(monthFullOfDates[0].timestamp);

  return (
    <div className="max-w-[428px] mx-auto font-medium my-10 xs:my-20">
      <div className="flex my-6 mx-1 xs:mx-3 justify-center">
        <div
          className="w-28 h-[173px] xs:h-[205px] rounded-[20px] tracking-widest font-Roboto text-white text-lg xs:text-2xl flex flex-col justify-center items-center capitalize"
          style={{
            background: "linear-gradient(205.81deg, #25F53A 0%, #555CFF 100%)",
          }}
        >
          <span className="-rotate-90 relative -left-2 font-semibold">
            {today.toLocaleString("fr", { month: "long" })}
          </span>
        </div>
        <div
          className="flex flex-col rounded-[20px] w-64 h-44 xs:h-52 relative -left-7 p-2 pl-6 "
          style={{
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.41) 100%)",
            backdropFilter: "blur(25px)",
          }}
        >
          <div className="flex ">
            <div className="font-Roboto text-xl xs:text-3xl font-bold w-1/3 ">
              <span className="capitalize text-sm xs:text-lg block">
                {today.toLocaleString("fr", { weekday: "long" })}
              </span>
              {today.toLocaleString("fr", { day: "2-digit" })}
            </div>
            <div className="w-2/3 xs:text-sm text-xs font-Roboto font-light text-center">
              <span
                className={`${
                  places <= 50 ? "text-[#FFCE31]" : "text-[#F44336]"
                } font-medium`}
              >
                {places + " "}
              </span>
              places disponibles
              <div className="w-10/12 xs:my-4 my-2 rounded-full mx-auto bg-[#E3E1E1] p-[1px]  border border-black">
                <div
                  className={` ${
                    places <= 50 ? "bg-[#FFCE31]" : "bg-[#F44336]"
                  } text-xs h-2 font-medium text-blue-100 text-center  border border-black p-0.5 leading-none rounded-full`}
                  style={{ width: `${places}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col list-[circle] font-Roboto">
            <div className="flex  xs:mt-2  ">
              <div className={`xs:text-lg text-[#787878]`}>Matin</div>
            </div>
            <div className="text-[#D0D312]">
              <li>
                <span
                  className={`text-[#5A3A3A] relative -left-4 text-sm xs:text-base pl-2 font-normal`}
                >
                  {monthFullOfDates[todayDate - 1].morningMode ? (
                    <>{monthFullOfDates[todayDate - 1].morningMode}</>
                  ) : (
                    <>Not declared</>
                  )}
                </span>
              </li>
            </div>
            <div className={`xs:text-lg text-[#787878] xs:mt-2  `}>Après-midi</div>

            <div className="text-[#1400FF] ">
              <li>
                <span
                  className={`text-[#5A3A3A] relative -left-4 text-sm xs:text-base pl-2 font-normal`}
                >
                  {monthFullOfDates[todayDate - 1].afternoonMode ? (
                    <>{monthFullOfDates[todayDate - 1].afternoonMode}</>
                  ) : (
                    <>Not declared</>
                  )}
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>

      <div
        className="xs:max-w-[216px] max-w-[140px] font-normal mx-auto my-6 xs:my-10 xs:h-12 h-6 flex flex-col justify-center items-center font-Roboto xs:text-2xl text-lg text-white rounded-xl xs:rounded-[20px] "
        style={{
          background: "linear-gradient(263.44deg, #30D686 0%, #2B54E6 220.87%)",
        }}
      >
        Modifier
      </div>

      <div className="my-4 xs:my-8">
        <div className="flex justify-center space-x-4">
					<FaCircle/>
					<FaCircle className="text-xs my-auto text-slate-50" />
					<FaCircle className="text-xs my-auto text-slate-50" />
				</div>
      </div>

      <div className=" text-center  font-Poppins text-lg xs:text-2xl capitalize font-normal">
        {" "}
        {fetchMonth(today) + " " + currentYear}
      </div>
      <div className="grid grid-cols-7 w-full text-center">
        {dayNames.map((dayName, index) => {
          return (
            <div className="font-Roboto xs:text-2xl text-lg font-normal my-2 xs:my-4" key={index}>
              {dayName}
            </div>
          );
        })}

        {emptyDivs > 0 &&
          [...Array(emptyDivs)].map((_, index) => {
            return <div className="mt-3" key={index}></div>;
          })}

        {monthFullOfDates.map((date, index) => {
          return (
            <div
              className={`xs:text-center xs:pl-0 pl-3 text-left font-Poppins text-sm xs:text-[20px] relative xs:mb-4 mb-2 font-normal
            `}
              key={index}
            >
              <span
                className={`${
                  date.isToday && "text-[#B2BBC8] bg-black rounded-full p-1"
                } `}
              >
                {fetchDate(date.timestamp)}
              </span>

              <span
                onClick={() => {
                  if (!date.hasPassed) {
                    openModal();
                  }
                  setClickedDate(date);
                }}
              >
                {date.declarationStatus === "declared" ? (
                  <BiCheckCircle
                    className={`text-[#11A628] cursor-pointer absolute top-0 bottom-0 my-auto w-4
                  ${
                    date.timestamp.getDate() == today.getDate()
                      ? "xs:-right-1.5 -right-1"
                      : "right-0"
                  }`}
                  />
                ) : date.declarationStatus === "not declared" ? (
                  <MdCancel
                    className={`text-[#ff3b3b] cursor-pointer absolute top-0 bottom-0 my-auto w-4
                  ${
                    date.timestamp.getDate() == today.getDate()
                      ? "-right-1.5"
                      : "right-0"
                  }`}
                  />
                ) : (
                  <BsFillQuestionCircleFill
                    className={`text-[#F9CF00] cursor-pointer absolute top-0 bottom-0 my-auto w-4
                  ${
                    date.timestamp.getDate() == today.getDate()
                      ? "-right-1.5"
                      : "right-0"
                  }`}
                  />
                )}
              </span>
            </div>
          );
        })}
        <DialogBox
          isOpen={isOpen}
          closeModal={closeModal}
          date={clickedDate}
          setDate={setMonthFullOfDates}
        />
      </div>
    </div>
  );
}
