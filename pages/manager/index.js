import React from "react";
import Header from "../../components/Employee/Header";
import ManagerCalendar from "../../components/Manager/ManagerCalendar";
import Card from "../../components/Employee/Card";

export default function Manager() {
    const Cards = [
        {
          title: "Télétravail",
          desc: "Déclarez votre présence au bureau ou en télétravail chaque semaine.",
          image: "/Employee/card1.svg",
          notis: 0,
          icon: "/Employee/bell.svg",
        },
        {
          title: "Déclarer son planning",
          desc: "Déclarez votre présence au bureau et en télétravail",
          image: "/Employee/card2.svg",
          notis: 2,
        },
      ];

  return (
    <div className="bg-gradient-to-b from-[rgb(255,255,255,0.66)] to-[#c4c4c479]">
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
        />
      ))}
    </div>
  );
}
