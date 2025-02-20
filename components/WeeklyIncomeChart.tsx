"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import type { EChartsType } from "echarts";

const WeeklyIncomeChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<EChartsType>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current, null, {
        renderer: "canvas",
        devicePixelRatio: window.devicePixelRatio || 2,
      });

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          max: 100,
          splitLine: {
            lineStyle: {
              color: "#eee",
            },
          },
        },
        series: [
          {
            data: [45, 40, 18, 38, 55, 38, 75],
            type: "line",
            smooth: true,
            symbol: "none",
            lineStyle: {
              color: "#2ECC71",
              width: 3,
              shadowBlur: 10,
              shadowColor: "rgba(46, 204, 113, 0.5)",
              shadowOffsetY: 5,
            },
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
    <div className="w-full bg-white rounded-[10px] border border-myGray-500">
      <h4 className="mb-6 p-3">This Week’s Income</h4>
      <div ref={chartRef} className="w-full h-[400px]" />;
    </div>
  );
};

export default WeeklyIncomeChart;
