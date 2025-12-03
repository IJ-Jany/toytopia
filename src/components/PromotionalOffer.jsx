import React from "react";

const offers = [
  { title: "Teddy Bears Fiesta", discount: "50% OFF" },
  { title: "Magic Puzzle Pack", discount: "BOGO" },
  { title: "Fun Building Blocks", discount: "30% OFF" },
  { title: "Colorful Crayons Set", discount: "25% OFF" },
];

const SimpleTextPromotions = () => {
  return (
    <div className=" mt-8 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4 py-10">
      
      {/* Hero Section */}
      <div className="text-center ">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          🎉 Our Latest Offers 🎉
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Grab amazing deals on our fun and educational toys!
        </p>
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition cursor-pointer"
          >
            <h2 className="text-purple-700 font-bold text-xl mb-2">
              {offer.title}
            </h2>
            <span className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-full">
              {offer.discount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleTextPromotions;
