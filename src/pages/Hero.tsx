import React from "react";
import Image from "next/image";
import MainImage from "../assets/heroImage1.png";
import ArrowCircleIcon from "../assets/arrowOnCircle.png";
import HamMenu from "../assets/HamMenu.png";

type Props = {};
const welcomeHome = ["WELCOME HOME", "WELCOME HOME"];

const Hero = (props: Props) => {
  return (
    <div className="w-full">
      {/*sideways moving text--------------*/}
      <div className="bg-regal-blue text-xl flex justify-center text-off-white py-5 w-full">
        {welcomeHome.map((item) => (
          <h1 className="mx-2">{item}</h1>
        ))}
      </div>

      {/*hero image--------------*/}
      <div className="h-96">
        <Image src={MainImage} alt="band playing music" className="h-full" />
      </div>
      {/*hours/location main container--------------*/}
      <div className="">
        <div className="">
          <div className="my-5 py-2">
            <h1 className="text-4xl text-off-white flex justify-center">
              Location
            </h1>
            <p className="text-yellow-500 text-xl mt-2 flex justify-center">
              84 Kingswood Dr.
            </p>
            <p className="text-yellow-500 text-xl flex justify-center">
              San Diego, CA 91911
            </p>
          </div>
          <div className="my-5 py-2">
            <h1 className="text-4xl text-off-white text-center">Hours</h1>
            <p className="text-yellow-500 text-xl mt-2 text-center">
              Thursdays at 7pm
            </p>
            <p className="text-yellow-500 text-xl text-center">
              Sundays at 8pm
            </p>
          </div>
        </div>
        <div className=" py-5">
          <h1 className="text-3xl text-off-white text-center">
            GET IN TOUCH<br></br>WITH US
          </h1>
          {/*yellow circle arrow container--------------*/}
          <div className="w-9 mx-auto mt-3">
            <Image
              src={ArrowCircleIcon}
              alt="arrow on yellow circle"
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
