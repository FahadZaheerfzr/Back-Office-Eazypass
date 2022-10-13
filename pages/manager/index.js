import React from "react";
import Header from "../../components/Employee/Header";
import ManagerCalendar from "../../components/Manager/ManagerCalendar";
import Card from "../../components/Employee/Card";

export default function Manager() {
    const Cards = [
        {
          title: "Plannings de télétravail",
          desc: "Révisez les déclarations télétravail/présentiel de votre équipe.",
          image: "/Employee/card3.svg",
          notis: 1,
          redirect: "/manager/calendar",
        },
        {
          title: "Demandes exceptionnelles",
          desc: "Approuvez ou refusez les demandes ponctuelles de jours en télétravail.",
          image: "/Employee/card4.svg",
          notis: 0,
        },
      ];

  return (
    <div className="bg-gradient-to-b from-[rgb(255,255,255,0.66)] to-[#c4c4c479] ">
      <div className="mx-2">
      <Header />
      <ManagerCalendar/>
      {Cards.map((card, index) => (
        <Card
          index={index}
          key={index}
          title={card.title}
          desc={card.desc}
          image={card.image}
          notis={card.notis}
          icon={card.icon}
          redirect={card.redirect}
        />
      ))}
    </div>
    </div>
  );
}
