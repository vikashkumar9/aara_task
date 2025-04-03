import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  Label,
} from 'recharts';

const data = [
  { name: '03 Mar', NotEscalated: 85, Esc1: 11, Esc2: 2, Esc3: 1, Esc4: 1 },
  { name: '10 Mar', NotEscalated: 87, Esc1: 8, Esc2: 5, Esc3: 0, Esc4: 0 },
  { name: '17 Mar', NotEscalated: 91, Esc1: 6, Esc2: 3, Esc3: 0, Esc4: 0 },
  { name: '24 Mar', NotEscalated: 93, Esc1: 4, Esc2: 2, Esc3: 1, Esc4: 0 },
];

const WeeklyTrendGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        barSize={40} // Adjusted bar size for better label visibility
      >
        <CartesianGrid strokeDasharray="0" vertical={false} />
        
        <XAxis dataKey="name">
          <Label value="Week Starting" offset={-3} position="insideBottom" style={{ fill: '#30879f', fontSize: '14px' }} />
        </XAxis>
        
        <YAxis allowDecimals={false}> 
          <Label value="Percentage Escalated" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fill: '#30879f', fontSize: '14px' }} />
        </YAxis>
        
        <Tooltip />
        <Legend iconType="circle" />

        {/* Bars with LabelList positioned inside to make values visible */}
        <Bar dataKey="NotEscalated" stackId="a" fill="#64C195">
          <LabelList dataKey="NotEscalated" position="inside"  />
        </Bar>
        <Bar dataKey="Esc1" stackId="a" fill="#FFEB3B">
          <LabelList dataKey="Esc1" position="inside" />
        </Bar>
        <Bar dataKey="Esc2" stackId="a" fill="#FF9800">
          <LabelList dataKey="Esc2" position="inside"  />
        </Bar>
        <Bar dataKey="Esc3" stackId="a" fill="#F44336">
          <LabelList dataKey="Esc3" position="inside"  />
        </Bar>
        <Bar dataKey="Esc4" stackId="a" fill="#D32F2F">
          <LabelList dataKey="Esc4" position="inside" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeeklyTrendGraph;
