import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Return() {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.back()}
        className="flex  w-full xs:h-12 h-8 rounded-[20px] justify-center cursor-pointer"
        style={{
          background: "linear-gradient(263.44deg, #30D686 0%, #2B54E6 220.87%)",
        }}
      >
        <Image
          width={50}
          height={50}
          src="/Employee/return.svg"
          className="xs:w-14 w-10"
        />
        <span className="my-auto xs:text-3xl text-xl font-Roboto font-medium translate-y-0.5 text-[#1A003A]">
          Retour
        </span>
      </div>
    </>
  );
}
/* Rectangle 6 */
/* Retour */
