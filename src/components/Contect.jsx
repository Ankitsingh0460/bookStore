import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contect() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-40 flex justify-center ">
        <div className="flex-wrap">
          <h1 className="text-4xl text-center ">Contact Us</h1>

          <div className="m-5">
            <h3 className="text-base ml-2">Name</h3>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-[1000px] h-10 max-w-xs m-1"
            />
            <h3 className="text-base ml-2">Email</h3>
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-[1000px] h-10 max-w-xs m-1"
            />
            <h3 className="text-base ml-2">Message</h3>
            <textarea
              className="textarea textarea-bordered w-[328px]"
              placeholder="Type your message"
            ></textarea>
            <br />
            <button className="btn btn-primary btn-sm mt-2">Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contect;
