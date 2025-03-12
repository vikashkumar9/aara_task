import React from "react";
import AwardSlides from "./AwardSlides";

const AwardsSection = () => {
  const awardsData = {
    2024: [
      "VAR India - Best Solution Partner - Star Nite of the Year",
      "ZScaler Growth Partner of the Year award - Partner Summit 24",
      "Infoblox Growth Partner of the Year, India South",
      "Red Hat CY23 Rising Star of the Year - RedHat Summit Connect",
      "F5 Emerging Partner FY24 Chennai Region",
    ],
    2023: [
      "HPE GreenLake Champion H1'23",
      "Infosys - Sambandh - Valuable Partner - Vendor Partner Meet 2023",
      "HPE ProLiant - Esteemed Business Partner",
      "Forcepoint - Best Security Transformation Partner - South",
      "CRN Excellence 2023 award - Enterprise Security",
      "CrowdStrike Partner of the Year",
      "CrowdStrike New Logo Partner of the Year",
    ],
  };

  return (
    <div className="bg-gray-100  py-10 md:py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-theme_color font-bold text-xl">
          Top ranked company
        </h2>
        <h1 className="text-center text-3xl font-bold text-gray-800 my-4">
          Awards & Recognition
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.keys(awardsData).map((year) => (
            <div key={year} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{year}</h3>
              <ul className="space-y-3">
                {awardsData[year].map((award, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-600"
                  >
                    <span className="text-theme_color">🏅</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <AwardSlides />
    </div>
  );
};

export default AwardsSection;
