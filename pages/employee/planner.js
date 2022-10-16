import React from "react";
import dynamic from "next/dynamic";
import Header from "../../components/Planner/Header";
import Return from "../../components/Planner/Return";
import PlannerLayout from "../../components/Employee/Desktop/PlannerLayout";
import Head from "next/head";

const Calendar = dynamic(() => import("../../components/Planner/Calendar"), {
  ssr: false,
});

export default function Planner() {
  
  return (
    <>
      <Head>
      <title>Employee</title>
      </Head>
   
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
    </>
  );
}
