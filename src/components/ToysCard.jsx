import React from "react";
import { NavLink } from "react-router";

const ToysCard = ({ item }) => {
  const {
    pictureURL,
    toyName,
    price,
    rating,
    availableQuantity,
    toyId,
    description,
  } = item;

  // Short description (limit around 10–14 words)
  const shortDesc =
    description.length > 60
      ? description.slice(0, 60) + "..."
      : description;

  return (
    <div className="bg-white rounded-3xl shadow-md border border-teal-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">

      {/* IMAGE */}
      <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={pictureURL}
          alt={toyName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <h1 className="font-bold text-xl text-center text-purple-700">
          {toyName}
        </h1>

        <p className="text-gray-600 text-sm text-center">{shortDesc}</p>

        <div className="flex justify-between items-center">
          <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full">
            ⭐ {rating}
          </span>

          <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
            ${price}
          </span>
        </div>

        <p className="text-center text-gray-600 text-sm">
          Available: <span className="font-semibold">{availableQuantity}</span>
        </p>

        <div className="flex justify-center mt-4">
          <NavLink
            to={`/toys/${toyId}`}
            className="bg-purple-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-teal-600 transition"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
