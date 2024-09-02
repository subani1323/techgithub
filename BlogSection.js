import React from "react";

const BlogSection = () => {
  return (
    <div className="flex flex-col items-center py-10 ">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-xl text-gray-400">Our Blog</p>
        <h2 className="text-6xl font-semibold text-gray-800">
          Our travel memories
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {/* Card 1 */}
        <div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          style={{ height: "11cm" }}
        >
          <img
            src="her.jpeg" // Replace with the actual image URL
            alt="Travel Trends"
            className="w-full h-60 object-cover" // Increased image height
          />
          <div className="p-4">
            {" "}
            {/* Reduced padding to decrease white space */}
            <p className="text-gray-400 text-xs mb-2">Nov 14, 2022</p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              2023 Travel Trends – what you need to know
            </h3>
            <p className="text-gray-400 text-md">
              2023 taught us valuable life lessons. Plans don’t always work out,
              flexibility in life is key, a...
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          style={{ height: "11cm" }}
        >
          <img
            src="jeep.jpeg" // Replace with the actual image URL
            alt="Jeep Adventure"
            className="w-full h-60 object-cover" // Increased image height
          />
          <div className="p-4">
            {" "}
            {/* Reduced padding to decrease white space */}
            <p className="text-gray-400 text-xs mb-2">Nov 18, 2022</p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Jeep Adventure is a new attraction for tourists visiting Garut
            </h3>
            <p className="text-gray-400 text-md">
              Jeep Adventure is one of the tourist attractions that has been
              popular recently. The sensation...
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center w-full">
        <button
          className="bg-black text-white py-3 rounded-full"
          style={{ width: "5cm" }} // Set the width of the button to 5 cm
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
