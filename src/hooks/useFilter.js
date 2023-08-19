import { useState, useEffect } from "react";
import trains from "./../model/trains";

const useFilter = () => {
   const [filteredTrains, setFilteredTrains] = useState(trains);
   const [search, setSearch] = useState("");

   useEffect(() => {
      const newArray = trains.filter((train) =>
         train.technology.toString().toLowerCase().includes(search.toLowerCase())
      );
      setFilteredTrains(newArray);
   }, [search]);

   const onSelectHandler = (val) => setSearch(val);

   return { search, onSelectHandler, filteredTrains };
};
export default useFilter;
