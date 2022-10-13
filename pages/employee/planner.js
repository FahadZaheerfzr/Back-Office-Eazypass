import React from "react";
import dynamic from "next/dynamic";
import Header from "../../components/Planner/Header";
import Return from "../../components/Planner/Return";
export default function Planner() {
  const Calendar = dynamic(() => import("../../components/Planner/Calendar"), {
    ssr: false,
  });
  return (
    <div>
      <Header />
      <Calendar />
      <Return />
    </div>
  );
}
