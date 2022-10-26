import React from "react";
import Container from "../../components/Calendar";
import Head from "next/head";
import Header from "../../components/Employee/Mobile/Header";

export default function Calendar() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Back-office Eazypass is a work management web application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-b from-[rgb(255,255,255,0.66)] to-[#c4c4c479] pb-8 mx-auto">
        <Header showBack />
        <Container />
      </div>
    </>
  );
}