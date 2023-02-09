import React from "react";
import Link from "next/link";
import Image from "next/image";
import FBIcon from "../assets/facebook.png";
import InstaIcon from "../assets/instagram.png";
import HamMenu from "../assets/HamMenu.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="text-off-white h-screen flex justify-center items-center absolute top-0 right-0 left-0 bg-regal-blue z-10">
      <div className="h-4/5 flex-col ">
        {/*Ham Menu-----------*/}
        <div className="text-center w-screen mr-10 px-5 justify-end items-center flex lg:hidden">
          <Image src={HamMenu} alt="Ham menu" className="" />
        </div>

        {/*Logo-----------------*/}
        <div className="text-center h-1/4 flex justify-center items-center">
          <Link href="/">
            <div className="text-4xl">LOGO</div>
          </Link>
        </div>

        {/*Middle Links*/}
        <div className="text-center">
          <div className="my-3">
            <Link href="/TheMission">
              <span className="text-3xl">THE MISSION</span>
            </Link>
          </div>

          <div className="my-3">
            <Link href="/OurStory">
              <span className="text-3xl">OUR STORY</span>
            </Link>
          </div>

          <div className="my-3">
            <Link href="/Contact">
              <span className="text-3xl">CONTACT</span>
            </Link>
          </div>

          <div className="my-3">
            <Link href="/Give">
              <span className="text-3xl">GIVE</span>
            </Link>
          </div>

          <div className="text-3xl pt-5 my-5 text-yellow-500">ESPANOL</div>
        </div>
        {/*Social Icons*/}
        <div className="flex justify-center mt-10">
          <Image src={FBIcon} alt="Facebook Icon" className="mx-2" />
          <Image src={InstaIcon} alt="Instagram Icon" className="mx-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
