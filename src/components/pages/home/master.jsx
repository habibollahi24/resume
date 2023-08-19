import React, { useState } from "react";
import userImage from "../../../assets/images/habibollahi24.jpg";
import { Link } from "react-router-dom";
import {
  HiOutlineLightBulb,
  HiOutlineFingerPrint,
  HiArrowNarrowRight,
} from "react-icons/hi";
import { HiOutlinePuzzlePiece, HiOutlineDocumentCheck } from "react-icons/hi2";
import Lottie from "react-lottie";
// import animationData from "../../lottif/20051-programming.json";
// import animationData from "../../lottif/144238-stacking-shapes-animation.json";
// import animationData from "../../lottif/99093-man-with-laptop.json";
// import animationData from "../../lottif/73273-programmer.json";
import animationData from "../../lottif/34260-webdev.json";
// import animationData from "../../lottif/41501-programmer-with-notebook-on-scrum-standup.json";
import reactIcon from "../../../assets/images/logo/react (1).svg";
import nextIcon from "../../../assets/images/logo/nextjs.svg";
import nodeIcon from "../../../assets/images/logo/node-dot-js.svg";
import tailwindIcon from "../../../assets/images/logo/tailwindcss.svg";
import typescriptIcon from "../../../assets/images/logo/brand-typescript.svg";

const user = {
  id: "habibollahi",
  name: "Mohammad",
  family: "Habibollahi",
  image: userImage,
  job: "React | Next |  Tailwind | Typescript | Node",
  level: "Junior",
};

const Master = () => {
  const [showMenue, setShowMenue] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const menuHandler = () => {
    console.log("cli");
    setShowMenue(!showMenue);
  };
  return (
    <div className="relative ">
      <div className="ball ball-1"></div>
      <div className="ball ball-2"></div>
      <div className="ball ball-3"></div>
      <div
        onClick={menuHandler}
        className=" p-4 relative z-30 md:hidden  inline-block mx-auto"
      >
        <div className="hamurger hamurger-1"></div>
        <div className="hamurger hamurger-2"></div>
      </div>
      <div className="  grid grid-cols-12 items-center ">
        <div className="  col-span-12 md:col-span-7 pt-8 md:pt-0 md:h-screen flex flex-col items-center justify-evenly">
          <div
            className={
              !showMenue
                ? "flex flex-col md:flex-row items-center space-x-8 -translate-y-[1000px] md:translate-y-0  absolute md:relative p-12 md:p-0"
                : "absolute bg-gray-50 w-full p-12 rounded-xl shadow-sm top-0 space-x-0 space-y-5"
            }
          >
            <Link
              to="/train"
              className=" flex justify-center items-center text-gray-600 text-xl hover:scale-105 transition-all"
            >
              <div className="flex items-end">
                <span>Train</span>
                <HiOutlineLightBulb className="text-3xl" />
              </div>
            </Link>
            <Link
              to="/projects"
              className=" flex justify-center items-center text-gray-600 text-xl hover:scale-105 transition-all"
            >
              <div className="flex  items-end">
                <span>Project</span>
                <HiOutlineDocumentCheck className="text-3xl" />
              </div>
            </Link>
            <Link
              to="/skils"
              className=" flex justify-center items-center text-gray-600 text-xl hover:scale-105 transition-all"
            >
              <div className="flex  items-end">
                <span>Skils</span>
                <HiOutlinePuzzlePiece className="text-3xl" />
              </div>
            </Link>
            <Link
              to="/about-me"
              className=" flex justify-center items-center text-gray-600 text-xl hover:scale-105 transition-all"
            >
              <div className="flex  items-end">
                <span>About Me</span>
                <HiOutlineFingerPrint className="text-3xl" />
              </div>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-3xl font-jadid   text-gray-700 dark:text-gray-200 ">
              Hi , I am
            </p>
            <p className="text-4xl md:text-7xl font-jadid  font-normal text-gray-700 dark:text-gray-200 tracking-tighter">
              {`${user.name} `}
            </p>
            <p className="text-4xl md:text-7xl font-jadid font-normal text-gray-700 dark:text-gray-200 tracking-tighter">
              {user.family}
            </p>

            <p className="text-gray-500 w-60 md:w-full font-semibold mt-3">
              My Stack : {user.job}
            </p>
            <button className="border-2 shadow-2xl rounded-md group px-4 mx-auto py-2 mt-8 flex justify-center items-center text-gray-500 hover:border-gray-600 transition-all ">
              <a
                href="https://github.com/habibollahi24/habibollahi24-resume"
                target="_blank"
                className=""
              >
                GitHub source
              </a>
              <HiArrowNarrowRight className="transition-all group-hover:translate-x-2 " />
            </button>
          </div>
        </div>
        <div className="  col-span-12 md:col-span-5 opacity-90   h-screen ">
          <div className="p-12">
            <Lottie options={defaultOptions} height={300} />
          </div>
          <div className="flex border-logo flex-nowrap mx-auto   bb overflow-hidden px-8  opacity-100">
            <div className="flex flex-nowrap left-0  justify-center  py-12 items-center icons animate-marquee-infinite">
              <div>
                <img src={reactIcon} alt="react" width={80} />
              </div>
              <div>
                <img src={nextIcon} alt="" width={80} />
              </div>
              <div>
                <img src={typescriptIcon} alt="" width={80} />
              </div>
              <div>
                <img src={nodeIcon} alt="" width={80} className="  ff " />
              </div>
              <div className="">
                <img src={tailwindIcon} alt="" width={80} />
              </div>
            </div>
            {/* sdfsf */}
            <div className="flex flex-nowrap left-0  justify-center  py-12  items-center icons animate-marquee2-infinite">
              <div>
                <img src={reactIcon} alt="react" width={80} />
              </div>
              <div>
                <img src={nextIcon} alt="" width={80} />
              </div>
              <div>
                <img src={typescriptIcon} alt="" width={80} />
              </div>
              <div>
                <img src={nodeIcon} alt="" width={80} className="  ff " />
              </div>
              <div className="">
                <img src={tailwindIcon} alt="" width={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;

{
  /* <div className="bbgg ">
      <div className="my-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-screen py-2 md:p-20 ">
          <div className="  grid card ">
            <div className="w-36 h-36 md:w-40 md:h-40  text-center mx-auto self-center  ">
              <img
                src={user.image}
                alt={user.name}
                className=" h-full w-full object-cover rounded-2xl border border-gray-400"
              />
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-extralight text-gray-800 dark:text-gray-200 tracking-tighter">
                {user.name}
              </p>
              <p className="text-4xl md:text-5xl font-extralight text-gray-800 dark:text-gray-200 tracking-tighter">
                {user.family}
              </p>
              <p className="text-base font-light text-gray-100 mt-5">
                {user.job}
              </p>
              <p className="text-base font-light text-gray-100 -mt-1">
                {user.level}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link
              to="/train"
              className="card flex justify-center items-center text-gray-200 text-xl hover:scale-95 transition-all"
            >
              <div className="flex items-end">
                <span>Train</span>
                <HiOutlineLightBulb className="text-5xl" />
              </div>
            </Link>
            <Link
              to="/projects"
              className="card flex justify-center items-center text-gray-200 text-xl hover:scale-95 transition-all"
            >
              <div className="flex  items-end">
                <span>Project</span>
                <HiOutlineDocumentCheck className="text-5xl" />
              </div>
            </Link>
            <Link
              to="/skils"
              className="card flex justify-center items-center text-gray-200 text-xl hover:scale-95 transition-all"
            >
              <div className="flex  items-end">
                <span>Skils</span>
                <HiOutlinePuzzlePiece className="text-5xl" />
              </div>
            </Link>
            <Link
              to="/about-me"
              className="card flex justify-center items-center text-gray-200 text-xl hover:scale-95 transition-all"
            >
              <div className="flex  items-end">
                <span>About Me</span>
                <HiOutlineFingerPrint className="text-5xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div> */
}
