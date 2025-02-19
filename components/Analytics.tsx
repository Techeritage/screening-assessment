import { AnalyticsStat } from "@/constants";
import React from "react";
import AnalyticsCard from "./Cards/AnalyticsCard";

const Analytics = () => {
  return (
    <section>
      <div className="myFlex gap-3">
        <h4>Analytics</h4>
        <div className="bg-myGray-100 h-[0.38px] w-full" />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-5">
        {AnalyticsStat.map((stat, i) => (
          <AnalyticsCard key={i} stat={stat} />
        ))}
      </div>
    </section>
  );
};

export default Analytics;
