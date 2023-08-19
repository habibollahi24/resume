import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";

const Cart = ({ cartData }) => {
  const [isLiked, setisliked] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="  bg-white dark:bg-dark-500 dark:shadow md:col-span-1 rounded-md  relative my-10 hover:shadow-xl hover:scale-110 transition-all">
      <Link
        to={`${pathname}/${cartData.slug}`}
        className="z-20 relative block  scale-100 p-1 "
      >
        <div className="overflow-hidden   ">
          <div className="gradiant-bg">
            <img
              src={cartData.screenshot}
              alt={cartData.title}
              className=" rounded-md "
            />
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4 pt-6 relative text-center">
        <Link to={`${pathname}/${cartData.slug}`}>
          <span className="text-gray-700 dark:text-gray-300 text-2xl tracking-tighter">
            {cartData.title}
          </span>
        </Link>
        {/* <p className="text-gray-500 text-xs font-normal mt-1 tracking-tighter">
               {cartData.date}
            </p> */}
        <div className="text-center">
          {!isLiked ? (
            <BsHandThumbsUp
              onClick={() => setisliked(!isLiked)}
              className=" text-2xl cursor-pointer inline-block my-2 shake"
            />
          ) : (
            <BsHandThumbsUpFill
              onClick={() => setisliked(!isLiked)}
              className=" text-2xl cursor-pointer inline-block my-2 "
            />
          )}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-1 my-2 ">
          {cartData.technology.map((tag, index) => {
            return (
              <span
                key={index}
                className="text-xs bg-gray-100 py-1 px-2 rounded-md text-gray-700"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
