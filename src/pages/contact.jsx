import React, { useState } from "react";
import Layout from "../components/layout/layout";
import {
   BsGithub,
   BsTelegram,
   BsLinkedin,
   BsFillEnvelopeFill,
   BsPhoneFill,
   BsFillCapslockFill,
} from "react-icons/bs";

const contacts = [
   {
      id: 1,
      title: "phone number",
      body: "9302549198",
      icon: <BsPhoneFill />,
      href: "tel:09302549198",
   },
   { id: 2, title: "email", body: "habibollahi24@gmail.com", icon: <BsFillEnvelopeFill /> },
   {
      id: 3,
      title: "linkedin",
      body: "mohammad-habibollahi",
      icon: <BsLinkedin />,
      href: "https://www.linkedin.com/in/mohammad-habibollahi-90218b223/",
   },
   { id: 4, title: "telegram", body: "@habibollahitg", icon: <BsTelegram /> },
   {
      id: 5,
      title: "gitHub",
      body: "habibollahi24",
      icon: <BsGithub />,
      href: "https://github.com/habibollahi24",
   },
];

const Contact = () => {
   const [selectedCart, setSelectedCart] = useState(1);

   const nextHandler = () => {
      if (selectedCart === contacts.length) {
         return setSelectedCart(1);
      }
      setSelectedCart(selectedCart + 1);
   };
   const prevHandler = () => {
      if (selectedCart === 1) {
         return setSelectedCart(contacts.length);
      }
      setSelectedCart(selectedCart - 1);
   };
   const onCartHandler = (id) => {
      setSelectedCart(id);
   };

   return (
      <Layout>
         <div className="flex justify-center flex-nowrap  items-center  overflow-hidden h-[25rem] relative ">
            {contacts.map((c) => {
               return (
                  <div
                     key={c.id}
                     className={` ${
                        c.id === 1
                           ? " rotate-[10deg]"
                           : c.id === 2
                           ? " -rotate-[10deg]"
                           : c.id === 3
                           ? " rotate-[10deg]"
                           : c.id === 4
                           ? " -rotate-[10deg]"
                           : c.id === 5
                           ? " rotate-[10deg]"
                           : ""
                     } border-2 absolute transition-all cursor-pointer rounded-md duration-300 bg-white dark:bg-dark-900 w-[240px] h-[280px] p-4  flex-shrink-0 ${
                        selectedCart === c.id
                           ? "border-gray-400 !bg-white dark:!bg-dark-900 !z-10 absolute !rotate-0 scale-95"
                           : ""
                     }`}
                     onClick={() => onCartHandler(c.id)}
                  >
                     <div className="flex flex-col space-y-3 h-full justify-center items-center">
                        <div className="text-5xl dark:text-gray-300">{c.icon}</div>
                        <a
                           className="text-gray-700 dark:text-gray-300"
                           href={c.href}
                           target="_blank"
                        >
                           {c.body}
                        </a>
                     </div>
                  </div>
               );
            })}
         </div>
         <div className="flex justify-center space-x-5 text-gray-800 dark:text-gray-200 mb-8">
            <button className="-rotate-90 text-3xl" onClick={prevHandler}>
               <BsFillCapslockFill />
            </button>
            <button className="rotate-90 text-3xl" onClick={nextHandler}>
               <BsFillCapslockFill />
            </button>
         </div>
      </Layout>
   );
};

export default Contact;
