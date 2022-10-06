import React from "react";
import Header from "../../components/Employee/Header";
import SmallCalendar from "./SmallCalendar";
import Places from "./Places";
import Avatar from "./Avatar";
import Card from "./Card";

export default function Employee() {
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
    {
      title: "Demande exceptionnelle",
      desc: "Soumettez une demande ponctuelle de télétravail ",
      image: "/Employee/card3.svg",
      notis: 1,
    },
    {
      title: "Documents à soumettre",
      desc: "Envoyez les pièces qui vous sont demandées par votre service RH",
      image: "/Employee/card4.svg",
      notis: 0,
    },
  ];

  return (
    <div className="md:hidden bg-gradient-to-b from-[rgb(255,255,255,0.66)] to-[#c4c4c479] px-2 sm:px-0 mx-auto pb-8">
      <Header />
      <SmallCalendar />
      <Places />
      <Avatar />
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
