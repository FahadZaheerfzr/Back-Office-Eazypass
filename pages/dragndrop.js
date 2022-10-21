import React from "react";
import dynamic from "next/dynamic";
const DesktopContainer = dynamic(
  () => import("../components/Drag/DesktopContainer"),
  { ssr: false }
);
export default function Dragndrop() {
  return (
    <div>
      <DesktopContainer />
    </div>
  );
}
