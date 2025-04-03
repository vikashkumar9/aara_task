import React from 'react';

const TaskCard = () => {
  return (
    <div className=" mt-4 flex items-center w-full border-l-4 border-green-500 mx-4 justify-between p-4 border rounded-md shadow-sm bg-white hover:shadow-md">
      {/* Left Section */}
      <div className="flex items-center">
        <div className="w-1 h-full bg-green-500 rounded-l-md"></div>
        <div className="pl-4">
          <p className="text-sm text-gray-800 ">
            <span className="">@ 1f82em / ipd 104 ID 311</span ><span className='ml-8'> fnb request Nibu pani</span>
          </p>
          <div className='flex'>
          <p className="text-sm text-gray-800">pro helpline <span className='text-gray-400'> to close</span> 4 hrs 1 mins ago</p>
          <img
    src="https://request.treatwellapp.com/img/sms.png"
    alt="SMS Icon"
    className="h-6 w-6"
  />  <img
  src="https://request.treatwellapp.com/img/singleTick.png"
  alt="SMS Icon"
  className="h-6 w-6"
/></div>
        </div>
      </div>
<div>
    <button className='text-sm text-[#30879f]  border-[#30879f] rounded border px-1'>Ack</button></div>
      <div className="flex-col items-center space-x-2">
       <p>
       <span className='text-gray-400'>  For </span> ( Patient's relative )</p>
       <img
  src="https://request.treatwellapp.com/img/downArrow.png"
  alt="SMS Icon"
  className="h-5 w-5"
/>
      </div>
    </div>
  );
};

export default TaskCard;
