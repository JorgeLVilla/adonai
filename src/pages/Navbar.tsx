import { useState } from "react";
import Link from "next/link";
import { NAV__LINKS } from "@/assets/contentData/navData";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="bg-regal-blue">
      {/* ----------------Mobile Menu------------------ */}
      <div
        className={` ${
          navbarOpen ? "flex" : "hidden"
        } flex-col absolute bottom-0 top-0 right-0 left-0 sm:hidden text-off-white h-screen flex justify-center bg-regal-blue
          duration-500
        `}
      >
        <div
          onClick={handleNavbar}
          className="text-center w-screen items-center px-20 mb-5 flex justify-end"
        >
          <AiOutlineClose className="text-3xl" />
        </div>

        <div
          onClick={handleNavbar}
          className="text-center text-3xl h-1/6 flex justify-center items-center"
        >
          <Link href="/">
            <div>LOGO</div>
          </Link>
        </div>

        <div>
          <ul className="text-center text-3xl">
            {NAV__LINKS.map((item, index) => (
              <li
                onClick={handleNavbar}
                key={index}
                className="px-8 text-off-white my-3"
              >
                <Link href={`${item.path}`}>{item.display}</Link>
              </li>
            ))}
            <div onClick={handleNavbar} className="my-3 py-2">
              ESPANOL
            </div>
          </ul>
        </div>

        <div className="flex justify-center my-8 text-3xl text-off-white">
          <AiOutlineFacebook className="mx-2" />
          <AiOutlineInstagram className="mx-2" />
        </div>
      </div>
      {/* ---------------End of Mobile Menu */}

      {/* ---------------Start of Desktop Menu */}
      <div className=" flex w-full justify-between lg:justify-around items-center px-4">
        <div className="">
          <Link href="/">
            <div className="text-3xl text-off-white">LOGO</div>
          </Link>
        </div>

        <div className="hidden sm:flex">
          <ul className="flex">
            {NAV__LINKS.map((item, index) => (
              <li key={index} className="px-8 text-off-white">
                <Link href={`${item.path}`}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:flex justify-center my-8 text-3xl text-white">
          <AiOutlineFacebook className="mx-2" />
          <AiOutlineInstagram className="mx-2" />
        </div>

        <div
          onClick={handleNavbar}
          className="flex sm:hidden text-off-white text-3xl"
        >
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
