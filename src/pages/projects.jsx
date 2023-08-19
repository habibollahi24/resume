import React from "react";
import Layout from "./../components/layout/layout";
import projects from "../model/projects";
import Cart from "./../components/shared/cart";
import TitleSection from "../components/shared/titleSection";

const Projects = () => {
   return (
      <Layout>
         <TitleSection classes="mb-10 ">All Projects</TitleSection>
         <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 mb-12 ">
            {projects.map((project) => {
               return <Cart key={project.id} cartData={project} />;
            })}
         </div>
      </Layout>
   );
};

export default Projects;
