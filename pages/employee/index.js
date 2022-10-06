import React from "react";
import Head from "next/head";
import Employee from "../../components/Employee";
export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Back-office Eazypass is a work management web application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Employee />
      </div>
    </div>
  );
}
