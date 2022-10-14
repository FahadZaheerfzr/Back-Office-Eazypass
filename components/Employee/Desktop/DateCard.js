import React from "react";

export default function DateCard({
  date,
  setClickedDate,
  fetchDate,
  openModal,
  emptydiv,
  nextMode,
  prevMode,
  blurMonth = false,
}) {
  return (
    <>
      {!emptydiv ? (
        <div
          className={` h-[86px] flex flex-col items-center text-center border font-medium font-Roboto text-[#2d3748] space-y-6
           ${date.isWeekend ? "bg-[#fcfcfc]" : "bg-white"}
            ${date.isEnabled && "cursor-pointer"}
         
          `}
          onClick={() => {
            if (date.isEnabled) {
              openModal();
              console.log("date is clicked");
              setClickedDate(date);
            }
          }}
        >
          <div
            className={`${
              date.isToday &&
              "w-6 h-6 rounded-full bg-[#AB091C] text-white flex flex-col justify-center text-center"
            }
            
            ${blurMonth && "text-[#a0aec0]"}
            `}
          >
            {fetchDate(date.timestamp)}
          </div>
          {date.morningMode && (
            <div
              className={`flex w-full justify-center items-center text-white text-xs font-Poppins font-normal
            ${date.morningMode !== nextMode ? "pr-4" : ""}
            ${date.morningMode !== prevMode ? "pl-4" : ""}
            `}
            >
              <div
                className={` w-full h-5 flex justify-center 
              ${
                date.morningMode === "Bureau"
                  ? "bg-[#347AE2]"
                  : date.morningMode === "Télétravail"
                  ? "bg-[#8572FF]"
                  : "bg-[#AA8A18]"
              }
              ${date.morningMode !== nextMode ? "rounded-r-full" : ""}
              ${date.morningMode !== prevMode ? "rounded-l-full" : ""}
            `}
              >
                <div className="my-auto">
                  <img
                    src={`/Employee/${
                      date.morningMode === "Congés"
                        ? "conges"
                        : date.morningMode === "Télétravail"
                        ? "teletravail"
                        : "bureau"
                    }.png`}
                    className="w-6 h-4 inline-block"
                  />
                  <span className="xl:inline hidden ">
                    {date.morningMode !== "" && date.morningMode}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className=" h-[86px] items-center text-center border font-medium font-Roboto text-[#2d3748]"></div>
      )}
    </>
  );
}
