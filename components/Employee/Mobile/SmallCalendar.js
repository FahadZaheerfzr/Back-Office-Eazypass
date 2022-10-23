import React from "react";
export default function SmallCalendar() {
  const month = new Date().toLocaleString("fr", { month: "long" });
  const date = new Date().toLocaleString("fr", { day: "2-digit" });
  const day = new Date().toLocaleString("fr", { weekday: "long" });
  return (
    <>
      <div className="flex h-40 xs:h-60 relative justify-center xs:max-w-[390px] mx-auto mb-8 xs:mb-0">
        <div
          className="relative flex my-auto justify-center items-center xs:rounded-[20px] xs:w-1/4 xs:h-[180px]
        w-[60px] h-[140px] rounded-xl   "
          style={{
            background: "linear-gradient(205.81deg, #25F53A 0%, #555CFF 100%)",
          }}
        >
          <span className="text-white -rotate-90 tracking-widest capitalize font-medium font-Roboto text-base xs:text-lg">
            {month}
          </span>
        </div>
        <div className="my-auto w-3/4">
          <div
            className="relative my-auto px-4 py-1.5 box-border xs:rounded-[20px] xs:-left-[5%] w-full xs:h-[184px]
           h-[144px] rounded-xl -left-2 flex flex-col justify-evenly"
            style={{
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.41) 100%)",
              backdropFilter: "blur(25px)",
            }}
          >
            <div>
              <span className="font-Roboto font-medium text-black block text-sm xs:text-xl capitalize">
                {day}
              </span>
              <span className="font-Roboto font-medium text-black xs:text-2xl">
                {date}
              </span>
            </div>
            <div className="flex my-1 xs:my-0">
              <div className="font-Roboto text-[#787878] xs:text-base text-xs font-medium w-1/2">
                Matin
              </div>
              <div className="font-Roboto text-[#787878] xs:text-base text-xs font-medium w-1/2">
                Après-midi
              </div>
            </div>
            <div className="flex list-[circle] text-sm xs:text-2xl">
              <div className="text-[#D0D312] w-1/2">
                <li>
                  <span className="relative -left-2 xs:-left-4 font-Roboto xs:text-[15px] text-xs  text-[#5a3a3a]">
                    Télétravail
                  </span>
                </li>
              </div>
              <div className="text-[#1400FF] w-1/2 ">
                <li>
                  <span className="relative -left-2 xs:-left-4 font-Roboto xs:text-[15px] text-xs  text-[#5a3a3a]">
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