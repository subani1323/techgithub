import React from "react";

const Review = () => {
  return (
    <div
      className="flex items-center justify-center p-10"
      style={{ marginTop: "70cm" }} // Adjusting the section position
    >
      <div className="flex items-start w-full max-w-4xl">
        {/* Profile Section */}
        <div className="flex flex-col items-center w-1/3 space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="review.jpeg" // Replace with the actual image URL
              alt="Donald Sullivan"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold">Donald Sullivan</h3>
              <p className="text-sm text-gray-500">Founder Fiko</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div
            className="flex space-x-4 justify-center"
            style={{ marginTop: "1.5cm" }} // Positioning directly below the profile section
          >
            <button className="text-gray-500 hover:text-black transition">
              <span className="text-5xl">←</span> {/* Increased arrow size */}
            </button>
            <button className="text-gray-500 hover:text-black transition">
              <span className="text-5xl">→</span> {/* Increased arrow size */}
            </button>
          </div>
        </div>

        {/* Review Text Section */}
        <div className="flex-1 relative ml-16">
          <span
            className="absolute text-[17rem] text-gray-200"
            style={{
              left: "0.6rem",
              lineHeight: "0.5",
              zIndex: "-1",
            }}
          >
            “
          </span>
          <blockquote className="text-gray-600 text-lg ml-4 relative z-10">
            {/* The apostrophe is positioned behind the blockquote */}
            This travel website is very informative and easy to use. I like how
            they present various destination options and travel packages with
            clear details. Offering pictures and destination descriptions helps
            me decide where I want to visit. Additionally, the ability to
            compare prices and reviews from other users is very helpful in
            decision making.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Review;
