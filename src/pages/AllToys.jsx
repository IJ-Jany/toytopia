import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ToysCard from '../components/ToysCard';

const AllToys = () => {
  const data = useLoaderData();

  const [sortOrder, setSortOrder] = useState(""); // asc | desc
  const [filterCategory, setFilterCategory] = useState("all");

  // Unique category list
  const categories = ["all", ...new Set(data.map(item => item.subCategory))];

  // Filtering Logic
  const filteredToys =
    filterCategory === "all"
      ? data
      : data.filter(item => item.subCategory === filterCategory);

  // Sorting Logic
  const sortedToys = [...filteredToys].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0; // no sorting
  });

  return (
    <div className="w-11/12 mx-auto">

      <h1 className='text-center py-3 text-3xl md:text-4xl font-bold text-purple-700 mb-10'>
        Our All Amazing Toys
      </h1>

      {/* === Filter & Sort Section === */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">

        {/* Sort */}
        <div>
          <label className="font-semibold text-gray-700 mr-2">Sort by Price:</label>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-400 px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Default</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </div>

        {/* Filter */}
        <div>
          <label className="font-semibold text-gray-700 mr-2">Filter Category:</label>
          <select
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-400 px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {sortedToys.map((item) => (
          <ToysCard key={item.toyId} item={item}></ToysCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
