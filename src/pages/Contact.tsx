import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { data } from "../assets/contentData/data";

type Props = {};
const welcomeHome = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Contact = (props: Props) => {
  return (
    <>
      <div className="h-auto lg:h-screen w-full flex flex-col bg-regal-blue  ">
        <div className="bg-regal-blue text-xl flex gap-7 justify-center text-off-white py-5 w-full overflow-hidden">
          {welcomeHome.map((item) => (
            <h1 className="mx-2 text-2xl uppercase">
              {data.contact.welcomeHome}
            </h1>
          ))}
        </div>
        <div className="mx-auto w-full flex flex-col justify-center items-center lg:justify-evenly lg:flex-row">
          <div className=" lg:w-[40%]">
            <h1 className=" lg:leading-snug mx-auto lg:max-w-[600px] mb-6 text-center text-4xl tracking-wider font-semibold uppercase text-off-white lg:text-7xl">
              {data.contact.mapTitle}
            </h1>
            <div className=" w-full px-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.121248276503!2d-117.05690644892937!3d32.60295208093183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94eed5c860cb3%3A0xfc3eb50c5bb56ba5!2s84%20Kingswood%20Dr%2C%20Chula%20Vista%2C%20CA%2091911!5e0!3m2!1sen!2sus!4v1676404266466!5m2!1sen!2sus"
                className="w-[100%] h-[300px] lg:h-[480px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className=" mt-10 text-white text-center">
            <div className="">
              <h3 className="text-yellow-400 text-xl sm:text-4xl uppercase mb-10 font-semibold">
                {" "}
                {data.contact.locationTitle}
              </h3>
              <p className="font-thin">84 Kingswood Dr</p>
              <p className="font-thin">San Diego, Ca. 91911</p>
            </div>
            <div className="mt-10">
              <h3 className="text-yellow-400 text-xl sm:text-4xl uppercase mb-10 font-semibold">
                {" "}
                {data.contact.hoursTitle}
              </h3>
              <p className="font-thin">{data.contact.thursTime}</p>
              <p className="font-thin">{data.contact.sunTime}</p>
            </div>
            <div className="mt-10">
              <h3 className="text-yellow-400 text-xl sm:text-4xl uppercase mb-10 font-semibold">
                {" "}
                {data.contact.follow}
              </h3>
              <div className="flex items-center justify-center text-xl sm:text-5xl">
                <AiOutlineInstagram />
                <AiOutlineFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
