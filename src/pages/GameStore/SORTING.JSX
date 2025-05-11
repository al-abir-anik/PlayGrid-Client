import React from 'react';

const SORTING = () => {
    return (
        <div>
             {/* Sorting, Toggle, and Search */}
      <div className="w-3/4 mx-auto bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Search Bar */}
        <div className="w-3/5 flex gap-2 items-center sm:w-auto flex-grow">
          <div className="w-10 h-10 ml-4 rounded-lg bg-gray-100 flex justify-center items-center">
            <CiSearch className="text-2xl text-gray-500"></CiSearch>
          </div>
          <div className="join w-full shadow-sm">
            <input
              // onKeyUp={(e) => setSearch(e.target.value)}
              className="input join-item px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Search by food name"
            />
            <select
              // onChange={(e) => setCategory(e.target.value)}
              className="select join-item w-2/6 border-gray-300"
              defaultValue=""
              aria-label="select"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
        </div>

        {/* Price range filter */}
        <select
          // onChange={(e) => setPriceRange(e.target.value)}
          className="select max-w-sm appearance-none border-gray-300 shadow-sm"
          defaultValue=""
          aria-label="select"
        >
          <option value="" disabled>
            Filter by Price Range
          </option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="201+">$201+</option>
        </select>
      </div>
        </div>
    );
};

export default SORTING;