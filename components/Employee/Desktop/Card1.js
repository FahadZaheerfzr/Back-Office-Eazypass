import React from "react";

export default function Card1() {
  return (
    <div
      className="flex p-3 flex-col  border border-[#e5e6e6] rounded-[10px] font-Poppins w-full"
      style={{ boxShadow: "box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1);" }}
    >
      <div className="flex">
        <div className="h-16 ">
          <img src="/Employee/card1.png" className="w-16" />
        </div>
        <div className="font-medium text-[20px] my-auto ml-2">
          Demande ponctuelle - télétravail
        </div>
      </div>

      <div className="text-[#7C8DB5] ">
        Soumettez à votre manager une demande exceptionnelle de télétravail
      </div>
      <div className="flex justify-end">
        <div
          className="font-Roboto font-bold text-white text-[20px] rounded-lg py-1.5 px-4"
          style={{
            background:
              "linear-gradient(136.64deg, #59DD2B 1.59%, #282ECA 98.89%)",
          }}
        >
            <button>Soumettre</button>
        </div>
      </div>
    </div>
  );
}
