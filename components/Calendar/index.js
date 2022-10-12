import React, { useState, useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Avatars from "../Employee/Avatar";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Container() {
  const inputRef = useRef(null);
  const router = useRouter();
  // call getDate function on date object and do +- 1 to get the next or previous day
  // use timestamp of middle div to get next or previous day
  // make state for previous and next day and set it to the timestamp of the middle div +- 1
  const [startDate, setStartDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [comments, setComments] = useState("");
  /* INITIALIZING DATE STATES */
  const [selectedDay, setSelectedDay] = useState("");
  const [dateState, setDateState] = useState({
    timestamp: new Date(),
    date: new Date().toLocaleString("fr", { day: "2-digit" }),
    day: new Date().toLocaleString("fr", { weekday: "short" }),
    month: new Date().toLocaleString("fr", { month: "long" }),
    year: new Date().toLocaleString("fr", { year: "numeric" }),
  });
  const [nextDay, setNextDay] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return {
      timestamp: date,
      date: date.toLocaleString("fr", { day: "2-digit" }),
      day: date.toLocaleString("fr", { weekday: "short" }),
      month: date.toLocaleString("fr", { month: "long" }),
      year: date.toLocaleString("fr", { year: "numeric" }),
    };
  });
  const [previousDay, setPreviousDay] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return {
      timestamp: date,
      date: date.toLocaleString("fr", { day: "2-digit" }),
      day: date.toLocaleString("fr", { weekday: "short" }),
      month: date.toLocaleString("fr", { month: "long" }),
      year: date.toLocaleString("fr", { year: "numeric" }),
    };
  });

  /* UPDATING DATES */
  const handleNext = () => {
    setStartDate(null);
    const date = new Date(dateState.timestamp);
    date.setDate(date.getDate() + 1);
    setDateState({
      timestamp: date,
      date: date.toLocaleString("fr", { day: "2-digit" }),
      day: date.toLocaleString("fr", { weekday: "short" }),
      month: date.toLocaleString("fr", { month: "long" }),
      year: date.toLocaleString("fr", { year: "numeric" }),
    });
    setSelectedDay(date);
    const pDate = new Date(previousDay.timestamp);
    pDate.setDate(pDate.getDate() + 1);
    setPreviousDay({
      timestamp: pDate,
      date: pDate.toLocaleString("fr", { day: "2-digit" }),
      day: pDate.toLocaleString("fr", { weekday: "short" }),
      month: pDate.toLocaleString("fr", { month: "long" }),
      year: pDate.toLocaleString("fr", { year: "numeric" }),
    });
    const nDate = new Date(nextDay.timestamp);
    nDate.setDate(nDate.getDate() + 1);
    setNextDay({
      timestamp: nDate,
      date: nDate.toLocaleString("fr", { day: "2-digit" }),
      day: nDate.toLocaleString("fr", { weekday: "short" }),
      month: nDate.toLocaleString("fr", { month: "long" }),
      year: nDate.toLocaleString("fr", { year: "numeric" }),
    });
  };

  const handlePrev = () => {
    setStartDate(null);
    const date = new Date(dateState.timestamp);
    date.setDate(date.getDate() - 1);
    setDateState({
      timestamp: date,
      date: date.toLocaleString("fr", { day: "2-digit" }),
      day: date.toLocaleString("fr", { weekday: "short" }),
      month: date.toLocaleString("fr", { month: "long" }),
      year: date.toLocaleString("fr", { year: "numeric" }),
    });
    setSelectedDay(date);

    const pDate = new Date(previousDay.timestamp);
    pDate.setDate(pDate.getDate() - 1);
    setPreviousDay({
      timestamp: pDate,
      date: pDate.toLocaleString("fr", { day: "2-digit" }),
      day: pDate.toLocaleString("fr", { weekday: "short" }),
      month: pDate.toLocaleString("fr", { month: "long" }),
      year: pDate.toLocaleString("fr", { year: "numeric" }),
    });
    const nDate = new Date(nextDay.timestamp);
    nDate.setDate(nDate.getDate() - 1);
    setNextDay({
      timestamp: nDate,
      date: nDate.toLocaleString("fr", { day: "2-digit" }),
      day: nDate.toLocaleString("fr", { weekday: "short" }),
      month: nDate.toLocaleString("fr", { month: "long" }),
      year: nDate.toLocaleString("fr", { year: "numeric" }),
    });
  };

  console.log("selected", selectedDay.toLocaleString("fr", { day: "2-digit" }));
  return (
    <>
      <div className="p-4 rounded-2xl bg-white max-w-[420px] sm:max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="font-Poppins  xs:text-xl font-medium capitalize ">
              Calendrier
              <span className="text-[#7C8DB5] block">
                {dateState.month + " " + dateState.year}
              </span>
            </div>
            <div className="flex text-center my-auto space-x-8">
              <button
                onClick={handlePrev}
                className="text-[#7C8DB5] rounded-lg mx-auto shadow py-1 xs:px-4 px-2 xs:text-xl "
              >
                <IoChevronBack className="mx-auto" />
              </button>
              <button
                onClick={handleNext}
                className="text-[#7C8DB5] rounded-lg mx-auto shadow py-1 xs:px-4 px-2 xs:text-xl "
              >
                <IoChevronForward className="mx-auto" />
              </button>
            </div>
          </div>

          <div className="text-[#1E293B] font-Inter text-center my-6 pl-3 xs:text-xl font-semibold">
            Demande ponctuelle - Télétravail
          </div>
          <div className="flex flex-col"></div>
          <div className="font-Inter text-[#1E293B] pl-3 text-sm xs:text-lg font-medium">
            Choisissez le jour
          </div>
          <div className="flex w-full my-2 justify-between px-3">
            <div
              onClick={() => {
                handlePrev();
              }}
              className="flex flex-col justify-center xs:text-2xl text-center bg-[#F1F5F9] w-[22.5%] font-Inter text-[#4A4A4A] align-middle h-24 xs:h-36 font-semibold rounded-lg"
            >
              {previousDay.date}
              <span className="text-[10px] xs:text-xs capitalize font-Inter font-normal">
                {previousDay.day}
              </span>
            </div>
            <div
              onClick={() => {
                setSelectedDay(dateState);
                setShowDatePicker(false);
                setStartDate(null);
              }}
              className={`flex flex-col justify-center xs:text-2xl text-center w-[22.5%] font-Inter align-middle h-24 xs:h-36 font-semibold rounded-lg
              ${
                startDate
                  ? "bg-[#F1F5F9] text-[#4A4A4A] "
                  : "bg-[#5E8BE2] text-white "
              }`}
            >
              {dateState.date}
              <span className="text-[10px] xs:text-xs capitalize font-Inter font-normal">
                {" "}
                {dateState.day}{" "}
              </span>
            </div>
            <div
              onClick={() => {
                handleNext();
              }}
              className="flex flex-col justify-center xs:text-2xl text-center bg-[#F1F5F9] w-[22.5%] font-Inter text-[#4A4A4A] align-middle h-24 xs:h-36 font-semibold rounded-lg"
            >
              {nextDay.date}
              <span className="text-[10px] xs:text-xs capitalize font-Inter font-normal">
                {" "}
                {nextDay.day}{" "}
              </span>
            </div>
            <div
              // trigger a click on the input
              onClick={() => {
                setShowDatePicker(true);
                console.log('sohwing')
                if (startDate) {
                  setStartDate(null);
                }
              }}
              className={`flex flex-col justify-center text-xs xs:text-sm text-center  w-[22.5%] font-Inter align-middle h-24 xs:h-36 font-semibold  rounded-lg
              ${
                startDate
                  ? "bg-[#5E8BE2] text-white "
                  : "bg-[#F1F5F9] text-[#4A4A4A] "
              }`}
            >
              <div className={`${startDate && "hidden"}`}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setSelectedDay(date);
                    setShowDatePicker(false);
                  }}
                  autoFocus
                  placeholderText="Autre"
                  open={showDatePicker}
                />
              </div>
              {!startDate  ? (
                <>
                  <span className="text-[10px] xs:text-xs capitalize font-Inter font-normal">
                    Date
                  </span>
                </>
              ) : (
                <span className="leading-3">
                  <span className="text-xl block">
                    {startDate.toLocaleString("fr", { day: "2-digit" })}
                  </span>
                  {" " + startDate.toLocaleString("fr", { month: "short" })}
                  {" " + startDate.toLocaleString("fr", { year: "numeric" })}
                  <span className="text-[10px] xs:text-xs capitalize font-Inter font-normal block">
                    {startDate.toLocaleString("fr", { weekday: "short" })}
                  </span>
                </span>
              )}
            </div>
          </div>
          <div className="my-4 xs:my-12">
            <Avatars />
          </div>

          <div className="font-Inter text-[#1E293B] pl-3 flex flex-col font-medium xs:text-base text-sm">
            <div>
              Commentaire
              <textarea
                className="flex bg-[#F1F5F9] rounded-xl w-full h-[135px] p-2 resize-none text-xs xs:text-base"
                value={comments}
                onChange={(event) => setComments(event.target.value)}
              />
            </div>
            <div className="flex justify-center text-center mt-6 xs:mt-24">
              <button
                onClick={() => router.back()}
                className="bg-gradient-to-br from-[#59dd2b] to-[#282eca] rounded-lg py-1.5 px-8 text-xl text-white font-Roboto font-bold"
              >
                Soumettre
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
