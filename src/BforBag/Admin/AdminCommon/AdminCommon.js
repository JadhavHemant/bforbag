import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
// import logo from '../AdminCommon/logo.png';

import { Bars3Icon } from "@heroicons/react/24/outline";
import Footer from "../Footer/Footer";

const UserCommon = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Function to handle toggling the menu
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  // Function to handle clicking on a link in the toggle menu
  const handleLinkClick = () => {
    // Close the menu
    setToggleMenu(false);
  };

  return (
    <>
      <header className="sticky top-0">
        <nav>
          <div className="mx-auto  backdrop-blur-sm bg-white/30 text-[14px] w-max-auto">
            <div className="flex justify-between mx-auto ">
              <div className="flex items-center justify-between my-2 lg:justify-end gap-[40px]">
                <Link to="/">
                  <div className="pl-4">
                    {/* <img src={logo} alt="Logo" className="h-[50px] w-[180px]" /> */}
                  </div>
                </Link>
              </div>
              <div className="flex gap-6 font-bold">
                <div className="hidden lg:flex gap-10 items-center justify-between my-2 pr-4 lg:text-[16px]">
                  <Link to="" onClick={handleLinkClick}>Home</Link>
                  <Link to="products" onClick={handleLinkClick}>product</Link>
                </div>
                <div className="flex items-center lg:hidden">
                  <button onClick={handleToggleMenu}>
                    <Bars3Icon className="h-7 pr-[15px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`fixed z-40 w-full backdrop-blur-sm overflow-hidden flex flex-col lg:hidden gap-12 ${toggleMenu ? "h-auto" : "h-0"}`}>
            <div className="px-8 text-center">
              <div className="flex flex-col gap-8 font-bold overflow-visible tracking-wider pt-4 pb-4">
              <Link to="" onClick={handleLinkClick}>Home</Link>
                  <Link to="products" onClick={handleLinkClick}>product</Link>
              </div>
            </div>
          </div>
        </nav>
        <hr className="border border-[gray]" />
        <div>

        </div>
      </header>
      <div onClick={handleLinkClick}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default UserCommon;
