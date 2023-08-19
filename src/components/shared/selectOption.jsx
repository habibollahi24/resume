import React from "react";

const SelectOption = ({ search, onSelectHandler }) => {
  return (
    <div className="flex flex-col items-center md:flex-row space-y-1 md:space-y-0">
      <span className="text-xs text-gray-700 dark:text-gray-200 tracking-tighter">
        Search by Technology:
      </span>
      <select
        value={search}
        onChange={(e) => onSelectHandler(e.target.value)}
        className="px-4 py-1 ml-2 rounded-md outline-none appearance-none "
      >
        <option value="">All</option>
        <option value="javascript">Javascript</option>
        <option value="react">React</option>
        <option value="next">Next</option>
        <option value="mongodb">Mongo DB</option>
        <option value="node">Node.js</option>
        <option value="tailwind">Tailwind</option>
        <option value="typescript">Typescript</option>
        <option value="material-ui">Material-ui</option>
        <option value="json-server">Json-Server</option>
      </select>
    </div>
  );
};

export default SelectOption;
