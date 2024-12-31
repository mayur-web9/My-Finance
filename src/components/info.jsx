import React, { useState } from "react";
import { IoFilterSharp, IoSearchOutline } from "react-icons/io5";
import { Navigate } from "react-router-dom";

const Info = ({ title, subTitle }) => {
  const [filterValue, setFilterValue] = useState("");
  
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-8">
      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-black dark:text-gray-300 mb-2">
          {title}
        </h1>
        <span className="text-gray-600 dark:text-gray-500">{subTitle}</span>
      </div>

      <div className="flex items-center gap-4 md:gap-10 2xl:gap-20">
        <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-md p-2">
          <IoSearchOutline className="text-xl text-gray-600 dark:text-gray-500" />
          <input
            type="text"
            role="combobox"
            placeholder="Search for transactions..."
            className="bg-transparent outline-none text-gray-700 dark:text-gray-500">
          </input>
         <button 
          className="bg-transparent outline-none text-gray-700 dark:text-gray-500"
         onClick={() => navigate('/transactions')}
         >
          <a href="/transactions">                      
          Search</a>
          </button>
        </div>
        <div className="flex items-center gap-2 bg-black dark:bg-violet-800 py-2 px-4 rounded text-white">
          <label className="flex items-center gap-2 bg-black dark:bg-violet-800 py-2 px-4 rounded text-white">
            <IoFilterSharp size={24} />
            <span>
              <a href="/"> Filter By</a>
            </span>
          </label>
          <select
            value={filterValue}
            onChange={handleFilterChange}
            className="bg-transparent outline-none"
          >
            <option className="bg-black" value="All">
              All
            </option>
            <option className="bg-black" value="Current">
              {" "}
              Current
            </option>
            <option className="bg-black" value="Previous">
              {" "}
              Previous
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Info;
