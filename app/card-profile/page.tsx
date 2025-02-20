import CardProfileTable from "@/components/CardProfileTable";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CardProfilePage = () => {
  return (
    <main className="pageContainer">
      <section className="pb-3">
        <h4 className="text-myBlack">Card Profile</h4>
        <p className="text-myBlack py-2">
          Create, view and edit card profiles here.
        </p>
        <div className="border-b border-t border-t-[#98A2B3] border-b-[#98A2B3] myFlex justify-between py-2">
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
          <Link href="/card-profile/create">
            <button className="btn">
              <Plus size={20} />
              Add Profile
            </button>
          </Link>
        </div>
      </section>
      <CardProfileTable />
    </main>
  );
};

export default CardProfilePage;
