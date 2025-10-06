import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PageChart = ({ books }) => {
  // prepare data for chart
  const data = books.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  // Custom triangle shape for each bar
  const TriangleBar = ({ fill, x, y, width, height }) => {
    return (
      <path
        d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${
          y + height
        } Z`}
        stroke="none"
        fill={fill}
      />
    );
  };

  return (
    <div className="mb-10" style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageChart;
