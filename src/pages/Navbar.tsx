import { useState } from "react";
import Link from "next/link";
import { NAV__LINKS } from "@/assets/contentData/navData";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  translate: boolean;
  setTranslate: any;
};

const mobileVariant = {
  hidden: {
    x: "100%",
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Navbar = ({ translate, setTranslate }: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleTranslate = () => {
    setTranslate(!translate);
  };

  return (
    <nav className="bg-regal-blue">
      {/* ----------------Mobile Menu------------------ */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            variants={mobileVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex bg-regal-blue flex-col fixed w-full bottom-0 top-0 right-0 left-0 sm:hidden text-off-white h-screen justify-center"
          >
            <section className="h-4/5 py-10">
              <div
                onClick={handleNavbar}
                className="text-center w-screen items-center px-20 flex justify-end "
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
                <ul className="text-center text-3xl uppercase">
                  {NAV__LINKS.map((item, index) => (
                    <li
                      onClick={handleNavbar}
                      key={index}
                      className="px-8 text-off-white my-3"
                    >
                      <Link href={`${item.path}`}>
                        {translate ? item.spanish : item.display}
                      </Link>
                    </li>
                  ))}
                  <div
                    onClick={() => {
                      setNavbarOpen(!navbarOpen);
                      setTranslate(!translate);
                    }}
                    className="my-3 py-2"
                  >
                    {translate ? "english" : "español"}
                  </div>
                </ul>
              </div>

              <div className="flex justify-center my-8 text-3xl text-off-white">
                <GrInstagram className="mx-2" />
                <GrFacebookOption className="mx-2" />
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ---------------End of Mobile Menu */}

      {/* ---------------Start of Desktop Menu */}
      <div className="flex w-full justify-between lg:justify-around items-center px-5 py-5">
        <div className="">
          <Link href="/">
            <div className="text-3xl text-off-white">LOGO</div>
          </Link>
        </div>

        <div className="hidden sm:flex">
          <ul className="flex items-center text-off-white uppercase">
            {NAV__LINKS.map((item, index) => (
              <li key={index} className="px-8 text-off-white">
                <Link href={`${item.path}`}>
                  {translate ? item.spanish : item.display}
                </Link>
              </li>
            ))}
            <div
              onClick={handleTranslate}
              className="my-3 border-l border-off-white py-2 px-8 uppercase cursor-pointer"
            >
              {translate ? "English" : "Español"}
            </div>
          </ul>
        </div>

        <div className="hidden sm:flex justify-center my-8 text-3xl text-white">
          <GrInstagram className="mx-2" />
          <GrFacebookOption className="mx-2" />
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
