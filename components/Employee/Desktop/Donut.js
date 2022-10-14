import React from "react";
import DonutChart from "react-donut-chart";
const disponibles = 88;
const occupees = 32;
const reactDonutChartdata = [
  {
    label: "Disponibles",
    value: disponibles,
  },
  {
    label: "Occupées",
    value: occupees,
  },
];
const reactDonutChartBackgroundColor = ["#5DC76A", "#CBD5E0"];
const reactDonutChartInnerRadius = 0.7;
const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

export default function Donut() {
  return (
    <div className="text-center font-Poppins text-xs font-semibold">
      <div className=" hidden xl:block ">
        <DonutChart
          formatValues={(values) => values}
          legend={false}
          width={200}
          height={200}
          onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
          strokeColor={reactDonutChartStrokeColor}
          data={reactDonutChartdata}
          colors={reactDonutChartBackgroundColor}
          innerRadius={reactDonutChartInnerRadius}
          selectedOffset={reactDonutChartSelectedOffset}
          onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
        />
      </div>
      <div>
        <div className="text-center xl:hidden">
          <DonutChart
            legend={false}
            formatValues={(values) => values}
            width={150}
            height={150}
            onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
            strokeColor={reactDonutChartStrokeColor}
            data={reactDonutChartdata}
            colors={reactDonutChartBackgroundColor}
            innerRadius={reactDonutChartInnerRadius}
            selectedOffset={reactDonutChartSelectedOffset}
            onClick={(item, toggled) =>
              reactDonutChartHandleClick(item, toggled)
            }
          />
        </div>
      </div>
    </div>
  );
}
