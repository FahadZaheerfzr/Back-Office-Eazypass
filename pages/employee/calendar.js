import React from "react";
import Container from "../../components/Calendar";
import Head from "next/head";
import Header from "../../components/Employee/Header";

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
      <div className="">
        <Header />

        <Container />
      </div>
    </>
  );
}
