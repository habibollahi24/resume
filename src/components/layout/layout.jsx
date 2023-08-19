import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import SocialIcons from "./socialIcons";

const Layout = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const onToggle = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div>
      <Header onToggle={onToggle} showNavbar={showNavbar} />
      <div className="my-container grid md:grid-cols-12  ">
        <nav
          className={`${
            showNavbar ? "w-full z-20" : "hidden"
          } md:block w-64 pt-28 md:pt-32 dark:bg-dark-900 bg-zinc-200  z-30 h-screen fixed top-0 left-0`}
        >
          <Navbar />
        </nav>

        <main className="col-span-11 md:pl-64 pt-10 relative ">{children}</main>
        <aside className="hidden md:block col-span-1 pt-16">
          <SocialIcons />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
