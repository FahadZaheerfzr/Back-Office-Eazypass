import React from "react";
import { useRouter } from "next/router";

export default function Return() {
    const router = useRouter();
  return (
    <>
    <div
        onClick={() => router.back()}
      className="flex absolute bottom-0 w-full h-12 rounded-[20px] justify-center cursor-pointer"
      style={{
          background: "linear-gradient(263.44deg, #30D686 0%, #2B54E6 220.87%)",
        }}
        >
            <img src="/Employee/return.svg" />
            <span className="my-auto text-3xl font-Roboto translate-y-0.5 text-[#1A003A]">
                Retour
            </span>
        </div>
        </>
  );
}
/* Rectangle 6 */
/* Retour */
