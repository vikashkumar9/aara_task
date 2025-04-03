import React, {  useState } from 'react';
import Header from '../../components/header/Header';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';

const TaskReport = () => {
  const [activeButton, setActiveButton] = useState('Last 7 Days');
  const [selectedDateFrom, setSelectedDateFrom] = useState(null);
  const [selectedDateTo, setSelectedDateTo] = useState(null);
  const [statusButton, setStatusButton] = useState('Open');
  const [teamButton, setTeamButton] = useState('Assigned to my team');
  const [token, setToken] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  // Function to log data on button click
  const handleSearch = () => {
    const collectedData = {
      taskRaisedOn: activeButton,
      dateFrom: selectedDateFrom ? selectedDateFrom.format('YYYY-MM-DD') : null,
      dateTo: selectedDateTo ? selectedDateTo.format('YYYY-MM-DD') : null,
      status: statusButton,
      team: teamButton,
      tokenId: token,
      location,
      email,
    };

    console.log('Collected Data:', collectedData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Header />
        <div className="flex flex-col items-center pt-4 h-screen">
          <div className="w-full max-w-6xl  bg-white rounded-lg border-gray-200 border-2 pb-8 ">
            {/* Header */}
            <div className="bg-gray-200 py-3 px-4 rounded-t-lg">
              <h2 className="text-center text-sm text-gray-700">Select Filters</h2>
            </div>

            {/* Task Raised On */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Task raised on:</p>
              <div className="flex gap-4">
                {['Today', 'Yesterday', 'Last 7 Days', 'Other Days'].map((label) => (
                  <button
                    key={label}
                    onClick={() => setActiveButton(label)}
                    className={`px-4 text-xs border py-1 rounded-md ${
                      activeButton === label
                        ? 'text-white bg-[#30879f]'
                        : 'text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Pickers for Other Days */}
            {activeButton === 'Other Days' && (
              <div className="mt-4">
                <div className="flex items-center mb-4">
                  <p className="text-sm w-1/4 md:pl-28 pr-4">From:</p>
                  <DatePicker value={selectedDateFrom} onChange={(newValue) => setSelectedDateFrom(newValue)} />
                </div>
                <div className="flex items-center mb-4">
                  <p className="text-sm w-1/4 md:pl-28 pr-4">To:</p>
                  <DatePicker value={selectedDateTo} onChange={(newValue) => setSelectedDateTo(newValue)} />
                </div>
              </div>
            )}

            {/* Status Buttons */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Status:</p>
              <div className="flex gap-4">
                {['Open', 'Fixed'].map((label) => (
                  <button
                    key={label}
                    onClick={() => setStatusButton(label)}
                    className={`px-4 text-xs border py-1 rounded-md ${
                      statusButton === label
                        ? 'text-white bg-[#30879f]'
                        : 'text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]'
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
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 w-24 focus:outline-none focus:border-[#30879f] text-sm"
              />
            </div>

            {/* Team Buttons */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Team:</p>
              <div className="flex gap-4">
                {['Assigned to my team', 'Raised by my team'].map((label) => (
                  <button
                    key={label}
                    onClick={() => setTeamButton(label)}
                    className={`px-4 text-xs border py-1 rounded-md ${
                      teamButton === label
                        ? 'text-white bg-[#30879f]'
                        : 'text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]'
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border border-gray-300 rounded-md px-3 focus:outline-none focus:border-[#30879f] text-sm w-56"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center mt-4">
              <p className="text-sm w-1/4 md:pl-28 pr-4">Email:</p>
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-3 focus:outline-none text-sm py-1 focus:border-[#30879f] w-56"
              />
            </div>

            {/* Search Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-gray-500 text-white px-6 py-1 rounded-md text-xs hover:bg-gray-700" onClick={handleSearch}>
                Search
              </button>
              
            </div>
            <div className='bg-[#d9edf7] flex w-[50%] justify-between m-auto align-middle p-4 rounded mt-4 text-[#30879f]'>
          <div></div>
          <div>Report will be sent to your mail shortly.</div>
          <div className='text-xl'>X</div>
        </div>
          </div>

        </div>
        
      </div>
    </LocalizationProvider>
  );
};

export default TaskReport;
