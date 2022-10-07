import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

export default function CalendarCarousel() {
  /* WEEK INITIALIZE */
  const [previousDay1, setpreviousDay1] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
  });

  const [previousDay2, setpreviousDay2] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 2);
    return date;
  });

  const [previousDay3, setpreviousDay3] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
  });

  const [selectedDay, setSelectedDay] = React.useState(new Date());

  const [nextDay1, setnextDay1] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  });

  const [nextDay2, setnextDay2] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    return date;
  });

  const [nextDay3, setnextDay3] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  });

  /* FETCH FUNCTIONS */
  const fetchDay = (date) => {
    const day = date.toLocaleString("fr", { weekday: "short" });
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

  const fetchYear = (date) => {
    const year = date.toLocaleString("fr", { year: "numeric" });
    return year;
  };

  /* HANDLE FUNCTIONS */

  const handleNext = () => {
    setpreviousDay1(selectedDay);
    setpreviousDay2(previousDay1);
    setpreviousDay3(previousDay2);
    setSelectedDay(nextDay1);
    setnextDay1(nextDay2);
    setnextDay2(nextDay3);
    setnextDay3(() => {
      const date = new Date(nextDay3);
      date.setDate(date.getDate() + 1);
      return date;
    });
  };

  const handlePrevious = () => {
    setnextDay1(selectedDay);
    setnextDay2(nextDay1);
    setnextDay3(nextDay2);
    setSelectedDay(previousDay1);
    setpreviousDay1(previousDay2);
    setpreviousDay2(previousDay3);
    setpreviousDay3(() => {
      const date = new Date(previousDay3);
      date.setDate(date.getDate() - 1);
      return date;
    });
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="font-Poppins text-xl font-semibold capitalize">
          Calendrier
          <span className="text-[#7C8DB5] block">
            {fetchMonth(selectedDay) + " " + fetchYear(selectedDay)}
          </span>
        </div>
        <div className="flex text-center my-auto space-x-8">
          <button
            onClick={handlePrevious}
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
      <div className="flex justify-evenly my-2">
        <div className="h-[79px] w-[14%] text-center flex flex-col justify-center rounded-2xl font-Inter capitalize text-lg text-[#1e293b]">
          {fetchDate(previousDay3)}
          <span className="text-[#94a3b8] block text-xs font-light">
            {fetchDay(previousDay3)}
          </span>
        </div>
        <div className="h-[79px] w-[14%] text-center flex flex-col justify-center rounded-2xl font-Inter capitalize text-lg text-[#1e293b]">
          {fetchDate(previousDay2)}
          <span className="text-[#94a3b8] block text-xs font-light">
            {fetchDay(previousDay2)}
          </span>
        </div>
        <div className="h-[79px] w-[14%] text-center flex flex-col justify-center rounded-2xl font-Inter capitalize text-lg text-[#1e293b]">
          {fetchDate(previousDay1)}
          <span className="text-[#94a3b8] block text-xs font-light">
            {fetchDay(previousDay1)}
          </span>
        </div>
        <div className="h-[79px] relative w-[14%] text-center flex flex-col justify-center rounded-2xl text-[#497CDE] bg-[#f0f3ff] font-Inter text-lg ">
          {fetchDate(selectedDay)}
          <span className="block text-xs font-light">
            {fetchDay(selectedDay)}
          </span>
          <div className="absolute bottom-0 text-[#496ADE] mx-auto left-0 right-0 ">
            <FaCircle className="inline-block" size={8} />
          </div>
        </div>
        <div className="h-[79px] w-[14%] text-center flex flex-col justify-center rounded-2xl font-Inter capitalize text-lg text-[#1e293b]">
          {fetchDate(nextDay1)}
          <span className="text-[#94a3b8] block text-xs font-light">
            {fetchDay(nextDay1)}
          </span>
        </div>
        <div className="h-[79px] w-[14%] text-center flex flex-col justify-center rounded-2xl font-Inter capitalize text-lg text-[#1e293b]">
          {fetchDate(nextDay2)}
          <span className="text-[#94a3b8] block text-xs font-light">
            {fetchDay(nextDay2)}
          </span>
        </div>
        <div className="h-[79px] w-[14%] text-center flex flex-col justify-center rounded-2xl font-Inter capitalize text-lg text-[#1e293b]">
          {fetchDate(nextDay3)}
          <span className="text-[#94a3b8] block text-xs font-light">
            {fetchDay(nextDay3)}
          </span>
        </div>
      </div>
    </>
  );
}
