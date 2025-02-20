import { Calendar } from "lucide-react";
import QuickAccess from "@/components/QuickAccess";
import Analytics from "@/components/Analytics";
import Analytics2 from "@/components/Analytics2";

const DashboardPage = () => {
  return (
    <main className="pageContainer !pb-20">
      <section className="flex justify-between">
        <div>
          <h4 className="text-myBlack">
            Hi Emmanuel, what would you like to do today?
          </h4>
          <p className="text-myBlack">
            <span className="font-satoMd">Last login:</span> 26/11/2024 14:39:58
          </p>
        </div>
        <div className="text-myBlack flex items-center justify-between h-fit w-fit gap-3 px-3 py-2 border border-myGray-100 rounded-[4px]">
          <div className="myFlex gap-1 font-satoMd">
            <Calendar size={19} strokeWidth={1.8} />
            <span>Today</span>
          </div>
          <div className="bg-myGray-100 h-[10px] w-[0.6px]" />
          <p>11 Nov 2024</p>
        </div>
      </section>
      <QuickAccess />
      <Analytics />
      <Analytics2 />
    </main>
  );
};

export default DashboardPage;
