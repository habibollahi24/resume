import React from "react";
import { BsGithub, BsTelegram, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";

const social = [
   { id: 1, title: "Git Hub", icon: <BsGithub />, href: "https://github.com/habibollahi24" },
   { id: 2, title: "Email", icon: <BsFillEnvelopeFill />, href: "" },
   {
      id: 3,
      title: "Linkeden",
      icon: <BsLinkedin />,
      href: "https://www.linkedin.com/in/mohammad-habibollahi-90218b223/",
   },
   { id: 4, title: "Telegram", icon: <BsTelegram />, href: "" },
];

const SocialIcons = () => {
   return (
      <ul className="space-y-5 flex flex-col items-center sticky top-40">
         {social.map((social) => {
            return (
               <li
                  key={social.id}
                  className=" text-gray-700 dark:text-gray-200 "
                  title={social.title}
               >
                  <a
                     href={social.href}
                     target="_blank"
                     className="text-xl inline-block transition-all hover:scale-150"
                  >
                     {social.icon}
                  </a>
               </li>
            );
         })}
      </ul>
   );
};

export default SocialIcons;
