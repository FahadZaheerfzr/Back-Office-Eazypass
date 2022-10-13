import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";

export default function DateCard({
  index,
  date,
  fetchDate,
  today,
  setClickedDate,
  openModal,
}) {
  return (
    <div
      className={`xs:text-center xs:pl-0 pl-3 text-left font-Poppins text-sm xs:text-[20px] relative xs:mb-4 mb-2 font-normal
  `}
      key={index}
    >
      <span
        className={`${
          date.isToday && "text-[#B2BBC8] bg-black rounded-full p-1"
        } `}
      >
        {fetchDate(date.timestamp)}
      </span>

      <span
        onClick={() => {
          if (date.isEnabled) {
            openModal();
            setClickedDate(date);
          }
        }}
      >
        {date.declarationStatus === "declared" ? (
          <BiCheckCircle
            className={`text-[#11A628] cursor-pointer absolute top-0 bottom-0 my-auto w-4
        ${
          date.timestamp.getDate() == today.getDate()
            ? "xs:-right-1.5 -right-1"
            : "right-0"
        }`}
          />
        ) : date.declarationStatus === "not declared" ? (
          <MdCancel
            className={`text-[#ff3b3b] cursor-pointer absolute top-0 bottom-0 my-auto w-4
        ${
          date.timestamp.getDate() == today.getDate() ? "-right-1.5" : "right-0"
        }`}
          />
        ) : (
          <BsFillQuestionCircleFill
            className={`text-[#F9CF00] cursor-pointer absolute top-0 bottom-0 my-auto w-4
        ${
          date.timestamp.getDate() == today.getDate() ? "-right-1.5" : "right-0"
        }`}
          />
        )}
      </span>
    </div>
  );
}
