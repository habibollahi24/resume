import React from "react";
import Layout from "./../components/layout/layout";
import projects from "../model/projects";

import { useParams } from "react-router-dom";
import SingleWorkPage from "../components/shared/singleWork";

const SingleProject = () => {
   const { slug } = useParams();
   const project = projects.find((project) => project.slug === slug);
   return (
      <Layout>
         <SingleWorkPage pageData={project} />
      </Layout>
   );
};

export default SingleProject;
