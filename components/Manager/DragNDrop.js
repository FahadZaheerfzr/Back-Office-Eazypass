import React, { Component } from "react";
import { FaCircle } from "react-icons/fa";

export default class ToDoDragDropDemo extends Component {
  state = {
    employees: [
      {
        id: "1",
        employeeName: "Galo Maeva",
        type: "bureau",
      },
      {
        id: "2",
        employeeName: "Tarb Florence",
        type: "bureau",
      },
      {
        id: "3",
        employeeName: "Eclesia Sylvie",
        type: "bureau",
      },
      {
        id: "4",
        employeeName: "Diakité Mohammed",
        type: "bureau",
      },
      {
        id: "5",
        employeeName: "Druide Pascal",
        type: "teletravail",
      },
      {
        id: "6",
        employeeName: "Fati Isma",
        type: "teletravail",
      },
      {
        id: "7",
        employeeName: "Loutrin Hervé",
        type: "teletravail",
      },
      {
        id: "8",
        employeeName: "Debra Laurent",
        type: "teletravail",
      },
      {
        id: "9",
        employeeName: "Galo Maava",
        type: "teletravail",
      },
      {
        id: "10",
        employeeName: "Tarb Florence",
        type: "teletravail",
      },
    ],
  };
  onDragStart = (event, employeeName) => {
    console.log("dragstart on div: ", employeeName);
    event.dataTransfer.setData("employeeName", employeeName);
  };
  onDragOver = (event) => {
    event.preventDefault();
  };

  onDrop = (event, cat) => {
    let employeeName = event.dataTransfer.getData("employeeName");

    let employees = this.state.employees.filter((employee) => {
      if (employee.employeeName == employeeName) {
        employee.type = cat;
      }
      return employee;
    });

    this.setState({
      ...this.state,
      employees,
    });
  };
  render() {
    var employees = {
      bureau: [],
      teletravail: [],
    };

    this.state.employees.forEach((employee) => {
      employees[employee.type].push(
        <div
          key={employee.id}
          onDragStart={(event) =>
            this.onDragStart(event, employee.employeeName)
          }
          draggable
          className={`ml-[20%] cursor-pointer font-normal rounded-lg
            text-left px-2 font-Poppins text-sm my-5`}
        >
          <FaCircle
            className={`inline-block text-[10px] text-white mr-2
          ${employee.type == "bureau" ? "text-[#347AE2]" : "text-[#772AD8]"}`}
          />
          {employee.employeeName}
        </div>
      );
    });

    return (
      <div className="flex flex-col mx-auto bg-blue-40 justify-center">
        <div className={`mx-auto font-Inter text-xl`}>
          Planning soumis par votre équipe
        </div>
        <div className="flex flex-col bg-green-40 my-4">
          <div
            className={`mb-6 flex justify-center font-normal text-center bg-[#347AE2] rounded-[10px] font-Poppins text-xl text-white`}
          >
            <img src="/Employee/bureau.png" className="h-7 w-7" />
            <span className="mx-2">Bureau</span>
          </div>

          <div
            className={`min-h-[100px] bg-pink-40 `}
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => {
              this.onDrop(event, "bureau");
            }}
          >
            {employees.bureau}
          </div>
        </div>

        <div className="flex flex-col bg-yellow-40 my-4">
          <div
            className={`mb-6 flex justify-center font-normal text-center bg-[#8572FF] rounded-[10px] font-Poppins text-xl text-white`}
          >
            <img src="/Employee/teletravail.png" className="h-7 w-7" />
            <span className="mx-2">Télétravail</span>
          </div>

          <div
            className={`min-h-[100px] bg-slate-40 `}
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "teletravail")}
          >
            {employees.teletravail}
          </div>
        </div>
        <div className="mx-auto">
            <button 
            style={{background: "linear-gradient(136.64deg, #59DD2B 1.59%, #282ECA 98.89%)"}}
            className=" text-white w-[146px] font-Roboto font-bold text-xl rounded-[10px] px-4 py-2 mx-auto">Valider</button>
        </div>
      </div>
    );
  }
}

/* Rectangle 68 */
/* Bureau */
