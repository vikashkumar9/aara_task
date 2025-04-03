import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import TimeModel from "../../components/timeModel/TimeModel";
import Select from "react-select";
import BASE_URL from "../../config";
import axios from "axios";
import { useGetPostQuery } from "../servies/post";

const Addtask = () => {
  const [location, setLocation] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(true);
  const [requestedFor, setRequestedFor] = useState("Patient"); // Default selection
  const [timeSelection, setTimeSelection] = useState("Now"); // Default time
  const [showTimeModel, setShowTimeModel] = useState(false);
  const [task, setTask] = useState("");
  const [locationData, setLocationData] = useState(null);

  // const { data, error, isLoading } = useGetPostQuery({ page: 1, limit: 10 });
  // console.log("data", data);
  // const token = localStorage.getItem("token");
  const token = "343345435";

  console.log(token);
  useEffect(() => {
    if (!token) {
      console.error("No token found, user might not be logged in.");
      return; // Stop execution if there's no token
    }

    axios
      .get(`${BASE_URL}/bed-management-api/`, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setLocationData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error.response?.data || error.message
        );
      });
  }, []);

  // console.log(locationData);
  // axios.interceptors.request.use((config) => {
  //   const token = localStorage.getItem("token"); // Fetch the latest token
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  //   return config;
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_URL}/bed-management-api/`);
  //       setLocationData(response.data);
  //       console.log("Fetched Data:", response.data); // Log after setting state
  //     } catch (error) {
  //       console.error(
  //         "Error fetching data:",
  //         error.response?.data || error.message
  //       );
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleTimeSelection = (time) => {
    setTimeSelection(time);
    if (time === "Later") {
      setShowTimeModel(true);
    }
  };

  const options = [
    { value: "bed1", label: "Bed 1" },
    { value: "bed2", label: "Bed 2" },
    { value: "roomA", label: "Room A" },
    { value: "roomB", label: "Room B" },
    { value: "locationX", label: "Location X" },
    { value: "locationY", label: "Location Y" },
  ];

  return (
    <div>
      <Header />
      {showTimeModel && (
        <TimeModel
          showTimeModel={showTimeModel}
          setShowTimeModel={setShowTimeModel}
        />
      )}
      <div className="flex flex-col items-center pt-4 h-screen ">
        <div className="w-full max-w-6xl bg-white rounded-lg border-gray-200 border-2">
          {/* Header */}
          <div className="bg-gray-200 py-3 px-4 rounded-t-lg">
            <h2 className="text-center text-lg  text-gray-700">
              New Task/Request
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            {isInputVisible ? (
              <div className="flex justify-center mb-4">
                <Select
                  options={options}
                  value={location ? { value: location, label: location } : null}
                  onChange={(selected) => {
                    setLocation(selected ? selected.value : "");
                    setIsInputVisible(false);
                  }}
                  placeholder="Bed / Room / Location"
                  isSearchable
                  className="basic-single w-full sm:w-[60%] md:w-[40%]"
                  classNamePrefix="select"
                />
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap sm:flex-nowrap text-gray-700 px-4 sm:px-32">
                  <p className="font-semibold ">Location:</p>
                  <p className="ml-0 sm:ml-20">{location}</p>{" "}
                  {/* Show selected location */}
                </div>

                <div className="mb-4 flex flex-wrap sm:flex-nowrap px-4 sm:px-32">
                  <p className="mb-2 sm:mb-0 text-sm">Task:</p>
                  <input
                    type="text"
                    placeholder="Enter Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="w-full sm:w-[40%] sm:ml-28 px-4 py-1 mt-2 sm:mt-0 border rounded-md border-gray-300 focus:outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Enter comments (optionals)"
                    className="w-full sm:w-[30%] px-4 py-1 mt-2 sm:mt-0 sm:ml-4 border rounded-md border-gray-300 focus:outline-none"
                  />
                </div>

                {task.length > 0 && (
                  <>
                    <div className="mb-4 flex flex-wrap sm:flex-nowrap px-4 sm:px-32">
                      <label className="flex items-center text-sm">
                        Assign To:
                      </label>
                      <div className="ml-4 sm:ml-16">
                        <input type="checkbox" className="mr-2 text-sm" />
                        Auto Assign Team
                      </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap px-4 text-sm sm:px-32 sm:ml-36">
                      <p>Bio Medical Engineering</p>
                      <select className="w-full sm:w-[40%] ml-0 sm:ml-20 px-4 py-1 mt-2 sm:mt-0 border rounded-md border-gray-300 focus:outline-none">
                        <option>Bio Medical Engineering</option>
                        <option>Maintenance</option>
                        <option>IT Support</option>
                      </select>
                    </div>
                    <p className="flex justify-center text-red-500 mt-2">
                      Assigned team has no department
                    </p>

                    <div className="mb-2 px-4 sm:px-32 flex flex-wrap gap-4 text-sm">
                      <p>Requested For:</p>
                      <div className="flex flex-wrap gap-4 ml-4 mt-2">
                        {["Patient", "Attendant", "Staff"].map((type) => (
                          <button
                            key={type}
                            className={`px-4 text-sm border rounded-md ${
                              requestedFor === type
                                ? "bg-[#30879f] text-white"
                                : "border-[#30879f] text-[#30879f]"
                            }`}
                            onClick={() => setRequestedFor(type)}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 flex justify-center px-4">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full sm:w-[30%] px-4 py-1 mt-2 border rounded-md border-gray-300 focus:outline-none"
                      />
                    </div>

                    <div className="flex gap-4 mb-4 justify-center px-4">
                      {["Now", "Later"].map((time) => (
                        <button
                          key={time}
                          className={`px-6 sm:px-8 pb-1 text-sm border rounded-md ${
                            timeSelection === time
                              ? "bg-[#30879f] text-white"
                              : "text-[#30879f] border-[#30879f]"
                          }`}
                          onClick={() => handleTimeSelection(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    <div className="text-center">
                      <button className="px-6 py-1 bg-[#7f7f7f] text-white rounded-md">
                        Create New Task
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtask;
