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
  { name: 'Hot Drinking Water - FnB', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'FnB Request', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Drinking Water - FnB Dept', Esc1: 0, Esc2: 13, Esc3: 0, Esc4: 13, NotEscalated: 75 },
  { name: 'Patient Food Request', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Blanket', Esc1: 0, Esc2: 14, Esc3: 0, Esc4: 14, NotEscalated: 71 },
  { name: 'TV Technician Assistance', Esc1: 0, Esc2: 0, Esc3: 20, Esc4: 0, NotEscalated: 80 },
  { name: 'Bed Linen To Be Replaced', Esc1: 0, Esc2: 40, Esc3: 0, Esc4: 0, NotEscalated: 60 },
  { name: 'Ward Girl Required', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'AC Working', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Housekeeping / HK Request', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Ward Boy Required', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Clear Tray', Esc1: 0, Esc2: 33, Esc3: 0, Esc4: 0, NotEscalated: 67 },
  { name: 'Room To Clean (RTC)', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Bed (Making)', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Engg Request Broken Bed', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Housekeeping Request for Attendant', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Ward Boy Required Tissue Box', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Bed Linen To Be Replaced Clean The Bed', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Ward Boy Required Need To Change Diaper', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Room To Clean (RTC) Room Clean', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'TV Remote Control Not In Room', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Ward Boy Required Please Clean Bowl', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Engg Request Phone Not Working', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
  { name: 'Clear Tray Multiple Reminders Given', Esc1: 0, Esc2: 0, Esc3: 0, Esc4: 0, NotEscalated: 100 },
];

const ServiceLevelTopTwnFive = () => {
  return (
    <ResponsiveContainer width="100%" height={900}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 30, left: 250, bottom: 20 }}
        barSize={20}
      >
        <CartesianGrid strokeDasharray="0" horizontal={false} />
        <XAxis type="number">
          <Label
            value="Percentage Escalated"
            position="insideBottom"
            offset={-3}
          
            style={{ textAnchor: 'middle', fill: '#30879f', fontSize: '14px' }}
          />
        </XAxis >
        <YAxis dataKey="name" type="category" tick={{ fill: '#0000FF' }} tickMargin={40}   style={{ textAnchor: 'middle', fill: '#30879f', fontSize: '10px' }}/>
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

export default ServiceLevelTopTwnFive;