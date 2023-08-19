import React from "react";
import Layout from "../components/layout/layout";

import Cart from "../components/shared/cart";
import TitleSection from "./../components/shared/titleSection";
import useFilter from "./../hooks/useFilter";
import SelectOption from "../components/shared/selectOption";

const TrainPage = () => {
  const { search, filteredTrains, onSelectHandler } = useFilter();

  return (
    <Layout>
      <div className="flex justify-between items-end md:items-center mb-6 px-4">
        <TitleSection classes="">All Trains</TitleSection>
        <SelectOption search={search} onSelectHandler={onSelectHandler} />
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-x-5  px-4 mb-0 ">
        {filteredTrains.map((train) => {
          return <Cart key={train.id} cartData={train} />;
        })}
      </div>
    </Layout>
  );
};

export default TrainPage;
