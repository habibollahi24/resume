import React from "react";
import Layout from "./../components/layout/layout";

import trains from "../model/trains";
import { useParams } from "react-router-dom";
import SingleWorkPage from "../components/shared/singleWork";

const SingleTrain = () => {
   const { slug } = useParams();

   const train = trains.find((train) => train.slug === slug);

   return (
      <Layout>
         <SingleWorkPage pageData={train} />
      </Layout>
   );
};

export default SingleTrain;
