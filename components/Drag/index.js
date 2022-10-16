import React, { useState } from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import { FaCircle } from "react-icons/fa";

export default function DnD() {
  //  all parent containers have an array of objects with id and name
  // initially all items are in their parent container, they are being mapped inside the parent container
  // when an item is dragged, it is removed from the parent container and added to the droppable container

  const [isDragging, setIsDragging] = useState(false);
  const touchSensor = useSensor(TouchSensor);
  const mouseSensor = useSensor(MouseSensor);
  const sensors = useSensors(touchSensor, mouseSensor);
  const containers = ["bureau", "teletravail"];
  const [employeeChanged, setEmployeeChanged] = useState(false);
  const [items, setItems] = useState([
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
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className="flex flex-col mx-autojustify-center w-full text-center">
        <div className={`mx-auto font-semibold font-Inter text-base xs:text-xl `}>
          Planning soumis par votre équipe
        </div>

        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <div className="flex flex-col items-center ">
            <Droppable
              key={id}
              id={id}
              className="rounded-xl my-4 flex-col flex w-full max-w-[224px] xs:w-72 min-h-[120px] xs:min-h-[200px] "
            >
              <div
                className={`${
                  id === "bureau" ? "bg-[#347AE2]" : "bg-[#8572FF] "
                } mb-2 xs:mb-6 flex justify-center w-full font-normal text-center rounded-[10px] font-Poppins xs:text-xl text-white`}
              >
                <img
                  src={`/Employee/${id}.png`}
                  className="h-5 w-5 xs:h-7 xs:w-7"
                />
                <span className="mx-2 capitalize">{id}</span>
              </div>
              {items
                .filter((item) => item.container === id)
                .map((item) => (
                  <Draggable
                    key={item.id}
                    id={item.id}
                    data={item}
                    className="cursor-pointer font-normal rounded-lg text-left px-2 font-Poppins
                    text-xs xs:text-sm my-2 xs:my-3 shadow-xl w-fit left-12 xs:left-10 relative"
                  >
                    <div className={` `}>
                      <FaCircle
                        className={`inline-block text-[10px] text-white mr-2
                        ${
                          item.container == "bureau"
                            ? "text-[#347AE2]"
                            : "text-[#772AD8]"
                        }`}
                      />
                      {item.employeeName}
                    </div>
                  </Draggable>
                ))}
            </Droppable>
          </div>
        ))}

        {employeeChanged && (
          <div className="mx-auto mt-6">
            <button
              style={{
                background:
                  "linear-gradient(136.64deg, #59DD2B 1.59%, #282ECA 98.89%)",
              }}
              className="xs:mt-0 mt-4 text-white  xs:w-[146px] font-Roboto font-bold text-xl rounded-[10px] xs:px-0 px-8 xs:py-2 mx-auto"
              onClick={() => {
                setEmployeeChanged(false);
              }}
            >
              Valider
            </button>
          </div>
        )}
      </div>
    </DndContext>
  );

  function handleDragStart() {
    setIsDragging(true);
  }

  function handleDragEnd(event) {
    const prevId = event.active.data.current.container;
    const { over } = event;
    
    setIsDragging(false);
    if (over) {
      if (prevId !== over.id && !employeeChanged) {
        
        setEmployeeChanged(true);
      }

      setItems((items) =>
        items.map((item) => {
          if (item.id === event.active.id) {
            return { ...item, container: over.id };
          }
          return item;
        })
      );
    } else {
    }
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    // setParent(over ? over.id : null);
    setIsDragging(false);
  }
}
