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
  { name: 'B & I', Esc1: 0, Esc2: 100, Esc3: 0, Esc4: 0, NotEscalated: 0 },
  { name: 'Eng', Esc1: 6, Esc2: 0, Esc3: 13, Esc4: 0, NotEscalated: 81 },
  { name: 'FnB', Esc1: 3, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 95 },
  { name: 'HK', Esc1: 4, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 95 },
];

const ServiceLevelGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical" 
        data={data}
        margin={{ top: 20, right: 30, left: 80, bottom: 20 }} 
        barSize={40}
      >
        <CartesianGrid strokeDasharray="0" horizontal={false} /> 
        <XAxis type="number" tick={{ fill: '#0000FF' }} > <Label
            value="Departments"
             offset={-3}
                      position="insideBottom"
            style={{ fill: '#30879f', fontSize: '14px' }}
          /></XAxis> 

           
        <YAxis dataKey="name" type="category"  tickMargin={20}  style={{ textAnchor: 'middle', fill: 'blue'}}>
         
        </YAxis>
        <Tooltip />
        <Legend iconType="circle" />

        <Bar dataKey="NotEscalated" stackId="a" fill="#64C195">
          <LabelList dataKey="NotEscalated" position="inside" />
        </Bar>
        <Bar dataKey="Esc1" stackId="a" fill="#FFEB3B">
          <LabelList dataKey="Esc1" position="inside" />
        </Bar>
        <Bar dataKey="Esc2" stackId="a" fill="#FF9800">
          <LabelList dataKey="Esc2" position="inside" />
        </Bar>
        <Bar dataKey="Esc3" stackId="a" fill="#F44336">
          <LabelList dataKey="Esc3" position="inside" />
        </Bar>
        <Bar dataKey="Esc4" stackId="a" fill="#D32F2F">
          <LabelList dataKey="Esc4" position="inside" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ServiceLevelGraph;
