import React from "react";
import styles from "./SmallCalendar.module.css";
export default function SmallCalendar() {
  const month = new Date().toLocaleString("fr", { month: "long" });
  const date = new Date().toLocaleString("fr", { day: "2-digit" });
  const day = new Date().toLocaleString("fr", { weekday: "long" });
  return (
    <>
      <div className="flex h-40 relative justify-center">
        <div className={`${styles.monthBox} xs:rounded-[20px] xs:w-[77px] xs:h-[120px]
        w-[60px] h-[100px] rounded-xl`}>
          <span
            className={`${styles.monthTxt} capitalize text-base xs:text-lg`}
          >
            {month}
          </span>
        </div>
        <div className="my-auto bg">
          <div className={`${styles.dayBox} xs:rounded-[20px] xs:-left-[5px] xs:w-[265.96px] xs:h-[124px]
          w-[200px] h-[104px] rounded-xl -left-2 `}>
            <div>
              <span className={`${styles.dayTxt} xs:text-xl capitalize`}>
                {day}
              </span>
              <span className={`${styles.dateTxt} xs:text-2xl`}>{date}</span>
            </div>
            <div className="flex  mt-2">
              <div className={`${styles.timeCheck} w-1/2`}>Matin</div>
              <div className={`${styles.timeCheck} w-1/2`}>Après-midi</div>
            </div>
            <div className="flex list-[circle] text-2xl">
              <div className="text-[#D0D312] w-1/2">
                <li>
                  <span className={`text-lg relative -left-4 ${styles.liTxt}`}>
                    Télétravail
                  </span>
                </li>
              </div>
              <div className="text-[#1400FF] w-1/2 ">
                <li>
                  <span className={`text-lg relative -left-4 ${styles.liTxt}`}>
                    Bureau
                  </span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
