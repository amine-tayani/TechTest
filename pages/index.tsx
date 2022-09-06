import * as React from "react";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import CardList from "../components/CardList";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const [houses, setHouses] = React.useState();

  React.useEffect(() => {
    axios.get("/json/data.json").then((res) => {
      setHouses(res.data);
    });
  }, []);

  return (
    <div className=" font-poppins">
      <Head>
        <title>Aleia.io</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Hero />
      <CardList houses={houses} />
    </div>
  );
};

export default Home;
