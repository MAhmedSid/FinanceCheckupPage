import React,{useRef,useState,useEffect} from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, LabelList } from "recharts";

const data = [
  { name: "Monthly Debt pmt (credit card, car etc),$1000", value: 10 },
  { name: "Monthly Expenses,$3000", value: 30 },
  { name: "Monthly Slack,$4000", value: 40 },
  { name: "Housing or Rent,Tax, Insurance,$2000", value: 20 },
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

const COLORS = ["#219F94", "#6772f1", "#a3aaf6", "#c2c7f9"];

const dataPieChart = () => {

  return (
    <>
      
      <div  style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
          minHeight={0}
          aspect={16 / 9}
        >
          <PieChart>
            <Pie
              style={{ outline: "100px solid #121212" }}
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
              color="#121212"
            >
              {data.map((entry, index) => (
                <>
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={COLORS[index % COLORS.length]}
                    style={{ outline: "none" }}
                  />
                </>
              ))}
              <LabelList
                offset={50}
                dataKey="name"
                position="outside"
                tickLine={false}
                fill="#121212"
                width={200}
                style={{ lineHeight: "40px" }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default React.memo(dataPieChart);
