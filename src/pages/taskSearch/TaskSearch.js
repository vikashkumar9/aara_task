import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

const TaskSearch = () => {
  const [activeButton, setActiveButton] = useState("Last 7 Days");
  const [selectedDateFrom, setSelectedDateFrom] = useState(dayjs());
  const [selectedDateTo, setSelectedDateTo] = useState(dayjs());
  const [statusButton, setStatusButton] = useState("Open");
  const [teamButton, setTeamButton] = useState("Assigned to my team");

  // Logs state changes
  useEffect(() => {
    console.log("Filters:", { activeButton, selectedDateFrom, selectedDateTo, statusButton, teamButton });
  }, [activeButton, selectedDateFrom, selectedDateTo, statusButton, teamButton]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Header />
        <div className="flex flex-col items-center pt-4 h-screen">
          <div className="w-full max-w-6xl bg-white rounded-lg border-gray-200 border-2 pb-8">
            {/* Header */}
            <div className="bg-gray-200 py-3 px-4 rounded-t-lg">
              <h2 className="text-center text-sm text-gray-700">Search Task/Request</h2>
            </div>

            {/* Task Raised On */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Task raised on:</p>
              <div className="flex gap-4">
                {["Today", "Yesterday", "Last 7 Days", "Other Days"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setActiveButton(label)}
                    className={`px-4 text-xs border py-1 rounded-md ${
                      activeButton === label
                        ? "text-white bg-[#30879f]"
                        : "text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Pickers for Other Days */}
            {activeButton === "Other Days" && (
              <div className="mt-4">
                <div className="flex items-center mb-4">
                  <p className="text-sm w-1/4 md:pl-28 pr-4">From:</p>
                  <DatePicker
                    value={selectedDateFrom}
                    onChange={setSelectedDateFrom}
                    renderInput={(params) => <TextField {...params} className="w-1/2" />}
                  />
                </div>
                <div className="flex items-center mb-4">
                  <p className="text-sm w-1/4 md:pl-28 pr-4">To:</p>
                  <DatePicker
                    value={selectedDateTo}
                    onChange={setSelectedDateTo}
                    renderInput={(params) => <TextField {...params} className="w-1/2" />}
                  />
                </div>
              </div>
            )}

            {/* Status Buttons */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Status:</p>
              <div className="flex gap-4">
                {["Open", "Fixed"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setStatusButton(label)}
                    className={`px-4 text-xs border py-1 rounded-md ${
                      statusButton === label
                        ? "text-white bg-[#30879f]"
                        : "text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Token ID */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Request token id:</p>
              <input
                type="text"
                placeholder="Token"
                className="border border-gray-300 rounded-md px-3 py-1 w-24 focus:outline-none focus:border-[#30879f] text-sm"
              />
            </div>

            {/* Team Buttons */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Team:</p>
              <div className="flex gap-4">
                {["Assigned to my team", "Raised by my team"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setTeamButton(label)}
                    className={`px-4 text-xs border py-1 rounded-md ${
                      teamButton === label
                        ? "text-white bg-[#30879f]"
                        : "text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Input */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Location:</p>
              <input
                type="text"
                placeholder="Enter Location"
                className="border border-gray-300 rounded-md px-3 focus:outline-none focus:border-[#30879f] text-xl w-56"
              />
            </div>

            {/* Search Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-[#30879f] text-white px-6 py-2 rounded-md text-xs hover:bg-[#24667a] transition-all">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default TaskSearch;
