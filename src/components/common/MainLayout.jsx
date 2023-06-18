import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from 'next/head'
import React from "react";

const MainLayout = (page, title) => {
  return (
    <>
     <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
      {page}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
