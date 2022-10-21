import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const Donut = dynamic(() => import("./Donut"), {
  ssr: false,
});

export default function Card4() {
  return (
    <div
      className="flex p-3  border border-[#e5e6e6] rounded-[10px] font-Poppins w-full"
      style={{ boxShadow: "box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex flex-col w-3/5 ">
        <div className="flex">
          <div className="w-16 ">
            <Image
              width={60}
              height={60}
              src="/Employee/card4.png"
              className="w-16"
            />
          </div>
          <div className="font-medium text-[20px] my-auto ml-2">
            Evergreen building - Paris
          </div>
        </div>
        <div className="mt-8 flex px-2 font-medium font-Poppins text-black">
          <div
            className="w-4 h-[18px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #77D556 0%, rgba(55, 91, 218, 0.94) 78.44%)",
            }}
          />

          <div className="ml-3">Places disponibles</div>
        </div>

        <div className="my-6 flex px-2 font-medium font-Poppins text-black">
          <div className="w-4 h-[18px] rounded-full bg-[#CBD5E0]" />
          <div className="ml-3">Places occupées</div>
        </div>
      </div>
      <div className=" w-2/5">
        <Donut />
      </div>
    </div>
  );
}
