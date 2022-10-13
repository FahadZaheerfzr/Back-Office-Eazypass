import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    // color: isOver ? "green" : undefined,
    backgroundColor: isOver ? "rgba(209, 209, 209, 0.25)" : undefined,

  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${props.className}`}
    >
      {props.children}
    </div>
  );
}