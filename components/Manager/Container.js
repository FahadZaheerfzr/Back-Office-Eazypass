import React, { useState } from "react";
import CalendarCarousel from "./CalendarCarousel";
import DnD from "../Drag";
export default function Container() {
  return (
    <div className="w-[90%]  max-w-none xs:max-w-[390px] rounded-xl p-2 sm:max-w-md mx-auto flex flex-col bg-white">
      <CalendarCarousel />
      <DnD />
    </div>
  );
}
