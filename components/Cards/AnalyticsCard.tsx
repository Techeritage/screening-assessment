"use client";

import { StatProps } from "@/types";
import { CircleAlert, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const AnalyticsCard = ({ stat }: { stat: StatProps }) => {

  const isMillion = stat.statValue.includes("M");
  const numericValue = isMillion
    ? parseFloat(stat.statValue.replace(/[^0-9.]/g, "")) * 1_000_000
    : parseFloat(stat.statValue.replace(/[^0-9.]/g, ""));

  return (
    <div className="bg-white h-[140px] p-3 flex flex-col justify-between rounded-[10px] border border-myGray-500">
      <div>
        <Image
          src={stat.icon}
          alt="icon"
          width={stat.text === "Pending Requests" ? 12 : 20}
          height={20}
        />
        <p className="text-[#0000008F] font-satoMd mt-1">{stat.text}</p>
      </div>

      <div className="myFlex justify-between">
        <h2 className="text-myBlack max-mlg:text-2xl">
          {isNaN(numericValue) ? (
            stat.statValue
          ) : (
            <CountUp
              start={0}
              end={numericValue}
              duration={2}
              separator=","
              decimals={isMillion ? 1 : 0}
              formattingFn={(value) =>
                isMillion ? `₦${(value / 1_000_000).toFixed(1)}M` : `${value}`
              }
            />
          )}
        </h2>

        <div>
          {stat.statPercent && (
            <div className="myFlex gap-1">
              <div className="bg-[#EFFAF6] text-xs text-[#29A174] pl-1 pr-2 w-fit font-satoMd myFlex gap-1 rounded-[4px]">
                <MoveUpRight size={16} className="max-mlg:size-3" />
                {stat.statPercent}
              </div>
              <p className="text-[#0000008F] text-xs">this month</p>
            </div>
          )}
          {stat.status && (
            <div className="myFlex gap-2 text-[#E78020]">
              <CircleAlert size={16} />
              <p className="text-xs">{stat.status}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
