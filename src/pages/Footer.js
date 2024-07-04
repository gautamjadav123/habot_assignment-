import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <div className="container mx-auto">
        <p>&copy; 2024 HABOT. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#facebook" className="hover:underline">
            Facebook
          </a>
          <a href="#twitter" className="hover:underline">
            Twitter
          </a>
          <a href="#linkedin" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
