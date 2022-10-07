import React, { useState, useRef } from "react";
// import './App.css';

const App = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list1, setList1] = useState([
    "Item A 1",
    "Item A 2",
    "Item A 3",
    "Item A 4",
    "Item A 5",
    "Item A 6",
  ]);
  const [list2, setList2] = useState([
    "Item B 1",
    "Item B 2",
    "Item B 3",
    "Item B 4",
    "Item B 5",
    "Item B 6",
  ]);

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...list1];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList1(copyListItems);
  };

  return (
    <>
      <div className="bg-slate-400">
        <div className="bg-blue-400 text-center text-4xl mx-[25%] my-5">
          {" "}
          static div
        </div>
        {list1 &&
          list1.map((item, index) => (
            <div
              className="bg-blue-400 text-center text-4xl mx-[25%] my-5"
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              key={index}
              draggable
            >
              {item}
            </div>
          ))}
      </div>
        <div className="bg-green-400">
      <div className="bg-blue-400 text-center text-4xl mx-[25%] my-5">
        static div
      </div>
      {list2 &&
          list2.map((item, index) => (
            <div
              className="bg-blue-400 text-center text-4xl mx-[25%] my-5"
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              key={index}
              draggable
            >
              {item}
            </div>
          ))}
      </div>
    </>
  );
};
export default App;
