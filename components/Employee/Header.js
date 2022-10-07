import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <>
    {/* bg-slate-500 sm:bg-blue-500 xs:bg-purple-500 */}
      <div className="flex flex-col ">
        <div className="flex  justify-center">
          <div className="w-1/3"> </div>
          <div className="pt-6 w-1/3 flex justify-center">
            <Image
              src={"/Login/Sans titre.svg"}
              width={200}
              height={100}
              layout={"fixed"}
            />
          </div>
          <div className="w-1/3 pr-6 pt-6 flex justify-end">
            <Image
              src={"/Employee/avatar.png"}
              width={60}
              height={60}
              layout={"fixed"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
