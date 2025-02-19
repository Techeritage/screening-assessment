"use client";

import ReactECharts from "echarts-for-react";

const MonthlyIssuanceChart = () => {
  const legendData = [
    { name: "Personalized", color: "#014DAF" },
    { name: "Instant", color: "#CCE2FF" },
  ];

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      top: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    },
    yAxis: {
      type: "value",
      max: 100,
      interval: 20,
    },
    series: [
      {
        name: "Personalized",
        type: "bar",
        stack: "total",
        data: [10, 20, 8, 7, 12, 18, 8],
        color: "#014DAF",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
      },
      {
        name: "Instant",
        type: "bar",
        stack: "total",
        data: [40, 50, 22, 50, 35, 60, 65],
        color: "#CCE2FF",
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white flex pt-3 flex-col justify-between rounded-[10px] border border-myGray-500">
      <div>
        <h4 className="px-3">Monthly Issuance</h4>
        <ReactECharts
          option={option}
          style={{ height: "400px", width: "100%" }}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-6 py-4 border-t border-t-myGray-500">
        {legendData.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyIssuanceChart;
