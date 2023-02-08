import React from "react";
import Link from "next/link";
import Image from "next/image";
import FBIcon from "../assets/facebook.png";
import InstaIcon from "../assets/instagram.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" bg-regal-blue py-5 px-3 text-off-white">
      <div className="flex justify-around space-between my-2 py-2">
        {/*Logo*/}
        <div className="mx-2 flex items-center ">
          <Link href="/">
            <span>LOGO</span>
          </Link>
        </div>

        {/*Middle Links*/}
        <div className="flex justify-between items-center ">
          <span className="mx-2 p-2">
            <Link href="/TheMission">
              <span>THE MISSION</span>
            </Link>
          </span>

          <span className="mx-2 p-2">
            <Link href="/OurStory">
              <span>OUR STORY</span>
            </Link>
          </span>

          <span className="mx-2 p-2">
            <Link href="/Contact">
              <span>CONTACT</span>
            </Link>
          </span>
          <span className="mx-2 p-2 border-r-2 pr-5">
            <Link href="/Give">
              <span>GIVE</span>
            </Link>
          </span>
          <span className="mx-2 p-2">ESPANOL</span>
        </div>
        {/*Social Icons*/}
        <div className="flex ">
          <Image src={FBIcon} alt="Facebook Icon" className="mx-2" />
          <Image src={InstaIcon} alt="Instagram Icon" className="mx-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
