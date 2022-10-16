import React from "react";
import dynamic from "next/dynamic";
import Calendar from "./Calendar";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

export default function EmployeeContainerDesktop() {
  return (
    <div className="flex w-full space-x-6">
      <div className="flex flex-col w-[44%] space-y-6 my-6 items-center">
        <Calendar />
        <Card1 />
      </div>
      <div className="flex flex-col w-[56%]  space-y-6 my-6 items-center">
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </div>
  );
}
