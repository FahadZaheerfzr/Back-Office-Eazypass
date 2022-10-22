import React, { useContext, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { ManagerContext } from "../../context/ManagerProvider";
import DnD from "./DesktopVersion";

const weekdays = [
  {
    id: 0,
    day: "Lundi",
  },
  {
    id: 1,
    day: "Mardi",
  },
  {
    id: 2,
    day: "Mercredi",
  },
  {
    id: 3,
    day: "Jeudi",
  },
  {
    id: 4,
    day: "Vendredi",
  },
]


export default function DesktopContainer({ option }) {
  const {fixed} = useContext(ManagerContext);
  const [employees, setEmployees] = useState([
    { id: "1", employeeName: "MURLO Franck", container: "teletravail" },
    { id: "2", employeeName: "COLEN  Christiane", container: "teletravail" },
    { id: "3", employeeName: "Druide Pascal", container: "teletravail" },
    { id: "4", employeeName: "Tattut Florent", container: "teletravail" },
    { id: "5", employeeName: "Garot Louise", container: "teletravail" },
    { id: "6", employeeName: "Fati Isma", container: "bureau" },
    { id: "7", employeeName: "Loutrin Hervé", container: "bureau" },
    { id: "8", employeeName: "Debra Laurent", container: "bureau" },
    { id: "9", employeeName: "Galo Maeva", container: "bureau" },
    { id: "10", employeeName: "Tarb Florence", container: "bureau" },
    { id: "11", employeeName: "Eclesia Sylvie", container: "bureau" },
    { id: "12", employeeName: "Diakité Mohammed", container: "bureau" },
  ]);

  const [employees2, setEmployees2] = useState([
    { id: "1", employeeName: "MURLO Franck", container: "bureau" },
    { id: "2", employeeName: "COLEN  Christiane", container: "bureau" },
    { id: "3", employeeName: "Druide Pascal", container: "bureau" },
    { id: "6", employeeName: "Fati Isma", container: "bureau" },
    { id: "4", employeeName: "Tattut Florent", container: "teletravail" },
    { id: "5", employeeName: "Garot Louise", container: "teletravail" },
    { id: "7", employeeName: "Loutrin Hervé", container: "bureau" },
    { id: "8", employeeName: "Debra Laurent", container: "bureau" },
    { id: "9", employeeName: "Galo Maeva", container: "bureau" },
    { id: "10", employeeName: "Tarb Florence", container: "bureau" },
    { id: "11", employeeName: "Eclesia Sylvie", container: "bureau" },
    { id: "12", employeeName: "Diakité Mohammed", container: "bureau" },
  ]);

  const [employees3, setEmployees3] = useState([
    { id: "1", employeeName: "MURLO Franck", container: "bureau" },
    { id: "2", employeeName: "COLEN  Christiane", container: "bureau" },
    { id: "3", employeeName: "Druide Pascal", container: "bureau" },
    { id: "4", employeeName: "Tattut Florent", container: "teletravail" },
    { id: "5", employeeName: "Garot Louise", container: "teletravail" },
    { id: "6", employeeName: "Fati Isma", container: "teletravail" },
    { id: "7", employeeName: "Loutrin Hervé", container: "teletravail" },
    { id: "8", employeeName: "Debra Laurent", container: "teletravail" },
    { id: "9", employeeName: "Galo Maeva", container: "teletravail" },
    { id: "10", employeeName: "Tarb Florence", container: "teletravail" },
    { id: "11", employeeName: "Eclesia Sylvie", container: "teletravail" },
    { id: "12", employeeName: "Diakité Mohammed", container: "teletravail" },
  ]);

  const [employees4, setEmployees4] = useState([
    { id: "1", employeeName: "MURLO Franck", container: "bureau" },
    { id: "2", employeeName: "COLEN  Christiane", container: "bureau" },
    { id: "3", employeeName: "Druide Pascal", container: "bureau" },
    { id: "4", employeeName: "Tattut Florent", container: "bureau" },
    { id: "5", employeeName: "Garot Louise", container: "bureau" },
    { id: "6", employeeName: "Fati Isma", container: "bureau" },
    { id: "7", employeeName: "Loutrin Hervé", container: "teletravail" },
    { id: "8", employeeName: "Debra Laurent", container: "teletravail" },
    { id: "9", employeeName: "Galo Maeva", container: "teletravail" },
    { id: "10", employeeName: "Tarb Florence", container: "teletravail" },
    { id: "11", employeeName: "Eclesia Sylvie", container: "teletravail" },
    { id: "12", employeeName: "Diakité Mohammed", container: "bureau" },
  ]);

  const [employees5, setEmployees5] = useState([
    { id: "1", employeeName: "MURLO Franck", container: "bureau" },
    { id: "2", employeeName: "COLEN  Christiane", container: "bureau" },
    { id: "3", employeeName: "Druide Pascal", container: "bureau" },
    { id: "4", employeeName: "Tattut Florent", container: "teletravail" },
    { id: "5", employeeName: "Garot Louise", container: "teletravail" },
    { id: "6", employeeName: "Fati Isma", container: "teletravail" },
    { id: "7", employeeName: "Loutrin Hervé", container: "teletravail" },
    { id: "8", employeeName: "Debra Laurent", container: "teletravail" },
    { id: "9", employeeName: "Galo Maeva", container: "teletravail" },
    { id: "10", employeeName: "Tarb Florence", container: "teletravail" },
    { id: "11", employeeName: "Eclesia Sylvie", container: "teletravail" },
    { id: "12", employeeName: "Diakité Mohammed", container: "teletravail" },
  ]);
  const [day1, setDay1] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
  });

  const [day2, setDay2] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 2);
    return date;
  });

  const [day3, setDay3] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
  });

  const [day4, setDay4] = useState(new Date());

  const [day5, setDay5] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  });

  const [dates, setDates] = useState([day1, day2, day3, day4, day5]);

  /* FETCH FUNCTIONS */
  // const fetchDay = (date) => {
  //     const day = date.toLocaleString("fr", { weekday: "short" });
  //     return day;
  //   };
  //   const fetchDate = (date) => {
  //     const dateNumber = date.toLocaleString("fr", { day: "2-digit" });
  //     return dateNumber;
  //   };
  const today = new Date();
  const fetchMonth = (date) => {
    const month = date.toLocaleString("fr", { month: "long" });
    return month;
  };

  const fetchYear = (date) => {
    const year = date.toLocaleString("fr", { year: "numeric" });
    return year;
  };

  const handleNext = () => {
    const newDates = dates.map((date) => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
    setDates(newDates);
  };

  const handlePrevious = () => {
    const newDates = dates.map((date) => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
    setDates(newDates);
  };

  if (option === false && fixed){
    return(
      <div className="mx-4">
        <div className="flex justify-between items-center">
          <span className="font-Poppins font-medium text-xl">
          Planning de l’équipe
          </span>

          <span className="box-shadow-style font-Poppins text-xs">
          Sauvegarder
          </span>
        </div>

        <div className="grid grid-cols-5 mt-8">
        {weekdays.map((weekday, index) => {
          return (
            <div
              suppressHydrationWarning={true}
              key={index}
              className="flex flex-col justify-center items-center mb-2"
            >
              {
                <>
                  <div
                    className={`font-Inter text-lg my-auto font-semibold capitalize`}>
                    {weekday.day}
                  </div>
                </>
              }
            </div>
          );
        })}


        <DnD items={employees} setItems={setEmployees} />
        <DnD items={employees2} setItems={setEmployees2} />
        <DnD items={employees3} setItems={setEmployees3} />
        <DnD items={employees4} setItems={setEmployees4} />
        <DnD items={employees5} setItems={setEmployees5} />
      </div>
      <div className="mt-4 mb-6 flex justify-center">
      <span className="box-shadow-style font-Poppins text-xs">
          Sauvegarder
          </span>
      </div>
      </div>
    )
  }
  return (
    <div className=" mx-4 mt-4">
      <div className="flex justify-between">
        <div className="font-Poppins text-xl font-medium capitalize">
          {fetchMonth(today) + " " + fetchYear(today)}
        </div>
        <div className="flex text-center my-auto space-x-8">
          {option &&
            <span className="font-Poppins box-shadow-style text-xs my-auto">
              Organiser une journée d'équipe
            </span>
          }

          <button
            onClick={handlePrevious}
            className="text-[#7C8DB5] rounded-lg mx-auto shadow py-1 px-4 text-xl "
          >
            <IoChevronBack className="mx-auto" />
          </button>
          <button
            onClick={handleNext}
            className="text-[#7C8DB5] rounded-lg mx-auto shadow py-1 px-4 text-xl "
          >
            <IoChevronForward className="mx-auto" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 mt-8">
        {dates.map((date, index) => {
          return (
            <div
              suppressHydrationWarning={true}
              key={index}
              className="flex flex-col justify-center items-center mb-2"
            >
              {
                <>
                  <div
                    className={`font-Inter text-lg my-auto font-semibold capitalize ${index === 3 && "px-4 py-1 bg-black text-white rounded-lg"
                      }`}
                  >
                    {date.toLocaleString("fr", { weekday: "short" }) +
                      " " +
                      date.toLocaleString("fr", { day: "2-digit" })}
                  </div>
                </>
              }
            </div>
          );
        })}


        <DnD items={employees} setItems={setEmployees} />
        <DnD items={employees2} setItems={setEmployees2} />
        <DnD items={employees3} setItems={setEmployees3} />
        <DnD items={employees4} setItems={setEmployees4} />
        <DnD items={employees5} setItems={setEmployees5} />
      </div>
    </div>
  );
}