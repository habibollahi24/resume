import React from "react";

import ThemeIcon from "../shared/themeIcon";
import ToggleNavButton from "../shared/toggleNavButton";
import Logo from "./../shared/logo";
const Header = ({ onToggle, showNavbar }) => {
   return (
      <header className="sticky  top-0 left-0 md:ml-[16rem] md:w-[calc(100%-16rem)]  bg-zinc-200 md:bg-gray-100 dark:bg-dark-500 shadow-sm z-50  ">
         <div className="py-6 px-4 md:px-12 flex justify-between items-center">
            <div className="md:hidden">
               <Logo />
            </div>
            <ThemeIcon />
            <ToggleNavButton onToggle={onToggle} showNavbar={showNavbar} />
         </div>
      </header>
   );
};

export default Header;
// md:ml-[18rem] md:w-[calc(100%-18rem)] bg-gray-100 shadow-sm
