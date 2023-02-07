import React from "react";
import Navbar from "./Navbar";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center bg-regal-blue">
        <h1>Contact</h1>
      </div>
    </>
  );
};

export default Contact;
