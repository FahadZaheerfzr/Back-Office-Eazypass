import React, { useState } from "react";

export default function ModeSelector({date, setDate }) {
  const [morning, setMorning] = useState("");
  const [noon, setNoon] = useState("");
  const dateIs = date.timestamp.toLocaleDateString("fr", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col space-y-4 mt-4">
      <div className="flex font-Poppins font-medium w-full justify-between">
        <div className="text-[20px] capitalize">{dateIs}</div>
        <div>Jours de télétravail restants : 3/3 </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-2/5 space-y-2 ">
          <div className="font-Roboto font-medium text-2xl text-[#787878] pl-2">
            Matin
          </div>
          <div className="flex  justify-start text-[20px] space-x-8">
            <button
              onClick={() => {
                
                setMorning("Télétravail");
              }}
              className="font-normal font-Roboto h-10 w-2/5 rounded-[20px] text-white"
              style={{
                background:
                  morning === "Télétravail" || morning === ""
                    ? "linear-gradient(263.44deg, #309AD6 0%, #2B54E6 220.87%)"
                    : "#C5E0DA",
              }}
            >
              Télétravail
            </button>
            <button
              onClick={() => {
                
                setMorning("Bureau");
              }}
              className="font-normal font-Roboto h-10 w-2/5 rounded-[20px] text-white"
              style={{
                background:
                  morning === "Bureau" || morning === ""
                    ? "linear-gradient(263.44deg, #4EDAB8 0%, #2B54E6 220.87%)"
                    : "#C5E0DA",
              }}
            >
              Bureau
            </button>
          </div>
        </div>
        <div className="flex flex-col w-2/5 space-y-2 ">
          <div className="font-Roboto font-medium text-2xl text-[#787878] pl-2">
            Après-midi
          </div>
          <div className="flex  justify-start text-[20px] space-x-8">
            <button
              onClick={() => {
                
                setNoon("Télétravail");
              }}
              className="font-normal font-Roboto h-10 w-2/5 rounded-[20px] text-white"
              style={{
                background:
                  noon === "Télétravail" || noon === ""
                    ? "linear-gradient(263.44deg, #309AD6 0%, #2B54E6 220.87%)"
                    : "#C5E0DA",
              }}
            >
              Télétravail
            </button>
            <button
              onClick={() => {
                
                setNoon("Bureau");
              }}
              className="font-normal font-Roboto h-10 w-2/5 rounded-[20px] text-white"
              style={{
                background:
                  noon === "Bureau" || noon === ""
                    ? "linear-gradient(263.44deg, #4EDAB8 0%, #2B54E6 220.87%)"
                    : "#C5E0DA",
              }}
            >
              Bureau
            </button>
          </div>
        </div>
        <div className="w-1/5 flex flex-col items-end justify-end">
            <button
              onClick={() => {
                
                setDate((current) =>
                  current.map((obj) => {
                    if (obj.date === date.date) {
                      return {
                        ...obj,
                        morningMode: morning,
                        noonMode: noon,
                        declarationStatus: "declared",
                      };
                    }

                    return obj;
                  })
                );
                
                setMorning("");
                setNoon("");
              }}
              className="font-Roboto font-bold text-[20px] h-10 text-white rounded-lg w-4/5"
              style={{
                background:
                  "linear-gradient(136.64deg, #59DD2B 1.59%, #282ECA 98.89%)                            ",
              }}
            >
              Confirmer
            </button>
        </div>
      </div>
    </div>
  );
}
