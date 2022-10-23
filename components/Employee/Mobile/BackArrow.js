import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function BackArrow() {
  const router = useRouter();
  return (
    <div className="absolute top-10 left-[5%] cursor-pointer" onClick={() => router.back()}>
      <Image width={60} height={60} src="/Employee/return.svg" />
    </div>
  );
}