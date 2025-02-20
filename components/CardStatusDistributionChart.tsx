"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import type { EChartsType } from "echarts";

const CardStatusChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<EChartsType>(null);

  const legendData = [
    { name: "Active", color: "#00B5AD" },
    { name: "Expired", color: "#FBBD08" },
    { name: "Inactive", color: "#2185D0" },
    { name: "Blocked", color: "#6435C9" },
    { name: "Lost", color: "#DB2828" },
  ];

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current, null, {
        renderer: "canvas",
        devicePixelRatio: window.devicePixelRatio || 2,
      });

      const option = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            type: "pie",
            radius: ["70%", "85%"],
            startAngle: 270,
            avoidLabelOverlap: false,
            padAngle: 2,
            itemStyle: {
              borderRadius: 10,
            },
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1500, name: "Active", itemStyle: { color: "#00B5AD" } },
              { value: 450, name: "Expired", itemStyle: { color: "#FBBD08" } },
              { value: 250, name: "Inactive", itemStyle: { color: "#2185D0" } },
              { value: 150, name: "Blocked", itemStyle: { color: "#6435C9" } },
              { value: 100, name: "Lost", itemStyle: { color: "#DB2828" } },
            ],
          },
        ],
      };

      chartInstance.current.setOption(option);

      const handleResize = () => {
        chartInstance.current?.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chartInstance.current?.dispose();
      };
    }
  }, []);

  return (
    <div className="relative w-full bg-white flex p-3 flex-col justify-between rounded-[10px] border border-myGray-500">
      <h4 className="mb-6">Card Status Distribution</h4>
      <div className="relative">
        <div ref={chartRef} className="w-full h-[400px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-base text-gray-500">Total Cards</span>
          <span className="text-5xl font-semibold mt-1">2,450</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-4 pb-4">
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

export default CardStatusChart;
