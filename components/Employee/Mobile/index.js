import React from "react";
import Header from "./Header";
import SmallCalendar from "./SmallCalendar";
import Places from "./Places";
import Avatars from "./Avatar";
import Card from "./Card";

export default function Mobile() {
  const Cards = [
    {
      title: "Déclarer son planning",
      desc: "Déclarez votre présence au bureau et en télétravail",
      image: "/Employee/card2.svg",
      notis: 2,
      redirect: "/employee/planner",
    },
    {
      title: "Demande exceptionnelle",
      desc: "Soumettez une demande ponctuelle de télétravail ",
      image: "/Employee/card3.svg",
      notis: 1,
      redirect: "/employee/calendar",
    },
    {
      title: "Documents à soumettre",
      desc: "Envoyez les pièces qui vous sont demandées par votre service RH",
      image: "/Employee/card4.svg",
      notis: 0,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[rgb(255,255,255,0.66)] to-[#c4c4c479] px-2 sm:px-0 mx-auto pb-8">
      <Header />
      <SmallCalendar />
      <Places />
      <Avatars />
      {Cards.map((card, index) => (
        <Card
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
  );
}
