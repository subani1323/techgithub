import React from "react";

const About = () => {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 flex justify-between items-start w-full max-w-6xl px-6"
      style={{ top: "calc(110vh + 3cm)" }} // Positioned 3cm below the Home section
    >
      {/* Left Side Content */}
      <div className="w-1/2">
        <p className="text-gray-600 text-2xl mb-4">Best Location</p>
        <h2 className="text-black text-4xl font-semibold">
          Indonesian Tourism
        </h2>
      </div>

      {/* Right Side Content */}
      <div
        className="w-1/2 flex items-center mt-[1cm]"
        style={{ marginLeft: "4cm" }} // Adjusts the right content positioning
      >
        <p className="text-gray-600 text-xl">
          Extraordinary natural beauty, enjoy the rich culture, and experience
          the friendliness of the local people.
        </p>
      </div>
    </div>
  );
};

export default About;
