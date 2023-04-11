import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, LabelList } from "recharts";

const data = [
  { name: "Monthly Debt pmt (credit card, car etc),$1000", value: 10 },
  { name: "Monthly Expenses,$3000", value: 30 },
  { name: "Monthly Slack,$4000", value: 20 },
  { name: "Housing or Rent,Tax, Insurance,$2000", value: 40 },
];

const renderInsideLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize="26px"
      fontWeight="700"
      textAnchor={x > cx ? "start" : "middle"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ["#219F94", "#404EED", "#a3aaf6", "#c2c7f9"];

const dataPieChart = () => {
  return (
    <ResponsiveContainer width="99%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          fill="#8884d8"
          label={renderInsideLabel}
          paddingAngle={0}
          stroke="none"
          labelLine={false}
          fontSize="14px"
          fontWeight="600"
          outerRadius={160}
          style={{ lineHeight: "21px" }}
          color="#121212"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
              style={{ outline: "none" }}
            />
          ))}

          <LabelList
          
            className="label-list"
            offset={50}
            dataKey="name"
            position="outside"
            tickLine={false}
            fill="#232323" 
              
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default React.memo(dataPieChart);
