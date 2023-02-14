import React from "react";
import { data } from "../assets/contentData/data";
import Image from "next/image";
import randomPeople from "../assets/randomPeople.png";
import Couple from "../assets/couple.jpg";
import ArrowCircleIcon from "../assets/arrowOnCircle.png";
type Props = {};

const OurStory = (props: Props) => {
  return (
    <div className="bg-regal-blue text-off-white text-center">
      {/*Title-------------*/}
      <div className="text-3xl">{data.ourStory.title}</div>
      {/*Image-------------*/}
      <div>
        <Image src={randomPeople} alt="picture carousel of people" />
      </div>
      {/*Bio Container-------------*/}
      <div className="flex-col-reverse">
        <div>
          <Image src={Couple} alt="couple" />
        </div>
        {/*Who we are container------------*/}
        <div className="">
          <p className="text-3xl">{data.ourStory.storyTitle}</p>
          <p>{data.ourStory.storyDesc}</p>
        </div>
      </div>
      {/*Get to know us container-------------*/}
      <div className="py-5">
        <h1 className="text-3xl text-off-white text-center">
          {data.ourStory.getToKnow}
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
  );
};

export default OurStory;
