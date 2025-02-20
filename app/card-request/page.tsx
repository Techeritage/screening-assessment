import RequestTable from "@/components/RequestTable";
import Image from "next/image";

const CardRequestPage = () => {
  return (
    <main className="pageContainer">
      <section className="pb-3">
        <h4 className="text-myBlack">Card Request</h4>
        <p className="text-myBlack py-2">
          View and attend to card requests here.
        </p>
        <div className="border-b border-t border-t-[#98A2B3] border-b-[#98A2B3] py-2">
          <div className="border bg-white border-myGray-100 rounded-lg h-[40px] px-3 w-[320px] myFlex gap-3">
            <Image
              src="/icons/search.svg"
              alt="search icon"
              width={16}
              height={16}
            />
            <input
              type="text"
              className="focus:outline-none w-full placeholder:text-sm placeholder:text-myGray-400"
              placeholder="Search by branch"
            />
          </div>
        </div>
      </section>
      <section>
        <RequestTable />
      </section>
    </main>
  );
};

export default CardRequestPage;
