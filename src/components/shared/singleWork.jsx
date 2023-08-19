import React from "react";
import BreadCramp from "./breadCramp";
import TitleSection from "./titleSection";
import { HiLink } from "react-icons/hi";
import { BsCheckAll } from "react-icons/bs";

const SingleWorkPage = ({ pageData }) => {
   const train = pageData;
   return (
      <div className="p-2">
         <BreadCramp />
         <div className="flex flex-col ">
            <div className="flex items-center justify-between my-5 ">
               <TitleSection>{train.title}</TitleSection>
               {train.isCompleted ? (
                  <p className="text-sm flex items-center text-gray-700 dark:text-gray-200">
                     completed <BsCheckAll className="inline-block text-2xl " />{" "}
                  </p>
               ) : (
                  <p className="text-sm flex items-center text-gray-700 dark:text-gray-200">
                     not-completed
                  </p>
               )}
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-5">
               <div className="  md:h-72  ">
                  <img
                     src={train.screenshot}
                     alt={train.title}
                     className="w-full h-auto  rounded-xl overflow-hidden shadow-lg"
                  />
               </div>
               <div className="flex md:flex-grow  flex-col items-center w-full text-center">
                  {train.technology.map((tag, index) => {
                     return (
                        <span
                           key={index}
                           className="text-xs my-1 bg-gray-200 w-full py-2  rounded-md text-gray-700"
                        >
                           {tag}
                        </span>
                     );
                  })}
               </div>
            </div>
            <div className=" mt-6 py-6">
               <div className="flex gap-2 text-center">
                  {train.demo && (
                     <a
                        href={train.demo}
                        target="_blank"
                        className="w-1/2  text-gray-700 text-sm md:text-xl my-1 bg-gray-200 p-4 rounded-md"
                     >
                        <HiLink className="inline" /> Demo
                     </a>
                  )}
                  <a
                     href={train.github}
                     target="_blank"
                     className="w-1/2  text-gray-700 text-sm md:text-xl my-1 bg-gray-200 p-4  rounded-md"
                  >
                     <HiLink className="inline" /> GitHub
                  </a>
               </div>

               <div className="border-2 rounded-md text-gray-700 px-2 py-4 my-6 dark:text-gray-300">
                  Description : {train.descriptions}
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleWorkPage;
