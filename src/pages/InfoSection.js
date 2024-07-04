import React from "react";

const InfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to dive into HABOT?</h2>
        <p className="mb-8">
          Sign up for HABOT and connect with suppliers to find the best deals
          and opportunities for your business.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            For Buyers
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            For Suppliers
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
