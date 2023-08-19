import React from "react";
import Layout from "../components/layout/layout";
import references from "../model/references";
import { HiLink } from "react-icons/hi";
import TitleSection from "../components/shared/titleSection";

const References = () => {
   return (
      <Layout>
         <TitleSection>My References</TitleSection>
         <ul>
            {references.map((ref) => {
               return (
                  <li
                     key={ref.id}
                     className="shadow-sm py-4 px-6 my-4 rounded-md transition-all hover:bg-zinc-200 group"
                  >
                     <p className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-gray-700">
                        {ref.title}
                     </p>
                     <a className="text-sm  text-gray-500 " href={ref.url} target="_blank">
                        {ref.url}
                        <HiLink className="inline ml-1" />
                     </a>
                  </li>
               );
            })}
         </ul>
      </Layout>
   );
};

export default References;
