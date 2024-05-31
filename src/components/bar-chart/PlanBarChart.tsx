import React from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 100,
  },
  {
    name: 'Page 5',
    uv: 93,
  },
  {
    name: 'Page 4',
    uv: 93,
  },
  {
    name: 'Page 3',
    uv: 90,
  },
  {
    name: 'Page 2',
    uv: 90,
  },
  {
    name: 'Page 1',
    uv: 80,
  },
  {
    name: 'Page B',
    uv: 80,
  },
  {
    name: 'Page C',
    uv: 80,
  },
  {
    name: 'Page D',
    uv: 80,
  },
  {
    name: 'Page E',
    uv: 75,
  },
  {
    name: 'Page F',
    uv: 70,
  },
  {
    name: 'Page G',
    uv: 65,
  },
  {
    name: 'Page y',
    uv: 60,
  },
  {
    name: 'Page o',
    uv: 62,
  },
  {
    name: 'Page u',
    uv: 58,
  },
  {
    name: 'Page t',
    uv: 59,
  },
  {
    name: 'Page t',
    uv: 55,
  },
  {
    name: 'Page t',
    uv: 50,
  },
  {
    name: 'Page t',
    uv: 50,
  },
  {
    name: 'Page t',
    uv: 48,
  },
  {
    name: 'Page A',
    uv: 44,
  },
  {
    name: 'Page 5',
    uv: 41,
  },
  {
    name: 'Page 4',
    uv: 38,
  },
  {
    name: 'Page 3',
    uv: 34,
  },
  {
    name: 'Page 2',
    uv: 30,
  },
  {
    name: 'Page 1',
    uv: 25,
  },
  {
    name: 'Page B',
    uv: 25,
  },
  {
    name: 'Page C',
    uv: 25,
  },
  {
    name: 'Page D',
    uv: 20,
  },
  {
    name: 'Page E',
    uv: 20,
  },
  {
    name: 'Page F',
    uv: 18,
  },
  {
    name: 'Page G',
    uv: 14,
  },
  {
    name: 'Page y',
    uv: 12,
  },
  {
    name: 'Page o',
    uv: 12,
  },
  {
    name: 'Page u',
    uv: 11,
  },
  {
    name: 'Page t',
    uv: 10,
  },
];

function PlanBarChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart width={900} height={240} data={data}>
        <Bar dataKey="uv" fill="#87C210" barSize={12} radius={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default PlanBarChart;
