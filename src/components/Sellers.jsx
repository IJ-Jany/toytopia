import React from "react";
import Marquee from "react-fast-marquee";

const Sellers = ({ data }) => {
  return (
    <div className="my-10 px-4">
      <h1 className="text-center text-4xl md:text-5xl font-extrabold text-purple-700 pb-6 drop-shadow-md">
        Our Sellers
      </h1>

      <div className="border-2 border-purple-300 rounded-3xl bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 shadow-lg py-4">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="flex items-center space-x-6"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer flex items-center justify-center min-w-[120px]"
            >
              <h1 className="font-semibold text-purple-700 text-lg md:text-xl text-center">
                {item.sellerName}
              </h1>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Sellers;
