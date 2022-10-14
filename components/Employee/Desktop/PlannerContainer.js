import React, { useState } from "react";
import dynamic from "next/dynamic";

const PlannerCalendar = dynamic(() => import("./PlannerCalendar"), {
  ssr: false,
});

export default function PlannerContainer() {
  return (
    <div
      className="flex flex-col border border-[#E6E5E5] rounded-[10px] box-border p-6  mt-4"
      style={{ boxShadow: "4px 10px 20px rgba(0, 0, 0, 0.1)" }}
    >
      <PlannerCalendar />
    </div>
  );
}
