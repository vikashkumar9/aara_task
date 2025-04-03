import React, { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import ComplaintHeader from "../../components/complaintHeader/ComplaintHeader";

const ComplainTaskSearch = () => {
  const [activeButton, setActiveButton] = useState("Last 7 Days");
  const [selectedDateFrom, setSelectedDateFrom] = useState(dayjs());
  const [selectedDateTo, setSelectedDateTo] = useState(dayjs());
  const [statusButton, setStatusButton] = useState("Open");
  const [downloadButton, setDownloadButton] = useState(false);
  const [searchActiveButton, setSearchActiveButton] = useState("Mobile Number");

  const downloadHandler = () => {
    setDownloadButton((prev) => !prev);
  };
  // Logs state changes
  useEffect(() => {
    console.log("Filters:", {
      activeButton,
      selectedDateFrom,
      selectedDateTo,
      statusButton,
    });
  }, [activeButton, selectedDateFrom, selectedDateTo, statusButton]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <ComplaintHeader />
        <div className="flex flex-col items-center pt-4 h-screen">
          <div className="w-full max-w-6xl bg-white rounded-lg border-gray-200 border-2 pb-8">
            {/* Header */}
            <div className="bg-gray-200 py-3 px-4 rounded-t-lg">
              <h2 className="text-center text-sm text-gray-700">
                Search Complaints
              </h2>
            </div>

            {/* Task Raised On */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Raised on:</p>
              <div className="flex gap-4">
                {["Today", "Yesterday", "Last 7 Days", "Other Days"].map(
                  (label) => (
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
                  )
                )}
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
                    renderInput={(params) => (
                      <TextField {...params} className="w-1/2" />
                    )}
                  />
                </div>
                <div className="flex items-center mb-4">
                  <p className="text-sm w-1/4 md:pl-28 pr-4">To:</p>
                  <DatePicker
                    value={selectedDateTo}
                    onChange={setSelectedDateTo}
                    renderInput={(params) => (
                      <TextField {...params} className="w-1/2" />
                    )}
                  />
                </div>
              </div>
            )}

            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Source:</p>
              <div className="flex gap-4">
                {[
                  "General",
                  "Twitter",
                  "Facebook",
                  "Requests marked as complaint",
                  "Feedback",
                ].map((label) => (
                  <button
                    key={label}
                    onClick={() => setActiveButton(label)}
                    className="px-4 text-xs border py-1 rounded-md    text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Buttons */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Status:</p>
              <div className="flex gap-4">
                {["Open", "Close"].map((label) => (
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

            <div className="flex items-center mt-4 ">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Search by :</p>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setSearchActiveButton("Mobile Number")}
                  className={`px-2 text-sm border rounded-md  ${
                    searchActiveButton === "Mobile Number"
                      ? "text-white bg-[#30879f]"
                      : "text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                  }`}
                  aria-label="Tasks Mobile Number"
                >
                  Mobile Number
                </button>
                <button
                  onClick={() => setSearchActiveButton("Email")}
                  className={`px-2 text-sm border rounded-md ${
                    searchActiveButton === "Email"
                      ? "text-white bg-[#30879f]"
                      : "text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                  }`}
                  aria-label="Tasks Email"
                >
                  Email
                </button>
                <button
                  onClick={() => setSearchActiveButton("HH No./UHID")}
                  className={`px-2 text-sm border rounded-md ${
                    searchActiveButton === "HH No./UHID"
                      ? "text-white bg-[#30879f]"
                      : "text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                  }`}
                  aria-label="HH No./UHID"
                >
                  HH No./UHID
                </button>
              </div>
            </div>

            {searchActiveButton === "Mobile Number" && (
              <div className="flex items-center ">
                <label className="text-sm w-1/4 md:pl-28 pr-4">
                  Mobile Number:
                </label>
                <div className="flex items-center border rounded-md">
                  <span className="p-1 bg-white border-r text-gray-700">
                    +91
                  </span>
                  <div className="relative flex-1">
                    <input
                      type="number"
                      placeholder="Enter Mobile Number"
                      className="w- p-1 focus:outline-none border-gray-300 "
                    />
                  </div>
                </div>
              </div>
            )}
            {searchActiveButton === "Email" && (
              <div className="flex items-center ">
                <label className="text-sm w-1/4 md:pl-28 pr-4">Email:</label>
                <div className="flex items-center border rounded-md">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      className="w- p-1 focus:outline-none border-gray-300 "
                    />
                  </div>
                </div>
              </div>
            )}
            {searchActiveButton === "HH No./UHID" && (
              <div className="flex items-center ">
                <label className="text-sm w-1/4 md:pl-28 pr-4">
                  HH No./UHID:
                </label>
                <div className="flex items-center border rounded-md">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      className="w- p-1 focus:outline-none border-gray-300 "
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Location Input */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Complaint Id:</p>
              <input
                type="text"
                placeholder="Enter id"
                className="border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#30879f] text-sm w-64"
              />
            </div>
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4"></p>

              <button
                onClick={downloadHandler}
                className={`px-2 pd-2 text-sm border rounded-md ${
                  downloadButton
                    ? "text-white bg-[#30879f]"
                    : "text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                }`}
              >
                Download Report
              </button>
            </div>
            {downloadButton && (
              <div className="flex items-center mt-4">
                <p className="text-sm w-1/4 md:pl-28 pr-4">Email</p>
                <input
                  type="text"
                  placeholder="Enter id"
                  className="border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#30879f] text-sm w-72"
                />
              </div>
            )}

            {/* Search Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-[#30879f] text-white px-2 py-1 rounded-md text-xs hover:bg-[#24667a] transition-all">
                {downloadButton ? "Send" : "Search"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ComplainTaskSearch;
