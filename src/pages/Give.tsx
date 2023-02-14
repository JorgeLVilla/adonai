import React from "react";
import Image from "next/image";
import { data } from "../assets/contentData/data";
import ArrowCircleIcon from "../assets/arrowOnCircle.png";
import Randos from "../assets/randos.jpg";

type Props = {};

const Give = (props: Props) => {
  return (
    <div className="text-center text-off-white h-screen">
      <div className="text-3xl">{data.give.title}</div>
      <div>
        <Image src={Randos} alt="friends talking" />
      </div>
      <div className="text-2xl">{data.give.bodyTitle}</div>
      <div>{data.give.bodyDesc}</div>
      {/*give here container--------------*/}
      <div className="py-5">
        <h1 className="text-3xl">{data.give.givelify}</h1>
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
  );
};

export default Give;
