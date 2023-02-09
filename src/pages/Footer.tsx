import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="h-10 w-4/5 text-off-white white mx-auto">
        <hr />
      </div>
      <div className="w-screen flex text-sm justify-around items-center text-yellow-500 text-center pb-5">
        <h1>
          Adonai <br></br>San Diego
        </h1>
        <h1>619-555-1567</h1>
        <h1>
          hello@<br></br>sdadonai.com
        </h1>
      </div>
    </>
  );
};

export default Footer;
