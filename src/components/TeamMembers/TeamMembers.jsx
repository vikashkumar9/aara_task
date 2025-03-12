"use client";
import React, { useEffect } from "react";
import avtar from "../../assets/avtar.jpg";
import linkedin from "../../assets/linkedin.png";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamMembers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const directors = [
    { name: "John Doe", designation: "CEO", image: avtar, linkedin: linkedin },
    {
      name: "Jane Smith",
      designation: "CFO",
      image: avtar,
      linkedin: linkedin,
    },
    {
      name: "Mike Johnson",
      designation: "COO",
      image: avtar,
      linkedin: linkedin,
    },
    {
      name: "Alice Brown",
      designation: "CTO",
      image: avtar,
      linkedin: linkedin,
    },
    {
      name: "Sarah Wilson",
      designation: "CMO",
      image: avtar,
      linkedin: linkedin,
    },
    {
      name: "James White",
      designation: "VP",
      image: avtar,
      linkedin: linkedin,
    },
    { name: "John Doe", designation: "CEO", image: avtar, linkedin: linkedin },
    {
      name: "Jane Smith",
      designation: "CFO",
      image: avtar,
      linkedin: linkedin,
    },
    {
      name: "Mike Johnson",
      designation: "COO",
      image: avtar,
      linkedin: linkedin,
    },
    {
      name: "Alice Brown",
      designation: "CTO",
      image: avtar,
      linkedin: linkedin,
    },
    {
      name: "Sarah Wilson",
      designation: "CMO",
      image: avtar,
      linkedin: linkedin,
    },
  ];

  return (
    <div className="py-12 px-6 bg-white ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-black">Meet Our Teams</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {directors.map((director, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white shadow-md rounded-tl-2xl rounded-br-2xl p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={director.image}
              alt={director.name}
              className="w-28 h-32 rounded-full mb-4"
            />
            <div className="flex items-center mb-2">
              <h3 className="text-lg text-black font-semibold">
                {director.name}
              </h3>
              <div className="ml-2">
                <img
                  src={linkedin}
                  height="20px"
                  width="20px"
                  alt="LinkedIn"
                  className="border rounded"
                />
              </div>
            </div>
            <p className="text-gray-500 text-sm my-4">{director.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
