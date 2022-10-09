import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Avatars from "../Employee/Avatar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";

export default function Container() {
  const router = useRouter();
  // call getDate function on date object and do +- 1 to get the next or previous day
  // use timestamp of middle div to get next or previous day
  // make state for previous and next day and set it to the timestamp of the middle div +- 1
  const [startDate, setStartDate] = useState(new Date());
  const [comments, setComments] = useState("");
  /* INITIALIZING DATE STATES */
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
  const [selectedDay, setSelectedDay] = useState(dateState);

  /* UPDATING DATES */
  const handleNext = () => {
    const date = new Date(dateState.timestamp);
    date.setDate(date.getDate() + 1);
    setDateState({
      timestamp: date,
      date: date.toLocaleString("fr", { day: "2-digit" }),
      day: date.toLocaleString("fr", { weekday: "short" }),
      month: date.toLocaleString("fr", { month: "long" }),
      year: date.toLocaleString("fr", { year: "numeric" }),
    });
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
    const date = new Date(dateState.timestamp);
    date.setDate(date.getDate() - 1);
    setDateState({
      timestamp: date,
      date: date.toLocaleString("fr", { day: "2-digit" }),
      day: date.toLocaleString("fr", { weekday: "short" }),
      month: date.toLocaleString("fr", { month: "long" }),
      year: date.toLocaleString("fr", { year: "numeric" }),
    });
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
  return (
    <>
      <div className="p-4 rounded-2xl bg-white max-w-[420px] sm:max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="font-Poppins text-xl font-semibold capitalize">
              Calendrier
              <span className="text-[#7C8DB5] block">
                {dateState.month + " " + dateState.year}
              </span>
            </div>
            <div className="flex text-center my-auto space-x-8">
              <button
                onClick={handlePrev}
                className="text-[#7C8DB5] rounded-lg mx-auto shadow py-1 px-4 text-xl "
              >
                <IoChevronBack className="mx-auto" />
              </button>
              <button
                onClick={handleNext}
                className="text-[#7C8DB5] rounded-lg mx-auto shadow py-1 px-4 text-xl "
              >
                <IoChevronForward className="mx-auto" />
              </button>
            </div>
          </div>

          <div className="text-[#1E293B] font-Inter text-center my-6 pl-3 text-xl">
            Demande ponctuelle - Télétravail
          </div>
          <div className="flex flex-col"></div>
          <div className="font-Inter text-[#1E293B] pl-3 text-lg">
            Choisissez le jour
          </div>
          <div className="flex w-full my-2 justify-between px-3">
            <div className="flex flex-col justify-center text-2xl text-center bg-[#F1F5F9] w-[22.5%] font-Inter text-[#4A4A4A] align-middle h-36 rounded-lg">
              {previousDay.date}
              <span className="capitalize text-base font-Roboto">
                {previousDay.day}
              </span>
            </div>
            <div className="flex flex-col justify-center text-2xl text-center bg-[#5E8BE2] w-[22.5%] font-Inter text-white align-middle h-36 rounded-lg">
              {dateState.date}
              <span className="capitalize text-base font-Roboto">
                {" "}
                {dateState.day}{" "}
              </span>
            </div>
            <div className="flex flex-col justify-center text-2xl text-center bg-[#F1F5F9] w-[22.5%] font-Inter text-[#4A4A4A] align-middle h-36 rounded-lg">
              {nextDay.date}
              <span className="capitalize text-base font-Roboto">
                {" "}
                {nextDay.day}{" "}
              </span>
            </div>
            <div className="flex flex-col justify-center text-2xl text-center bg-[#F1F5F9] w-[22.5%] font-Inter text-[#4A4A4A] align-middle h-36 rounded-lg">
              Autre{" "}
              <span className="capitalize text-base font-Roboto"> Date </span>
              {/* 
              // when date picker will be used this library will be used
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              /> */}
            </div>
          </div>
          <div className="">
            <Avatars />
          </div>

          <div className="font-Inter text-[#1E293B] pl-3 flex flex-col">
            <div>
              Commentaire
              <textarea
                className="flex bg-[#F1F5F9] rounded-xl w-full h-[135px] p-2 resize-none"
                value={comments}
                onChange={(event) => setComments(event.target.value)}
              />
            </div>
            <div className="flex justify-center text-center mt-24">
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
