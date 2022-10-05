import React from "react";
export default function index() {
  const places = 35;
  return (
    <div className="flex flex-col my-6 mx-auto items-center rounded-2xl w-full">
      <div className="h-60 w-full  bg-no-repeat bg-cover bg-center bg-[url('/Employee/placesBg.svg')] rounded-t-2xl"></div>
      <div className="flex flex-row w-full mt-4 justify-evenly">
        <div className=" ">
          <button className="bg-[#E51735] w-fit font-Roboto uppercase text-white font-semibold  px-1 rounded">
            • Live
          </button>
        </div>
        <div className="  text-xl">
          <span className="font-bold">{places} &nbsp;</span>
          places disponsibles
        </div>
      </div>
      <div class="w-10/12 my-4 rounded-full bg-[#E3E1E1]">
        {places <= 50 && (
          <div
            class="bg-[#76E234] text-xs h-5 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${places}%` }}
          />
        )}
                {places <= 75 && places > 50 && (
          <div
            class="bg-[#FFEB3B] text-xs h-5 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${places}%` }}
          />
        )}
                {places > 75 && (
          <div
            class="bg-[#F44336] text-xs h-5 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${places}%` }}
          />
        )}
      </div>
    </div>
  );
}

/* Siège social - Paris VIIIe 2 */
