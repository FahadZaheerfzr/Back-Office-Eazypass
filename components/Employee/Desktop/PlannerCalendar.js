import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import DateCard from "./DateCard";
import ModeSelector from "./ModeSelector";
export default function PlannerCalendar() {
  const fetchDayNumber = (date) => {
    const day = date.getDay();
    return (day - 1) % 7;
  };
  const fetchDate = (date) => {
    const dateNumber = date.toLocaleString("fr", { day: "2-digit" });
    return dateNumber;
  };
  const fetchMonth = (date) => {
    const month = date.toLocaleString("fr", { month: "long" });
    return month;
  };
  /* MODAL FUNCTIONS */
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  /* STATES AND VARIBALES */
  const [isOpen, setIsOpen] = useState(false);

  const [showNextMonth, setShowNextMonth] = useState(false);
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
  const daysInNextMonth =
    32 - new Date(currentYear, currentMonth + 1, 32).getDate();
  const daysInPrevMonth =
    32 - new Date(currentYear, currentMonth - 1, 32).getDate();
  const dayNames = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const nextMonthFirstDate = new Date(currentYear, currentMonth + 1, 1);

  const nextMonday = new Date();
  nextMonday.setDate(
    nextMonday.getDate() + ((1 + 7 - nextMonday.getDay()) % 7 || 7)
  );
  const [nextWeek] = useState(() => {
    const nextWeek = [];
    for (let i = 0; i < 7; i++) {
      const start = new Date(nextMonday);
      start.setDate(start.getDate() + i);
      start.setHours(0, 0, 0, 0);
      const day = start.toDateString();
      nextWeek.push(day);
    }
    return nextWeek;
  });

  /* MONTH LISTS */
  const [currentMonthList, setCurrentMonthList] = useState(() => {
    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const timestamp = new Date(currentYear, currentMonth, i);
      const date = i;
      const isToday =
        i === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      const isWeekend = timestamp.getDay() === 0 || timestamp.getDay() === 6;
      const hasPassed = timestamp < today;
      const declarationStatus =
        timestamp.getDate() < nextMonday.getDate() && !isWeekend
          ? "declared"
          : "pending";
      const morningMode =
        declarationStatus === "declared"
          ? ["Télétravail", "Bureau", "Congés"][Math.floor(Math.random() * 3)]
          : "";
      const afternoonMode =
        declarationStatus === "declared"
          ? ["Télétravail", "Bureau", "Congés"][Math.floor(Math.random() * 3)]
          : "";
      const fixed = false;
      const isEnabled =
        nextWeek.includes(timestamp.toDateString()) && !isWeekend;
      const isNextMonday =
        timestamp.toDateString() === nextMonday.toDateString();

      dates.push({
        timestamp,
        date,
        isToday,
        hasPassed,
        declarationStatus,
        morningMode,
        afternoonMode,
        fixed,
        isEnabled,
        isWeekend,
        isNextMonday,
      });
      // if (isEnabled) {
      //   console.log(timestamp, "is enabled");
      // }
    }
    return dates;
  });
  const [clickedDate, setClickedDate] = useState(() => {
    return currentMonthList.find((date) => date.isNextMonday)
      ? currentMonthList.find((date) => date.isNextMonday)
      : nextMonthList.find((date) => date.isToday);
  });

  const [nextMonthList, setNextMonthList] = useState(() => {
    const dates = [];
    for (let i = 1; i <= daysInNextMonth; i++) {
      const timestamp = new Date(currentYear, currentMonth + 1, i);
      const date = i;
      const isToday = false;
      const hasPassed = false;
      const declarationStatus =
        timestamp < nextMonday
          ? ["declared", "not declared"][Math.floor(Math.random() * 2)]
          : "pending";
      const morningMode =
        declarationStatus === "declared"
          ? ["Télétravail", "Bureau", "Congés"][Math.floor(Math.random() * 3)]
          : "";
      const afternoonMode =
        declarationStatus === "declared"
          ? ["Télétravail", "Bureau", "Congés"][Math.floor(Math.random() * 3)]
          : "";
      const fixed = false;
      const isWeekend = timestamp.getDay() === 0 || timestamp.getDay() === 6;
      const isEnabled =
        nextWeek.includes(timestamp.toDateString()) && !isWeekend;
      const isNextMonday =
        timestamp.toDateString() === nextMonday.toDateString();

      dates.push({
        timestamp,
        date,
        isToday,
        hasPassed,
        declarationStatus,
        morningMode,
        afternoonMode,
        fixed,
        isEnabled,
        isWeekend,
        isNextMonday,
      });
      // if (isEnabled) {
      //   console.log(timestamp, "is enabled");
      // }
    }
    return dates;
  });

  const emptyDivs = fetchDayNumber(currentMonthList[0].timestamp);
  const emptyDivsNextMonth = fetchDayNumber(nextMonthFirstDate);

  const [prevMonth, setPrevMonth] = useState(() => {
    const prevMonth = [];
    for (let i = daysInPrevMonth; i > daysInPrevMonth - emptyDivs; i--) {
      const timestamp = new Date(currentYear, currentMonth - 1, i);
      const date = i;
      const isToday = false;
      const hasPassed = true;
      const isWeekend = timestamp.getDay() === 0 || timestamp.getDay() === 6;
      const declarationStatus = !isWeekend ? "declared" : "";
      const morningMode =
        declarationStatus === "declared"
          ? ["Télétravail", "Bureau", "Congés"][Math.floor(Math.random() * 3)]
          : "";
      const afternoonMode =
        declarationStatus === "declared"
          ? ["Télétravail", "Bureau", "Congés"][Math.floor(Math.random() * 3)]
          : "";
      const fixed = false;
      const isEnabled = false;

      prevMonth.push({
        timestamp,
        date,
        isToday,
        hasPassed,
        declarationStatus,
        morningMode,
        afternoonMode,
        fixed,
        isEnabled,
        isWeekend,
      });
    }
    return prevMonth.reverse();
  });
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="w-20 ">
          <img src="/Employee/cal.png" className="w-16 " />
        </div>
        <div className="font-medium text-[20px] my-auto ml-4 w-full">
          Planning de vos jours en télétravail/présentiel
        </div>
        <div className="flex flex-col text-right w-1/2">
          <div className="font-Poppins  xs:text-xl font-medium capitalize ">
            Calendrier
            <span className="text-[#7C8DB5] block">
              {!showNextMonth ? (
                <>{fetchMonth(today) + " " + currentYear}</>
              ) : (
                <>{fetchMonth(nextMonthFirstDate) + " " + currentYear}</>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex text-center my-auto space-x-4 mt-2">
          <button
            onClick={() => {
              setShowNextMonth(false);
            }}
            className="text-[#7C8DB5] rounded-lg mx-auto shadow py-0.5 px-2 xs:text-xl "
          >
            <IoChevronBack className="mx-auto" />
          </button>
          <button
            onClick={() => {
              setShowNextMonth(true);
            }}
            className="text-[#7C8DB5] rounded-lg mx-auto shadow py-0.5 px-2 xs:text-xl "
          >
            <IoChevronForward className="mx-auto" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 w-full text-center mt-6 ">
        {dayNames.map((dayName, index) => {
          return (
            <div
              className="font-Roboto font-medium text-xs text-[#2d3748]"
              key={index}
            >
              {dayName}
            </div>
          );
        })}

        {!showNextMonth
          ? emptyDivs > 0 &&
            prevMonth.map((date, index) => {
              const prevMode =
                index > 0 ? prevMonth[index - 1].morningMode : "";
              const nextMode =
                index < prevMonth.length - 1
                  ? prevMonth[index + 1].morningMode
                  : "";
              return (
                <div key={index}>
                  <DateCard
                    date={date}
                    fetchDate={fetchDate}
                    setClickedDate={setClickedDate}
                    openModal={openModal}
                    prevMode={prevMode}
                    nextMode={nextMode}
                    blurMonth
                  />
                </div>
              );
            })
          : emptyDivsNextMonth > 0 &&
            currentMonthList.map((date, index) => {
              if (index + emptyDivsNextMonth > currentMonthList.length - 1) {
                const prevMode =
                  index > 0 ? currentMonthList[index - 1].morningMode : "";
                const nextMode =
                  index < currentMonthList.length - 1
                    ? currentMonthList[index + 1].morningMode
                    : "";
                return (
                  <div key={index}>
                    <DateCard
                      key={index}
                      date={date}
                      fetchDate={fetchDate}
                      setClickedDate={setClickedDate}
                      openModal={openModal}
                      prevMode={prevMode}
                      nextMode={nextMode}
                      blurMonth
                    />
                  </div>
                );
              } else return <div key={index} />;
            })}

        {!showNextMonth
          ? currentMonthList.map((date, index) => {
              const prevMode =
                index > 0 ? currentMonthList[index - 1].morningMode : "";
              const nextMode =
                index < currentMonthList.length - 1
                  ? currentMonthList[index + 1].morningMode
                  : "";
              return (
                <div key={index}>
                  <DateCard
                    date={date}
                    fetchDate={fetchDate}
                    setClickedDate={setClickedDate}
                    openModal={openModal}
                    prevMode={prevMode}
                    nextMode={nextMode}
                  />
                </div>
              );
            })
          : nextMonthList.map((date, index) => {
              const prevMode =
                index > 0 ? nextMonthList[index - 1].morningMode : "";
              const nextMode =
                index < nextMonthList.length - 1
                  ? nextMonthList[index + 1].morningMode
                  : "";

              return (
                <div key={index}>
                  <DateCard
                    date={date}
                    fetchDate={fetchDate}
                    setClickedDate={setClickedDate}
                    openModal={openModal}
                    prevMode={prevMode}
                    nextMode={nextMode}
                  />
                </div>
              );
            })}

        {!showNextMonth &&
          nextMonthList.map((date, index) => {
            if (index < 7 - ((emptyDivs + daysInMonth) % 7)) {
              const prevMode =
                index > 0 ? nextMonthList[index - 1].morningMode : "";
              const nextMode =
                index < nextMonthList.length - 1
                  ? nextMonthList[index + 1].morningMode
                  : "";

              return (
                <div key={index}>
                  <DateCard
                    date={date}
                    fetchDate={fetchDate}
                    setClickedDate={setClickedDate}
                    openModal={openModal}
                    prevMode={prevMode}
                    nextMode={nextMode}
                    blurMonth
                  />
                </div>
              );
            } else return <div key={index} />;
          })}
      </div>

      {!showNextMonth ? (
        <ModeSelector date={clickedDate} setDate={setCurrentMonthList} />
      ) : (
        <ModeSelector date={clickedDate} setDate={setNextMonthList} />
      )}
    </div>
  );
}
