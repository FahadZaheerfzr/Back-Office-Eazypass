import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export default function Card({
  title = "This is heading",
  desc = "Some desc",
  image = "/Employee/card2.svg",
  notis = 1,
  icon = null,
  redirect = null,
}) {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col bg-white my-6 pt-4 px-4 h-44
      xs:w-[390px] mx-auto rounded-2xl ${redirect && "cursor-pointer"}`}
      style={{ boxShadow: "0px 6px 20px rgba(14, 7, 51, 0.1)" }}
      onClick={() => {
        if (redirect) {
          router.push(redirect);
        }
      }}
    >
      <div className="flex font-Poppins font-bold justify-between ">
        <div className="text-xl  ">
          {title}
          {icon && <img src={icon} className="inline" />}
        </div>
        {notis > 0 && (
          <div className="bg-[#A6231C] text-xl my-auto p-1.5 rounded-full text-white">
            {notis}
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <div className="text-lg w-2/3 font-Roboto my-auto -translate-y-2 text-[#373737]">
          {desc}
        </div>
        <div className="flex text-2xl w-1/3 justify-end">
          <img src={image} alt="image" className="h-28" />
        </div>
      </div>
    </div>
  );
}
