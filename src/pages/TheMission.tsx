import React from "react";
import Navbar from "./Navbar";

type Props = {};

const TheMission = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center bg-regal-blue">
        <h1>TheMission</h1>
      </div>
    </>
  );
};

export default TheMission;
