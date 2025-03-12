import React from "react";

const Banner = ({ heading, description, bgImage }) => {
  return (
    <div>
      <section
        className="h-[50vh] md:h-[58vh] relative text-white flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gray-400 bg-opacity-50"></div>
        <div className="relative text-center p-6">
          <h1 className="text-3xl font-bold mb-4">{heading}</h1>
          <p className="text-lg mb-6">{description}</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
