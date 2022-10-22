import React, { useState } from "react";
import Image from "next/image";
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

export default function DnD({ items, setItems }) {
  //  all parent containers have an array of objects with id and name
  // initially all items are in their parent container, they are being mapped inside the parent container
  // when an item is dragged, it is removed from the parent container and added to the droppable container

  const [isDragging, setIsDragging] = useState(false);
  const touchSensor = useSensor(TouchSensor);
  const mouseSensor = useSensor(MouseSensor);
  const sensors = useSensors(touchSensor, mouseSensor);
  const containers = ["teletravail", "bureau"];
  const teletravailCount = items.filter(
    (item) => item.container === "teletravail"
  ).length;
  const bureauCount = items.filter(
    (item) => item.container === "bureau"
  ).length;

  //   const [employeeChanged, setEmployeeChanged] = useState(false);

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className="flex flex-col mx-autojustify-center w-full text-center">
        {containers.map((id, index) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <div className="flex flex-col items-center " key={index}>
            <Droppable
              key={id}
              id={id}
              className="rounded-xl my-4 flex-col flex w-full max-w-[224px]"
            >
              <div
                className={`${
                  id === "bureau" ? "bg-[#1C93D6]" : "bg-[#8572FF] "
                } mx-auto mb-6 flex justify-between font-normal text-center rounded-[10px] font-Poppins text-white px-2 `}
              >
                <div className="flex ">
                  <Image
                  width={30}
                    height={20}

                    src={`/Employee/${id}.png`}
                    className="h-7 w-7 hidden lg:inline"
                  />
                </div>
                <div className="mx-2 capitalize text-sm xl:text-lg my-auto font-Poppins">
                  {id}
                </div>

                <div className="text-white bg-black rounded-full px-2 py-0.5 text-sm my-auto">
                  {id === "bureau" ? bureauCount : teletravailCount}
                </div>
              </div>
              {items
                .filter((item) => item.container === id)
                .map((item) => (
                  <Draggable
                    key={item.id}
                    id={item.id}
                    data={item}
                    className="cursor-pointer font-normal rounded-lg text-left px-2 font-Poppins
                    text-sm my-3 shadow-xl w-fit left-4 lg:left-12 relative"
                  >
                    <div className="">
                      <FaCircle
                        className={`inline-block text-[10px]  text-white mr-2
                        ${
                          item.container == "bureau"
                            ? "text-[#347AE2]"
                            : "text-[#772AD8]"
                        }`}
                      />
                      <span className="lg:text-base">

                      {item.employeeName}
                      </span>
                    </div>
                  </Draggable>
                ))}
            </Droppable>
          </div>
        ))}
      </div>
    </DndContext>
  );

  function handleDragStart() {
    setIsDragging(true);
  }

  function handleDragEnd(event) {
    // const prevId = event.active.data.current.container;
    const { over } = event;
    console.log("over", over);
    setIsDragging(false);
    if (over) {
      //   if (prevId !== over.id && !employeeChanged) {
      //     console.log("first");
      //     setEmployeeChanged(true);
      //   }

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
