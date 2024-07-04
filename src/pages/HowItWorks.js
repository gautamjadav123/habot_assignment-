import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">How it works?</h2>
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <div className="mb-2">
              <img src="https://via.placeholder.com/50" alt="Step 1" />
            </div>
            <p>Select Your Requirement</p>
          </div>
          <div className="text-center">
            <div className="mb-2">
              <img src="https://via.placeholder.com/50" alt="Step 2" />
            </div>
            <p>Post Your Requirement</p>
          </div>
          <div className="text-center">
            <div className="mb-2">
              <img src="https://via.placeholder.com/50" alt="Step 3" />
            </div>
            <p>Review and Connect</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
