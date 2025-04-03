import React, { useState } from 'react'; // Import useState
import Header from '../../components/header/Header';
import TaskCard from '../../components/taskCard/TaskCard';

const TaskList = () => {
  const [activeButton, setActiveButton] = useState('Planned Tasks'); // Initialize state

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center py-8 bg-gray-200 m-8 rounded-lg">
        {/* Button Group */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveButton('Raised by my team')}
            className={`px-2 text-sm border rounded-md ${
              activeButton === 'Raised by my team'
                ? 'text-white bg-[#30879f]'
                : 'text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]'
            }`}
            aria-label="Tasks Raised by My Team"
          >
            Raised by my team
          </button>
          <button
            onClick={() => setActiveButton('Assigned to my team')}
            className={`px-2 text-sm border rounded-md ${
              activeButton === 'Assigned to my team'
                ? 'text-white bg-[#30879f]'
                : 'text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]'
            }`}
            aria-label="Tasks Assigned to My Team"
          >
            Assigned to my team
          </button>
          <button
            onClick={() => setActiveButton('Planned Tasks')}
            className={`px-2 text-sm border rounded-md ${
              activeButton === 'Planned Tasks'
                ? 'text-white bg-[#30879f]'
                : 'text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]'
            }`}
            aria-label="Planned Tasks"
          >
            Planned Tasks
          </button>
        </div>

        {/* Input Fields */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Filter by location"
            className="px-4 py-1 w-48  font-semibold border rounded-md border-gray-300 focus:outline-none"
            aria-label="Filter by location"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Filter by token"
              className="px-4 w-48 py-1 font-semibold border rounded-md border-gray-300 focus:outline-none"
              aria-label="Filter by token"
            />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Clear token filter"
            >
              x
            </button>
          </div>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-end w-full pr-8">
          <button
            className=" pb-1 px-2 text-sm text-white bg-gray-500 rounded-md hover:bg-gray-600"
            aria-label="Refresh Tasks"
          >
            Refresh
          </button>
        </div>

        {/* No Tasks Message */}
        {activeButton==="Raised by my team"?  <TaskCard/>: <p className="text-red-500 text-sm font-bold mt-6">No tasks found</p> }
      
      
      </div>
    </div>
  );
};

export default TaskList;
