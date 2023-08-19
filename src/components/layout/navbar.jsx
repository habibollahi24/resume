import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../shared/logo";
import Footer from "./footer";

const navs = [
  { id: 1, title: "Master", pathname: "/resume" },
  { id: 2, title: "Aboute Me", pathname: "/about-me" },
  { id: 3, title: "Skils", pathname: "/skils" },
  { id: 4, title: "Train", pathname: "/train" },
  { id: 5, title: "Projects", pathname: "/projects" },
  { id: 6, title: "References", pathname: "/references" },
  { id: 7, title: "Contact", pathname: "/contact" },
  // { id: 8, title: "Aboute This Project", pathname: "/about-this-project" },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Logo classes="hidden md:block" />

      <ul className=" space-y-4 ">
        <>
          {navs.map((nav) => {
            const isActive =
              nav.pathname === pathname ||
              (pathname.includes(nav.pathname) && nav.pathname !== "/");
            return (
              <li
                key={nav.id}
                className={`text-base dark:text-gray-300 text-gray-700 -ml-[2px] px-6 md:px-8 font-medium tracking-tight   ${
                  isActive ? " text-gray-800 dark:text-white" : ""
                }`}
              >
                <NavLink to={nav.pathname}>
                  <span
                    className={
                      isActive
                        ? "text-2xl "
                        : "transition-all inline-block md:hover:translate-x-2 "
                    }
                  >
                    {nav.title}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </>
      </ul>
    </>
  );
};

export default Navbar;
