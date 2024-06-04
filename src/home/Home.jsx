import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FreeBook from "../components/FreeBook";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <FreeBook />
      <Footer></Footer>
    </>
  );
}

export default Home;
