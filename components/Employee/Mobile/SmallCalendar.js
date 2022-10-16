import React from "react";
export default function SmallCalendar() {
  const month = new Date().toLocaleString("fr", { month: "long" });
  const date = new Date().toLocaleString("fr", { day: "2-digit" });
  const day = new Date().toLocaleString("fr", { weekday: "long" });
  return (
    <>
      <div className="flex h-40 relative justify-center">
        <div
          className="relative flex my-auto justify-center items-center xs:rounded-[20px] xs:w-[77px] xs:h-[120px]
        w-[60px] h-[100px] rounded-xl"
          style={{
            background: "linear-gradient(205.81deg, #25F53A 0%, #555CFF 100%)",
          }}
        >
          <span className="text-white -rotate-90 tracking-widest capitalize font-medium font-Roboto text-base xs:text-lg">
            {month}
          </span>
        </div>
        <div className="my-auto">
          <div
            className="relative my-auto px-4 py-1.5 box-border xs:rounded-[20px] xs:-left-[5px] xs:w-[265.96px] xs:h-[124px]
          w-[200px] h-[104px] rounded-xl -left-2 "
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