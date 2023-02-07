import React from "react";
import Navbar from "./Navbar";

type Props = {};

const OurStory = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center bg-regal-blue">
        <h1>Hello to Our Story Page</h1>
      </div>
    </>
  );
};

export default OurStory;
