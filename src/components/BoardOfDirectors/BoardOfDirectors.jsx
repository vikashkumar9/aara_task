import React, { useEffect } from "react";
import avtar from "../../assets/avtar.jpg";
import linkedin from "../../assets/linkedin.png";
import AOS from "aos";
import "aos/dist/aos.css";

const BoardOfDirectors = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const directors = [
    {
      name: "John Doe",
      designation: "CEO",
      image: avtar,
      linkedin: linkedin,
    },
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
  ];

  return (
    <div className="py-12 px-6 bg-white md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Board of Directors & Leadership
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {directors.map((director, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white shadow-md rounded-tl-2xl rounded-br-2xl p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={director.image}
              alt={director.name}
              className="w-32 h-48 rounded-full mb-4"
            />
            <div className="flex items-center mb-4">
              <h3 className="text-xl text-black font-semibold">
                {director.name}
              </h3>
              <div className="ml-4">
                <img
                  src={linkedin}
                  height="30px"
                  width="30px"
                  alt="LinkedIn"
                  className="border rounded"
                />
              </div>
            </div>
            <p className="text-gray-500 my-4">{director.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
