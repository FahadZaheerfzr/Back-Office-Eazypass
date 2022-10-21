import React from "react";
import Image from "next/image";
export default function index() {
  const places = 35;
  return (
    <div className=" bg-white flex flex-col xs:my-6 mx-auto items-center rounded-2xl w-full max-w-[420px] sm:max-w-md">
      <Image
        width={420}
        height={200}
        src="/Employee/placesBg.png"
        className="w-full rounded-t-2xl"
      />

      <div className="flex flex-row w-full mt-4 justify-evenly ">
        <div className="flex flex-col justify-center">
          <button className="bg-[#E51735] w-fit font-Roboto uppercase text-white font-semibold pl-1 pr-1.5 xs:text-base text-sm rounded">
            • Live
          </button>
        </div>
        <div className="font-light font-Roboto  xs:text-2xl">
          <span className="font-medium">{places} &nbsp;</span>
          places disponsibles
        </div>
      </div>
      <div className="w-11/12 my-4 rounded-full bg-[#E3E1E1]">
        <div
          className={` ${
            places <= 50
              ? "bg-[#76E234] "
              : places <= 75 && places > 50
              ? "bg-[#FFEB3B]"
              : "bg-[#F44336]"
          } text-xs h-3 xs:h-5 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${places}%` }}
        />
      </div>
    </div>
  );
}

/* Siège social - Paris VIIIe 2 */
