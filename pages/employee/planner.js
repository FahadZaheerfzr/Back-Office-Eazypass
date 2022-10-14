import React from "react";
import dynamic from "next/dynamic";
import Header from "../../components/Planner/Header";
import Return from "../../components/Planner/Return";
import PlannerLayout from "../../components/Employee/Desktop/PlannerLayout";
export default function Planner() {
  const Calendar = dynamic(() => import("../../components/Planner/Calendar"), {
    ssr: false,
  });
  return (
    <div>
      <div className="md:hidden">
        <Header />
        <Calendar />
        <Return />
      </div>
      <div className="hidden md:block">
        <PlannerLayout />
      </div>
    </div>
  );
}
