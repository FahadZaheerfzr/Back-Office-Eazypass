import React from "react";
import Image from "next/image";
import BackArrow from "./BackArrow";
export default function Header({ showBack }) {
  return (
    <>
      <div className="flex flex-col ">
        {showBack && <BackArrow />}
        <div className="flex  justify-center">
          <div className="w-1/3 "> </div>
          <div className="pt-10 w-1/3 flex justify-center">
            <Image
              src={"/Login/Sans titre.svg"}
              width={200}
              height={100}
              layout={"fixed"}
            />
          </div>
          <div className="w-1/3 flex pt-6 pr-6 justify-end ">
            <span className="hidden xs:flex">
              <Image
                width={60}
                height={60}
                layout={"fixed"}
                src={"/Employee/avatar.png"}
              />
            </span>
            <span className=" xs:hidden translate-y-6">
              <Image
                width={40}
                height={40}
                layout={"fixed"}
                src={"/Employee/avatar.png"}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
