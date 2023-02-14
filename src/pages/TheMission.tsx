import React from "react";
import Image from "next/image";
import { BELIEF_LIST } from "@/assets/beliefs";
import { data } from "../assets/data";
import randomPeople from "../assets/randomPeople.png";

type Props = {};

const TheMission = (props: Props) => {
  return (
    <div className="bg-regal-blue text-off-white text-center">
      <div>
        <p className="text-3xl">{data.theMission.title}</p>
      </div>
      <ul className="py-5 my-5">
        {BELIEF_LIST.map((item, index) => (
          <li key={index} className="">
            <div>{item.headline}</div>
            <div>{item.desc}</div>
            <div className="h-10 w-4/5 text-yellow-500 white mx-auto py-6">
              <hr />
            </div>
          </li>
        ))}
      </ul>
      <div className="py-5 w-5/6 mx-auto">
        <div className="w-full">
          <Image src={randomPeople} alt="random people" />
        </div>
      </div>
    </div>
  );
};

export default TheMission;
