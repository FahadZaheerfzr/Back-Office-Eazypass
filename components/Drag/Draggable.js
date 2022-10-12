import React from "react";
import { useDraggable } from "@dnd-kit/core";

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: props.data,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
    onTouchStart={(e)=>{e.preventDefault();
    e.stopPropagation();}}
    className={`${props.className} `}
    ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}