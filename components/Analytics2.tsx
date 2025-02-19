import MonthlyIssuanceChart from "./MonthlyIssuanceChart";
import CardStatusChart from "./CardStatusDistributionChart";
import WeeklyIncomeChart from "./WeeklyIncomeChart";
import CardRequestsTable from "./CardRequestTable";

const Analytics2 = () => {
  return (
    <section className="flex max-w-screen mt-2 gap-2">
      <div className="basis-1/2 flex flex-col gap-2">
        <MonthlyIssuanceChart />
        <WeeklyIncomeChart />
      </div>
      <div className="basis-1/2 flex flex-col justify-between gap-2">
        <CardRequestsTable />
        <CardStatusChart />
      </div>
    </section>
  );
};

export default Analytics2;
