"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const MonthlyIssuanceChart = dynamic(() => import("./MonthlyIssuanceChart"), {
  ssr: false,
  loading: () => <ChartSkeleton />,
});

const WeeklyIncomeChart = dynamic(() => import("./WeeklyIncomeChart"), {
  ssr: false,
  loading: () => <ChartSkeleton />,
});

const CardStatusChart = dynamic(() => import("./CardStatusDistributionChart"), {
  ssr: false,
  loading: () => <ChartSkeleton />,
});

const CardRequestsTable = dynamic(() => import("./CardRequestTable"), {
  loading: () => <TableSkeleton />,
});

const ChartSkeleton = () => (
  <Card className="w-full bg-white p-3 space-y-4 rounded-[10px] border border-myGray-500">
    <Skeleton className="h-8 w-1/3 bg-gray-200" />
    <Skeleton className="h-[400px] w-full bg-gray-200" />
    <div className="flex justify-center gap-4 pt-4 border-t border-t-myGray-500">
      <Skeleton className="h-4 w-20 bg-gray-200" />
      <Skeleton className="h-4 w-20 bg-gray-200" />
    </div>
  </Card>
);

const TableSkeleton = () => (
  <Card className="w-full bg-white p-3 space-y-4 rounded-[10px] border border-myGray-500">
    <Skeleton className="h-8 w-1/3 bg-gray-200" />
    <div className="space-y-2">
      <Skeleton className="h-10 w-full bg-gray-200" />
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-12 w-full bg-gray-200" />
      ))}
    </div>
  </Card>
);

const Analytics2 = () => {
  return (
    <section className="flex flex-col lg:flex-row max-w-screen mt-2 gap-2">
      <div className="basis-full lg:basis-1/2 flex flex-col gap-2">
        <MonthlyIssuanceChart />
        <WeeklyIncomeChart />
      </div>
      <div className="basis-full lg:basis-1/2 flex flex-col gap-2">
        <CardRequestsTable />
        <CardStatusChart />
      </div>
    </section>
  );
};

export default Analytics2;
