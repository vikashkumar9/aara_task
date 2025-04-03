import React, { useState } from "react";
import Header from "../../components/header/Header";
import WeeklyTrendGraph from "../../components/Graphs/weeklyTrendGraph/WeeklyTrendGraph";
import ServiceLevelGraph from "../../components/Graphs/serviceLevelGraph/ServiceLevelGraph";
import ServiceLevelTopTwnFive from "../../components/Graphs/serviceLevelTopTwnFive/ServiceLevelTopTwnFive";
import AdoptWeeklyTrendGraph from "../../components/Graphs/adoptweklyTrendGraph/AdoptWeeklyTrendGraph";
import AdoptionByDays from "../../components/Graphs/adoptionByDays/AdoptionByDays";
import NurseStationChart from "../../components/Graphs/nurseStationChart/NurseStationChart";
import AdoptionbyInterface from "../../components/Graphs/adoptionbyInterface/AdoptionbyInterface";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Service Level");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="overflow-hidden">
      <Header />

      {/* Header Section */}
      <header className="bg-gray-100 border p-4 border-[#30879f] flex items-center justify-between m-8 rounded">
        <div className="flex items-center">
          <h2 className="text-sm text-[#30879f]">Service Level</h2>
        </div>

        {/* Dropdown Menu */}
        <div>
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="ml-4 border border-gray-300 rounded px-3 py-1 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Patient Only">Patient Only</option>
            <option value="Attendant Only">Attendant Only</option>
            <option value="Patient and Attendant">Patient and Attendant</option>
            <option value="Internal Staff">Internal Staff</option>
          </select>
        </div>

        {/* Date Filter Section */}
        <div className="relative">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">24 Mar - 30 Mar</span>
            <img
              src="https://request.treatwellapp.com/img/Filter.png"
              alt="Filter"
              className="cursor-pointer"
              onClick={toggleDropdown}
            />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
              <ul>
                <li
                  onClick={() => console.log("Single Mode Selected")}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Single Mode
                </li>
                <li
                  onClick={() => console.log("Custom Mode Selected")}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Custom Mode
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Toggle Buttons */}
      <div className="flex space-x-2 ml-16">
        <button
          onClick={() => handleButtonClick("Service Level")}
          className={`px-4 py-1 text-xs rounded ${
            activeButton === "Service Level"
              ? "bg-gray-300 text-[#30879f]"
              : "bg-white text-[#30879f]"
          }`}
        >
          Service Level
        </button>

        <button
          onClick={() => handleButtonClick("Requests")}
          className={`px-4 py-1 text-xs rounded ${
            activeButton === "Requests"
              ? "bg-gray-300 text-[#30879f]"
              : "bg-white text-[#30879f]"
          }`}
        >
          Requests
        </button>
      </div>

      {/* Content Section */}
      {activeButton === "Service Level" ? (
        <>
          {/* Graph Section */}
          <div className="bg-gray-100 border h-[80vh] p-4 flex justify-between mx-8 rounded">
            <div className="flex-grow bg-white pr-4">
              <div className="text-[#30879f] bg-[#d9edf7] p-4 text-sm">
                Service Level Weekly Trend
              </div>
              <WeeklyTrendGraph />
            </div>

            <div className="flex-grow bg-white px-4">
              <div className="text-[#30879f] bg-[#d9edf7] p-4 text-sm">
                Service Level By Departments, 24 Mar - 30 Mar
              </div>
              <ServiceLevelGraph />
            </div>
          </div>

          {/* Top 25 Tasks Section */}
          <div className="bg-gray-100 border p-4 mx-8 rounded">
            <div className="text-[#30879f] bg-[#d9edf7] p-4 text-sm">
              Service Level By Top 25 Task, 24 Mar - 30 Mar
            </div>
            <ServiceLevelTopTwnFive />
          </div>
        </>
      ):
      
      
      
      ( <>
        {/* Graph Section */}
        <div className="bg-gray-100 border h-[80vh] p-4 flex justify-between mx-8 rounded">
          <div className="flex-grow bg-white pr-4">
            <div className="text-[#30879f] bg-[#d9edf7] p-4 text-sm">
            Adoption Weekly Trend
            </div>
        <AdoptWeeklyTrendGraph/>
          </div>

          <div className="flex-grow bg-white px-4">
            <div className="text-[#30879f] bg-[#d9edf7] p-4 text-sm">
            Adoption By Days, 24 Mar - 30 Mar
            </div>
            <AdoptionByDays/>
          </div>
        </div>

        {/* Top 25 Tasks Section */}
        <div className="bg-gray-100 border p-4 mx-8 rounded">
          <div className="text-[#30879f] bg-[#d9edf7] p-4 text-sm">
          Adoption By Nurse Stations, 24 Mar - 30 Mar

          </div>
          <NurseStationChart/>
        </div>
        <div className="bg-gray-100 border p-4 mx-8 rounded">
          <div className="text-[#30879f] bg-[#d9edf7] p-4 text-sm">
          Adoption by Interface, 24 Mar - 30 Mar

          </div>
          <AdoptionbyInterface/>

        </div>
      </>

      )}
    </div>
  );
};

export default Dashboard;
