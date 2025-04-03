import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";

const data = [
  { name: "Treatwell Ios App", requests: 130 },
  { name: "Nurse/Staff enter", requests: 4 },
 
];

const AdoptionbyInterface = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          barSize={60} // Adjusted bar thickness
          barCategoryGap={25} // Increased spacing between bars
        >
          <XAxis
            type="number"
            tick={{ fill: "gray" }}
            label={{
              value: "#Requests",
              position: "bottom",
              offset: 10,
              fill: "#30879f", // Fixed color syntax
            }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "gray", textAnchor: "end" }} // Align long text better
            width={250}
          />
          <Tooltip />
          <Legend iconType="circle" position="right" formatter={() => "No. of Requests"} />

          <Bar dataKey="requests" fill="#7cb5ec">
            <LabelList dataKey="requests" position="right" fill="#000" fontWeight="bold" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdoptionbyInterface;



