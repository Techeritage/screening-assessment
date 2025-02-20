import { QuickAccessLink } from "@/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const QuickAccess = () => {
  return (
    <section className="bg-white my-7 border border-myGray-500 px-5 pb-3 pt-5 rounded-[10px]">
      <p className="text-myBlack font-satoMd text-lg mb-3">Your Quick Access</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {QuickAccessLink.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            className="bg-primary-500 rounded-[4px] h-[45px] myFlex gap-3 px-3"
          >
            <div className="bg-primary-200 rounded-full w-[28px] h-[28px] myFlex justify-center">
              <Image src={link.icon} alt="icon" width={18} height={18} />
            </div>
            <span className="text-myBlack text-sm font-satoMd inline-flex items-center gap-1">
              {link.text} <ChevronRight color="#808080" size={18} strokeWidth={1.4} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickAccess;
