import React from "react";

export default function Header() {
  return (
    <>
      {/* bg-slate-500 sm:bg-blue-500 xs:bg-purple-500 */}
      <div className="flex flex-col ">
        <div className="flex  justify-center">
          <div className="w-1/3 "> </div>
          <div className="pt-10 w-1/3 flex justify-center -slate-600">
            <img
              src={"/Login/Sans titre.svg"}
              width={200}
              height={100}
              layout={"fixed"}
            />
          </div>
          <div className="w-1/3 flex pt-6 pr-6 justify-end -slate-400">
            <img
              src={"/Employee/avatar.png"}
              className="xs:w-16 xs:h-16 h-12 w-12"
            />
          </div>
        </div>
      </div>
    </>
  );
}
