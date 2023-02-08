import React from "react";
import Image from "next/image";
import MainImage from "../assets/heroImage1.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen">
      {/*sideways moving banner*/}
      <div className="bg-regal-blue text-lg flex justify-center text-off-white my-5 overflow-hidden w-full">
        <h1 className="mx-5">WELCOME HOME</h1>
        <span>&#183;</span>
        <h1 className="mx-5">WELCOME HOME</h1>
        <span>&#183;</span>
        <h1 className="mx-5">WELCOME HOME</h1>
        <span>&#183;</span>
        <h1 className="mx-5">WELCOME HOME</h1>
        <span>&#183;</span>
        <h1 className="mx-5">WELCOME HOME</h1>
        <span>&#183;</span>
        <h1 className="mx-5">WELCOME HOME</h1>
        <span>&#183;</span>
      </div>

      {/*hero image*/}
      <div className="">
        <Image src={MainImage} alt="band playing music" className="" />
      </div>
    </div>
  );
};

export default Hero;
