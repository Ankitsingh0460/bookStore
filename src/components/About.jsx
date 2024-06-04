import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-40 flex justify-center text-center min-h-screen">
        <div>
          <h1 className="text-2xl mb-10">Ankit Singh</h1>
          <a
            className="underline  text-blue-400"
            href="https://github.com/Ankitsingh0460"
          >
            GitHub
          </a>
          <a
            className="ml-4 underline  text-blue-400"
            href="https://www.linkedin.com/in/ankitsingh0460/"
          >
            LinkeIn
          </a>
          <a
            className=" ml-4 underline  text-blue-400"
            href="https://portfolio-beryl-theta-34.vercel.app/"
          >
            Portfolio
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
