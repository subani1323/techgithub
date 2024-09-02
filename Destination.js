import React from "react";

const Destination = () => {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-start w-full max-w-6xl px-6"
      style={{ top: "calc(350vh)" }} // Positioned 3cm below the Home section
    >
      {/* Content Section */}
      <div className="flex justify-between items-start w-full">
        {/* Left Side Content */}
        <div className="w-1/2">
          <p className="text-gray-600 text-2xl mb-4">Tour Packages</p>
          <h2 className="text-black text-4xl font-semibold">
            Our tourist destination
          </h2>
        </div>

        {/* Right Side Content */}
        <div
          className="w-1/2 flex flex-col items-center mt-[1cm]"
          style={{ marginLeft: "4cm" }} // Adjusts the right content positioning
        >
          <p className="text-gray-600 text-xl mb-6">
            Our tourist destinations offer an unrivaled blend of natural beauty
            and cultural richness
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex space-x-4 mt-6">
        {/* Image 1 */}
        <div
          className="relative rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300" // Hover effect added
          style={{ height: "12cm", width: "9.2cm" }} // Increased width
        >
          <img
            src="destination.jpeg"
            alt="Destination 1"
            className="w-full h-full object-cover filter brightness-110" // Increased brightness
          />
          <div
            className="absolute top-4 left-4 bg-gray-600 bg-opacity-40 text-white text-sm px-3 py-1 rounded-2xl" // Reduced opacity
          >
            7 Days
          </div>
          <div
            className="absolute top-4 right-4 bg-gray-600 bg-opacity-40 text-sm px-3 py-1 rounded-2xl flex items-center" // Reduced opacity and flex adjustment
          >
            <span className="text-yellow-400 mr-[0.2cm]">★</span>
            <span className="text-white">4.9</span>{" "}
            {/* Stars in yellow, numbers in white */}
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-grey bg-opacity-50 backdrop-blur-md px-4 py-2 rounded-md flex justify-between items-center">
            {/* Updated blur effect */}
            <div>
              <p className="text-white text-sm">23 August - 29 August</p>
              <h3 className="font-semibold text-lg text-white">
                Bali Tour Package
              </h3>
            </div>
            <div className="text-white text-lg font-bold">$285</div>
          </div>
        </div>

        {/* Image 2 */}
        <div
          className="relative rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300" // Hover effect added
          style={{ height: "12cm", width: "9.2cm" }} // Increased width
        >
          <img
            src="java.jpeg"
            alt="Destination 2"
            className="w-full h-full object-cover filter brightness-110" // Increased brightness
          />
          <div
            className="absolute top-4 left-4 bg-gray-600 bg-opacity-40 text-white text-sm px-3 py-1 rounded-2xl" // Reduced opacity
          >
            5 Days
          </div>
          <div
            className="absolute top-4 right-4 bg-gray-600 bg-opacity-40 text-sm px-3 py-1 rounded-2xl flex items-center" // Reduced opacity and flex adjustment
          >
            <span className="text-yellow-500 mr-[0.2cm]">★</span>
            <span className="text-white">4.9</span>{" "}
            {/* Stars in yellow, numbers in white */}
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-grey bg-opacity-50 backdrop-blur-md px-4 py-2 rounded-md flex justify-between items-center">
            {/* Updated blur effect */}
            <div>
              <p className="text-white text-sm">23 August - 27 August</p>
              <h3 className="font-semibold text-lg text-white">
                Java Tour Package
              </h3>
            </div>
            <div className="text-white text-lg font-bold">$218</div>
          </div>
        </div>

        {/* Image 3 */}
        <div
          className="relative rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300" // Hover effect added
          style={{ height: "12cm", width: "9.2cm" }} // Increased width
        >
          <img
            src="solo.jpeg"
            alt="Destination 3"
            className="w-full h-full object-cover filter brightness-110" // Increased brightness
          />
          <div
            className="absolute top-4 left-4 bg-gray-600 bg-opacity-40 text-white text-sm px-3 py-1 rounded-2xl" // Reduced opacity
          >
            3 Days
          </div>
          <div
            className="absolute top-4 right-4 bg-gray-600 bg-opacity-40 text-sm px-3 py-1 rounded-2xl flex items-center" // Reduced opacity and flex adjustment
          >
            <span className="text-yellow-400 mr-[0.2cm]">★</span>
            <span className="text-white">4.9</span>{" "}
            {/* Stars in yellow, numbers in white */}
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-grey bg-opacity-50 backdrop-blur-md px-4 py-2 rounded-md flex justify-between items-center">
            {/* Updated blur effect */}
            <div>
              <p className="text-white text-sm">23 August - 25 August</p>
              <h3 className="font-semibold text-lg text-white">
                Solo Tour Package
              </h3>
            </div>
            <div className="text-white text-lg font-bold">$163</div>
          </div>
        </div>
      </div>

      {/* View More Button */}
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

export default Destination;
