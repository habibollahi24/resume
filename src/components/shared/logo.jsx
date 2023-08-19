import React from "react";

const Logo = ({ classes }) => {
  return (
    <div
      className={` text-lg md:text-2xl dark:text-gray-200 font-semibold text-gray-800 tracking-tighter md:absolute top-6 left-12 ${classes}`}
    >
      Learn<span className="text-2xl md:text-4xl">ing</span>
      <span className="text-base">24</span>
    </div>
  );
};

export default Logo;
