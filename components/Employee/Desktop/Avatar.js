import React from "react";
import Image from "next/image";

export default function Avatar({ name, image, border }) {
  return (
    <div className="flex flex-col items-center text-[#A0AEC0] text-xs capitalize ">
      <div
        className={`flex flex-col items-center justify-center w-16 h-16  rounded-full 
        ${
          border === "green"
            ? "border border-[#3AEB2A]"
            : "border border-[#F44336]"
        }
        `}
      >
        <Image
          width={50}
          height={50}
          className="inline-block rounded-full "
          src={image}
          alt="image"
        />
      </div>
      <span className="mt-2">{name}</span>
    </div>
  );
}
