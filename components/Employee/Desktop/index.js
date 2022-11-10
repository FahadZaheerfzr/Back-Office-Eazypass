import React, { useState } from "react";
import Topbar from "../../Dashboard/Topbar/ProfileBar";
import Sidebar from "../../Dashboard/Sidebar/Navbar";
import Settings from "../../Dashboard/Mains/Settings";
import EmployeeContainerDesktop from "./EmployeeContainerDesktop";

const pageHeadingText = {
  Télétravail: {
    heading: "Bienvenue à nouveau, Maxime",
    description:
      "Déclarez votre planning télétravail/présentiel et réservez votre place au bureau",
    icon: "",
    component: <EmployeeContainerDesktop />,
  },
  Paramètres: {
    heading: "Paramètres",
    description: "Configurez vos préférences",
    icon: "/Dashboard/Sidebar/settings-black.svg",
    component: <Settings />,
  },
};
const nav_items = [
  {
    id: 1,
    name: "Télétravail",
    "icon-active": "/Dashboard/Sidebar/case-black.svg",
    icon: "/Dashboard/Sidebar/case.svg",
    unread: 0,
  },
  {
    id: 5,
    name: "Paramètres",
    "icon-active": "/Dashboard/Sidebar/settings-black.svg",
    icon: "/Dashboard/Sidebar/settings.svg",
    unread: 0,
  },
];
export default function Desktop() {
  const [active, setActive] = useState("Télétravail");
  const [visible, setVisible] = useState(false);
  const handleClick = (name) => {
    setActive(name);
  };
  
  return (
    <div>
      <div
        className={`bg-white md:fixed z-40 ${
          visible ? "md:block" : "md:hidden"
        } lg:block md:w-[30%] lg:w-[20%] lg:fixed`}
      >
        <Sidebar
          handleClick={handleClick}
          active={active}
          nav_items={nav_items}
        />
      </div>

      <div className="md:w-[100%] h-screen lg:w-[80%] lg:ml-[20%]">
        <Topbar
          name={pageHeadingText[active].heading}
          description={pageHeadingText[active].description}
          icon={pageHeadingText[active].icon}
        />
        <div className="px-[5%]">{pageHeadingText[active].component}</div>
      </div>
      
    </div>
  );
}
