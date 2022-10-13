import React from "react";
import Avatar from "./Avatar";
export default function Card3() {
  const Avatars = [
    {
      name: "Esthera J",
      image: "https://i.pravatar.cc/300",
      border: "green",
    },
    {
      name: "Borris U",
      image: "https://i.pravatar.cc/300",
      border: "green",
    },
    {
      name: "Kay R",
      image: "https://i.pravatar.cc/300",
      border: "red",
    },
    {
      name: "Tom M",
      image: "https://i.pravatar.cc/300",
      border: "green",
    },
  ];

  return (
    <div
      className="flex p-3 flex-col  border border-[#e5e6e6] rounded-[10px] font-Poppins w-full"
      style={{ boxShadow: "box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1);" }}
    >
      <div className="flex">
        <div className="w-16 ">
          <img src="/Employee/card3.png" className="w-16" />
        </div>
        <div className="font-medium text-[20px] my-auto ml-2">
          Mes collègues présents au bureau{" "}
        </div>
      </div>
      <div
        className="flex my-6 justify-between px-2"
        style={{
          fontFamily: "Aclonica",
        }}
      >
        <div className="flex text-xs flex-col text-[#A0AEC0]">
          <div
            className="text-white text-2xl font-Roboto h-16 w-16 flex flex-col items-center justify-center border border-[#e5e6e6] rounded-full"
            style={{
              background:
                "linear-gradient(136.64deg, #3AEB2A 1.59%, #5786E3 98.89%)",
            }}
          >
            +
          </div>
        <span className="mt-2">

          Voir plus
        </span>
        </div>

        {
            Avatars.map((avatar,index) => (
                <Avatar key={index} name={avatar.name} image={avatar.image} border={avatar.border} />
            ))

        }
      </div>
    </div>
  );
}
/* Ellipse 51 */
