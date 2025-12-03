import React from "react";

const ranges = [
  { age: "0-3", color: "from-purple-400 to-purple-600" },
  { age: "3-6", color: "from-teal-400 to-teal-600" },
  { age: "6-9", color: "from-pink-300 to-pink-500" },
  { age: "9-12", color: "from-lime-300 to-lime-500" },
];

const Range = () => {
  return (
    <div className="py-10 px-4">
      <h1 className="font-extrabold text-3xl md:text-4xl text-center text-purple-700 mb-10 drop-shadow-md">
        Choose the Right Toy for Every Age
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {ranges.map((range, index) => (
          <div
            key={index}
            className={`
              w-20 h-20 md:w-32 md:h-32 
              flex items-center justify-center 
              rounded-full 
              bg-gradient-to-br ${range.color} 
              text-white font-bold md:text-2xl 
              shadow-2xl 
              cursor-pointer
              transform transition hover:scale-110
            `}
          >
            {range.age}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Range;
