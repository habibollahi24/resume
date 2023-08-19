import React from "react";

const ToggleNavButton = ({ onToggle, showNavbar }) => {
   return (
      <button onClick={onToggle} className="md:hidden  flex flex-col space-y-1 cursor-pointer ">
         <span
            className={`${
               showNavbar ? "rotate-45 translate-y-1" : ""
            } w-8 h-1 bg-gray-700 dark:bg-gray-200 rounded-md`}
         ></span>
         <span
            className={`${
               showNavbar ? "hidden" : ""
            } w-8 h-1 bg-gray-700 dark:bg-gray-200 rounded-md`}
         ></span>
         <span
            className={`${
               showNavbar ? "-rotate-45 -translate-y-1" : ""
            } w-8 h-1 bg-gray-700 dark:bg-gray-200 rounded-md`}
         ></span>
      </button>
   );
};

export default ToggleNavButton;
