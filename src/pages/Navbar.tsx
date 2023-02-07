import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" bg-regal-blue py-5 px-3 text-off-white">
      <div className="flex justify-around space-between my-2 py-2">
        {/*Logo*/}
        <div className="mx-2">
          <Link href="/">
            <span>Logo</span>
          </Link>
        </div>

        {/*Middle Links*/}
        <div className="flex justify-between">
          <span className="mx-2">
            <Link href="/TheMission">
              <span>The Mission</span>
            </Link>
          </span>

          <span className="mx-2">
            <Link href="/OurStory">
              <span>Our Story</span>
            </Link>
          </span>

          <span className="mx-2">
            <Link href="/Contact">
              <span>Contact</span>
            </Link>
          </span>
          <span className="mx-2">
            <Link href="/Give">
              <span>Give</span>
            </Link>
          </span>
          <span className="mx-2">Espanol</span>
        </div>
        {/*Social Icons*/}
        <div>
          <span className="mx-2">Instagram</span>
          <span className="mx-2">Facebook</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
