import React from "react";
import backgroundImage from "../photos/background-img.png";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center text-white py-24"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4">Are You a Supplier?</h1>
        <p className="text-6xl mb-6">Explore Matching Opportunities.</p>
        <form className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="p-2 border border-gray-300 rounded w-1/3"
          />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="p-2 border border-gray-300 rounded w-1/3"
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
