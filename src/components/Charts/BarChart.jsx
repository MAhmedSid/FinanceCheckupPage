import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  LabelList,
  Label,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total Savings",
    uv: 50000,
  },
  {
    name: "Investments",
    uv: 55000,
  },
  {
    name: "Total Debt (except mortgage)",
    uv: -20000,
  },
  {
    name: "Mortgage Balance",
    uv: -200000,
  },
];
const Chart = () => {
  const newWorth = "150000";
  const yAxisTicks = [
    -250000, -200000, -150000, -100000, -50000, 0, 50000, 100000, 150000,
    200000, 250000,
  ];

  const formatYAxisTick = (tickValue) => {
    let sign = tickValue < 0 ? "-" : "";
    let value = Math.abs(tickValue).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return `${sign}$${value}`;
  };

  const PurpleTick = (props) => {
    const { x, y, payload } = props;
    const isZeroTick = payload.value === 0;
    const textAnchor = isZeroTick ? "end" : "end";
    const yOffset = isZeroTick ? 8 : 10 - payload.value / 20000;

    return (
      <text
        x={x}
        y={y}
        dy={yOffset}
        dx={0}
        textAnchor={textAnchor}
        fill={isZeroTick ? "#404EED" : "black"}
      >
        {isZeroTick
          ? "$0"
          : payload.value.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 40,
          bottom: 5,
        }}
      >
        <XAxis
          tick={{ fill: "black" }}
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tickMargin={5}
          axisLine={{ stroke: "black" }}
          ticks={yAxisTicks}
          tickFormatter={formatYAxisTick}
          tick={<PurpleTick />}
          tickLine={false}
        />
        <ReferenceLine y={newWorth} stroke="#219F94" strokeOpacity={1}>
          <Label
            value={`Net Worth `}
            dx={680}
            position="top"
            fill="#219F94"
            offset={30}
            style={{ fontSize: "14px", fontWeight: "700", textAnchor: "end" }}
          />
        </ReferenceLine>
        <ReferenceLine y={newWorth} stroke="#219F94" strokeOpacity={1}>
          <Label
            value={`$${newWorth.toLocaleString()}`}
            dx={670}
            position="top"
            fill="#219F94"
            offset={10}
            style={{ fontSize: "14px", fontWeight: "700", textAnchor: "end" }}
          />
        </ReferenceLine>
        <ReferenceLine y={0} stroke="#121212" strokeOpacity={1} />
        <Bar dataKey="uv" barSize={84}>
          <LabelList
            fill="black"
            dataKey="uv"
            position={`${data < 0 ? "bottom" : "top"}`}
            formatter={(value) =>
              value < 0 ? `-$${Math.abs(value)}` : `$${value}`
            }
          />
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.uv > 0
                  ? "#219F94"
                  : entry.uv < -50000
                  ? "#890F0D"
                  : "#FF0F00"
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
