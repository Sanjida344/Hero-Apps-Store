import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const RatingChart = ({ ratings }) => {
  if (!Array.isArray(ratings)) {
    return (
      <p className="text-gray-500 text-center">No ratings data available.</p>
    );
  }

  // Highest star first
  const sortedRatings = [...ratings].sort((a, b) => b.name[0] - a.name[0]);

  return (
    <div className="py-6 border-b">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Ratings</h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedRatings}
            layout="vertical"
            margin={{ top: 5, right: 40, left: 40, bottom: 0 }}
          >
            {/* X Axis (count numbers below) */}
            <XAxis
              type="number"
              domain={[0, 12000]}
              tick={{ fill: "#6b7280", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
            {/* Y Axis (star labels) */}
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#1f2937", fontSize: 14, fontWeight: 500 }}
              width={60}
              axisLine={false}
              tickLine={false}
            />
            {/* Tooltip on hover */}
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              formatter={(value) => [`${value} users`, "Ratings"]}
            />
            {/* Bars */}
            <Bar
              dataKey="count"
              barSize={20}
              radius={[0, 4, 4, 0]}
              fill="#FF8C00"
            >
              <LabelList
                dataKey="count"
                position="right"
                style={{
                  fill: "#374151",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingChart;