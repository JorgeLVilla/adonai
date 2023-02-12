<div className=" flex-col lg:hidden text-off-white h-screen flex justify-center items-center bg-regal-blue">
  {/*Ham Menu-----------*/}
  <div className="text-center w-screen mr-10 px-5 justify-end items-center flex ">
    <Image src={HamMenu} alt="Ham menu" className="" />
  </div>

  {/*Logo-----------------*/}
  <div className="text-center h-1/5 flex justify-center items-center">
    <Link href="/">
      <div className="text-4xl">LOGO</div>
    </Link>
  </div>

  {/*Middle Links*/}
  <div className="text-center">
    <div className="my-3">
      <Link href="/mission">
        <span className="text-3xl">THE MISSION</span>
      </Link>
    </div>

    <div className="my-3">
      <Link href="/our-story">
        <span className="text-3xl">OUR STORY</span>
      </Link>
    </div>

    <div className="my-3">
      <Link href="/contact">
        <span className="text-3xl">CONTACT</span>
      </Link>
    </div>

    <div className="my-3">
      <Link href="/give">
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
</div>;
