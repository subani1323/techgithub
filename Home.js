import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMoneyBill,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Home = () => {
  const [selectedLang, setSelectedLang] = useState("En");
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="relative h-screen bg-cover bg-center rounded-2xl"
      style={{
        backgroundImage: "url('/mountain3.jpeg')",
        margin: "0.3cm",
      }}
    >
      <nav className="flex justify-between items-center p-5 relative z-10">
        {/* Mobile Menu Icon */}
        <div
          className="block lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Logo */}
        <div
          className="text-white text-2xl font-bold"
          style={{ marginLeft: "2cm", marginRight: "1cm" }}
        >
          INDOTRAVI
        </div>

        {/* Navbar Links */}
        <div
          className={`lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-2 rounded-full ${
            isMenuOpen ? "block" : "hidden lg:block"
          }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            marginLeft: "2cm",
            marginRight: "2cm",
          }}
        >
          {["About", "Services", "Tour", "Contact"].map((link) => (
            <a
              href={`#${link.toLowerCase()}`}
              key={link}
              onClick={() => setActiveLink(link)}
              className={`text-white p-2 rounded-full ${
                activeLink === link ? "shadow-lg" : ""
              } hover:font-bold`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Language and Login Buttons */}
        <div
          className="flex space-x-4 items-center"
          style={{ marginLeft: "1.5cm" }}
        >
          <div
            className="flex space-x-2 p-2 rounded-full"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <button
              onClick={() => setSelectedLang("De")}
              className={`${
                selectedLang === "De" ? "bg-white text-black" : "text-white"
              } px-4 py-2 rounded-full`}
            >
              De
            </button>
            <button
              onClick={() => setSelectedLang("En")}
              className={`${
                selectedLang === "En" ? "bg-white text-black" : "text-white"
              } px-4 py-2 rounded-full`}
            >
              En
            </button>
          </div>
          <button
            className="bg-white text-black border border-white rounded-full"
            style={{ padding: "0.75rem 2rem" }}
          >
            Login
          </button>
        </div>
      </nav>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0"
        style={{ top: "0.01cm" }}
      >
        <h1 className="text-white text-6xl md:text-8xl font-normal mb-4">
          Extraordinary natural
          <br />
          and cultural charm
        </h1>
        <p className="text-white text-2xl md:text-3xl mt-2">
          Exploring Indonesia is an unforgettable adventure
        </p>
      </div>

      {/* New Container with Background Color */}
      <div
        className="absolute top-[calc(100vh-6cm)] left-1/2 transform -translate-x-1/2 w-full max-w-4xl p-4 rounded-full flex items-center justify-between"
        style={{
          backgroundColor: "rgb(225, 225, 225, 0.2)",
        }}
      >
        {/* Date Section */}
        <div className="flex items-center">
          <FaCalendarAlt
            className="text-white"
            style={{ marginRight: "1cm", marginLeft: "1cm" }}
          />
          <span className="text-white" style={{ marginRight: "1cm" }}>
            Date
          </span>
          <select className="border-none outline-none bg-transparent text-white">
            {/* Options here */}
          </select>
        </div>

        {/* Vertical Line */}
        <div className="h-8 w-px bg-white mx-2"></div>

        {/* Budget Section */}
        <div className="flex items-center">
          <FaMoneyBill className="text-white" style={{ marginRight: "1cm" }} />
          <span className="text-white" style={{ marginRight: "1cm" }}>
            Budget
          </span>
          <select className="border-none outline-none bg-transparent text-white">
            {/* Options here */}
          </select>
        </div>

        {/* Vertical Line */}
        <div className="h-8 w-px bg-white mx-2"></div>

        {/* Guest Section */}
        <div className="flex items-center">
          <FaUser className="text-white" style={{ marginRight: "1cm" }} />
          <span className="text-white" style={{ marginRight: "1cm" }}>
            Guests
          </span>
          <select className="border-none outline-none bg-transparent text-white">
            {/* Options here */}
          </select>
        </div>

        {/* Space Button */}
        <button
          className="bg-white text-black rounded-full px-6 py-2"
          style={{ marginLeft: "1cm" }} // Adjust marginLeft to be closer to dropdown
        >
          Search
        </button>
      </div>

      {/* New Containers Section Below Search Bar */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center"
        style={{ top: "calc(90vh)" }} // Positioned 2cm below the search bar
      >
        <div
          className="bg-white bg-opacity-100 p-4 rounded-2xl shadow-2xl w-60 h-40 flex flex-col items-center justify-center"
          style={{ marginRight: "1.5cm" }}
        >
          <h2 className="text-black text-4xl font-semibold">10M+</h2>
          <p className="text-gray-400 text-lg text-center mt-2">
            Total Customers
          </p>
        </div>
        <div
          className="bg-white bg-opacity-100 p-4 rounded-2xl shadow-2xl w-60 h-40 flex flex-col items-center justify-center"
          style={{ marginRight: "1.5cm" }}
        >
          <h2 className="text-black text-4xl font-semibold">09+</h2>
          <p className="text-gray-400 text-lg text-center mt-2">
            Years of Experience
          </p>
        </div>
        <div
          className="bg-white bg-opacity-100 p-4 rounded-2xl shadow-2xl w-60 h-40 flex flex-col items-center justify-center"
          style={{ marginRight: "1.5cm" }}
        >
          <h2 className="text-black text-4xl font-semibold">12K</h2>
          <p className="text-gray-400 text-lg text-center mt-2">
            Total Destinations
          </p>
        </div>
        <div className="bg-white bg-opacity-100 p-4 rounded-2xl shadow-2xl w-60 h-40 flex flex-col items-center justify-center">
          <h2 className="text-black text-4xl font-semibold">5.0</h2>
          <p className="text-gray-400 text-lg text-center mt-2">
            Average Rating
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
