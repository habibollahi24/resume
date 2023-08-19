import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const BreadCramp = () => {
   const { pathname } = useLocation();
   const { slug } = useParams();
   return (
      <div className="mb-8  p-3 w-3/4 md:w-full  border-2 rounded-md text-gray-700 dark:text-gray-300">
         <Link to={`/${pathname.split("/")[1]}`}>{pathname.split("/")[1]}</Link>
         <span className="text-2xl align-middle mx-2">{`>`}</span>
         <span>{slug}</span>
      </div>
   );
};

export default BreadCramp;
