import React from "react";
import { useRouter } from "next/router";
export default function Card2() {
  const router = useRouter();

  return (
    <div
      className="flex p-6 flex-col w-full border border-[#e5e6e6] rounded-[10px] font-Poppins"
      style={{ boxShadow: "box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1);" }}
    >
      <div className="flex">
        <div className="w-16 ">
          <img src="/Employee/cal.png" className="w-16" />
        </div>
        <div className="font-medium text-[20px] my-auto ml-2 w-full text-left">
          Planning présentiel/bureau
        </div>
        <div className="w-16 ">
          <img src="/Employee/warning.png" className="w-14" />
        </div>
      </div>

      <div className="text-[#7C8DB5] my-4">
        Vous n’avez pas déclaré votre planning de la semaine
        <br />
        du lundi 29 avril 2022
      </div>
      <div className="flex justify-center">
        <div
          onClick={() => router.push("/employee/planner")}
          className="font-Roboto font-bold text-white text-[20px] rounded-lg py-1.5 px-8"
          style={{
            background:
              "linear-gradient(136.64deg, #59DD2B 1.59%, #282ECA 98.89%)",
          }}
        >
          <button>Déclarer</button>
        </div>
      </div>
    </div>
  );
}
