import React from "react";
export default function index() {
  const places = 35;
  return (
    <div className=" bg-white flex flex-col my-6 mx-auto items-center rounded-2xl w-full max-w-[420px] sm:max-w-md">

      <img src="/Employee/placesBg.png"  className="w-full rounded-t-2xl" />
      
      <div className="flex flex-row w-full mt-4 justify-evenly">
        <div className="my-auto">
          <button className="bg-[#E51735] w-fit font-Roboto uppercase text-white font-semibold px-1 rounded">
            • Live
          </button>
        </div>
        <div className="  text-2xl">
          <span className="font-bold">{places} &nbsp;</span>
          places disponsibles
        </div>
      </div>
      <div className="w-11/12 my-4 rounded-full bg-[#E3E1E1]">
        {places <= 50 && (
          <div
            className="bg-[#76E234] text-xs h-5 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${places}%` }}
          />
        )}
                {places <= 75 && places > 50 && (
          <div
            className="bg-[#FFEB3B] text-xs h-5 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${places}%` }}
          />
        )}
                {places > 75 && (
          <div
            className="bg-[#F44336] text-xs h-5 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${places}%` }}
          />
        )}
      </div>
    </div>
  );
}

/* Siège social - Paris VIIIe 2 */
