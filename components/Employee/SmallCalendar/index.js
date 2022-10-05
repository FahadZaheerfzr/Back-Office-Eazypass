import React from "react";
import styles from "./SmallCalendar.module.css";
export default function SmallCalendar() {
  const month = new Date().toLocaleString("fr", { month: "long" });
  const date = new Date().toLocaleString("fr", { day: "2-digit" });
  const day = new Date().toLocaleString("fr", { weekday: "long" });
  return (
    <>
      <div className="flex h-40 relative ">
        {/* <div className="bg-gradient-to-bl font-Roboto rounded-3xl text-white font-bold w-20 from-[#25F53A] to-[#555CFF] ">
          <div className="-rotate-90 translate-y-full text-2xl bg-gray-700 w-fit">
            Month
          </div>
        </div>
        <div className="bg-slate-400 h-full  -z-10 w-64 absolute "></div> */}

        <div className={`${styles.monthBox}`}>
          <span className={`${styles.monthTxt} capitalize`}>{month}</span>
        </div>
        <div className={`${styles.dayBox}`}>
          <div>
            <span className={`${styles.dayTxt} capitalize`}>{day}</span>
            <span className={`${styles.dateTxt} `}>{date}</span>
          </div>
          <div className="flex  mt-2">
            <div className={`${styles.timeCheck} w-1/2`}>Matin</div>
            <div className={`${styles.timeCheck} w-1/2`}>Après-midi</div>
          </div>
          <div className="flex list-[circle] text-2xl">
            <div className="text-[#D0D312] w-1/2">
              <li>
                <span className={`text-lg relative -left-4 ${styles.liTxt}`}>Télétravail</span>
              </li>
            </div>
            <div className="text-[#1400FF] w-1/2 ">
              <li>
                <span className={`text-lg relative -left-4 ${styles.liTxt}`}>Bureau</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
