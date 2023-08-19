import React, { useState } from "react";
import Layout from "./../components/layout/layout";

const skils = [
   { id: 1, title: "css", body: ["tailwind", "bootstrap", "material ui"] },
   { id: 2, title: "javascript", body: ["ES6/ES7", "typescript", "reactjs", "nextjs"] },
   { id: 3, title: "state managment", body: ["context api", "redux", "redux-toolkit"] },
   { id: 4, title: "design pattern", body: ["HOC", "hook", "render-prop", "compound"] },
   {
      id: 5,
      title: "git & gitHub",
      body: ["Essential knowledge"],
   },
   {
      id: 6,
      title: "react library",
      body: ["formik", "yup", "styled components", "react-router-dom"],
   },
   {
      id: 7,
      title: "Elementary knowledge",
      body: ["nodejs", "express", "mongodb", "react-query"],
   },
];

const Skils = () => {
   const [selectAccordionId, setSelectAccordionId] = useState(null);
   const onTitleClick = (accId) => {
      setSelectAccordionId(accId);
      if (accId === selectAccordionId) {
         return setSelectAccordionId(null);
      }
   };
   return (
      <Layout>
         <div className="flex flex-col items-center mb-6">
            {skils.map((skil) => {
               return (
                  <div
                     key={skil.id}
                     className={`w-3/4 md:w-1/2  border-2 rounded-md scale-100 transition-all ${
                        selectAccordionId === skil.id ? "scale-125 my-5" : "my-2"
                     } `}
                  >
                     <div
                        className="bg-gray-200 p-2 text-center cursor-pointer capitalize"
                        onClick={() => onTitleClick(skil.id)}
                     >
                        {skil.title}
                     </div>
                     <div className="dark:text-gray-100">
                        {selectAccordionId === skil.id &&
                           skil.body.map((b, i) => {
                              return (
                                 <div className="p-2 capitalize" key={i}>
                                    {b}
                                 </div>
                              );
                           })}
                     </div>
                  </div>
               );
            })}
         </div>
      </Layout>
   );
};

export default Skils;
