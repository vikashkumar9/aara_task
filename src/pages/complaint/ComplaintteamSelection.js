
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const nestedData = [
  {
    id: 1,
    name: "miracles healthcare",
    pending: 0,
    currentPanding: "Current pending",
    children: [
      {
        id: 2,
        name: "Unit Head",
        pending: 0,
        children: [
          {
            id: 3,
            name: "House Keeping",
            pending: 0,
            children: [
              {
                id: 4,
                name: "Level 4 - A1.1",
                pending: 0,
                children: [],
              },
              {
                id: 5,
                name: "Level 4 - A1.2",
                pending: 0,
                children: [],
              },
            ],
          },
          {
            id: 6,
            name: "Level 3 - A2",
            pending: 0,
            children: [],
          },
        ],
      },
      {
        id: 7,
        name: "Level 2 - B",
        pending: 0,
        children: [
          {
            id: 8,
            name: "Level 3 - B1",
            pending: 0,
            children: [],
          },
        ],
      },
    ],
  },
];

function Accordion({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pl-4 p-4 border-gray-200 border">
      <div className="flex items-center py-2 space-x-3">
        <div className="flex items-center space-x-3">
          {data.children.length > 0 && (
            <button
              className="w-6 h-6 flex items-center justify-center border rounded-full text-[#30879f] border-[#30879f] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <Minus size={12} /> : <Plus size={12} />}
            </button>
          )}
          <span className="font-medium bg-[#EFEFEF] pl-2 py-2 text-sm pr-6 text-[#30879f]">
            {data.name}
          </span>
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <div className="flex flex-col items-center">
            {data.currentPanding && (
              <span className="text-sm text-[#30879f] mb-1">{data.currentPanding}</span>
            )}
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#30879f] text-white">
              {data.pending}
            </span>
          </div>
          <Link to="taskList" className="px-3 py-1 border rounded-md text-[#30879f] border-[#30879f] hover:bg-[#f2f8f9]">
            Select
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="pl-8">
          {data.children.map((child) => (
            <Accordion key={child.id} data={child} />
          ))}
        </div>
      )}
    </div>
  );
}
export default function ComplaintteamSelection() {
  return (
    <>
      <div className="p-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-md p-4">
        {nestedData.map((item) => (
          <Accordion key={item.id} data={item} />
        ))}
      </div>
    </div>
    </>
   
  );
}
