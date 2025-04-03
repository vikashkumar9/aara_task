import React, { useState } from "react";

import ComplaintHeader from "../../components/complaintHeader/ComplaintHeader";

const ComplaintDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="overflow-hidden">
      <ComplaintHeader />
      {/* Header Section */}
      <header className="bg-gray-100 border p-4 border-[#30879f] flex items-center justify-between m-8 rounded">
        <div className="flex items-center">
          <h2 className="text-sm text-[#30879f]">Complaint Dashboard</h2>
        </div>

        {/* Dropdown Menu */}
        <div>
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="ml-4 border border-[#30879f] rounded px-3 py-1 text-sm text-[#30879f] outline-none bg-transparent focus:ring-2 "
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

      <div className="bg-gray-100 border h-[80vh] p-4 flex justify-between mx-8 rounded">
        graphs
      </div>
      
    </div>
  );
};

export default ComplaintDashboard;



