import React, { useState } from "react";
import CalendarCarousel from "./CalendarCarousel";
import DnD from "../Drag";

export default function Container() {
  const [employees, setEmployees] = useState([
    { id: "1", employeeName: "Galo Maeva", container: "bureau" },
    { id: "2", employeeName: "Tarb Florence", container: "bureau" },
    { id: "3", employeeName: "Eclesia Sylvie", container: "bureau" },
    { id: "4", employeeName: "Diakité Mohammed", container: "bureau" },
    { id: "5", employeeName: "Druide Pascal", container: "teletravail" },
    { id: "6", employeeName: "Fati Isma", container: "teletravail" },
    { id: "7", employeeName: "Loutrin Hervé", container: "teletravail" },
    { id: "8", employeeName: "Debra Laurent", container: "teletravail" },
    { id: "9", employeeName: "Galo Maeva", container: "teletravail" },
    { id: "10", employeeName: "Tarb Florence", container: "teletravail" },
  ]);

  return (
    <div className="w-[90%]  max-w-none xs:max-w-[390px] rounded-xl p-2 sm:max-w-md mx-auto flex flex-col bg-white">
      <CalendarCarousel />
      <DnD items={employees} setItems={setEmployees} />
    </div>
  );
}