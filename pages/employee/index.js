import React from "react";
import Head from "next/head";
import Mobile from "../../components/Employee/Mobile";
import Desktop from "../../components/Employee/Desktop";
export default function Home() {
  return (
    <div>
    
      <Head>
      <title>Employee</title>
        <meta
          name="description"
          content="Back-office Eazypass is a work management web application"
        />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <div className="md:hidden">
        <Mobile />
      </div>
      <div className="hidden md:block">
        <Desktop />
      </div>
    </div>
  );
}
