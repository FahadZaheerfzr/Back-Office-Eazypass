import React from "react";
import Header from "../../components/Employee/Header";
import Container from "../../components/Manager/Container";

export default function Calendar() {
  return (
    <div className="bg-gradient-to-b from-[rgb(255,255,255,0.66)] to-[#c4c4c479] pb-20">
      <Header />
      <Container />
    </div>
  );
}
