import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";

const data = [
  { week: "24 Mar", B_I: 8, Eng: 71, FnB: 43, HK: 2, total: 124 },
  { week: "25 Mar", B_I: 6, Eng: 42, FnB: 9, HK: 3, total: 60 },
  { week: "26 Mar", B_I: 4, Eng: 45, FnB: 52, HK: 7, total: 108 },
  { week: "27 Mar", B_I: 17, Eng: 62, FnB: 55, HK: 1, total: 135 },

  { week: "28 Mar", B_I: 18, Eng: 71, FnB: 43, HK: 2, total: 126 },
  { week: "29 Mar", B_I: 6, Eng: 42, FnB: 9, HK: 3, total: 60 },
  { week: "30 Mar", B_I: 4, Eng: 45, FnB: 52, HK: 7, total: 108 },
];

const AdoptionByDays = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }} barSize={40}>
        <CartesianGrid strokeDasharray="0" />
        <XAxis 
          dataKey="week" 
          label={{ value: "Date", position: "insideBottom", offset: -5, fill: "#30879f", fontSize: "14px" }} 
        />
        <YAxis 
          label={{ value: "# Requests", angle: -90, position: "insideLeft", fill: "#30879f", fontSize: "14px" }} 
        />
        <Tooltip />
        <Legend iconType="circle" />

        <Bar dataKey="B & I" stackId="a" fill="#525df4">
          <LabelList dataKey="B_I" position="inside" />
        </Bar>
        <Bar dataKey="Eng" stackId="a" fill="#BF399E">
          <LabelList dataKey="Eng" position="inside" />
        </Bar>
        <Bar dataKey="FnB" stackId="a" fill="#2F6497">
          <LabelList dataKey="FnB" position="inside" />
        </Bar>
        <Bar dataKey="HK" stackId="a" fill="#EE6868">
          <LabelList dataKey="HK" position="inside" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AdoptionByDays;
