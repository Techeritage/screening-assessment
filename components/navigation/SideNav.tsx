"use client";

import { sideNavLinks } from "@/constants/SideNavLinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathName = usePathname();
  return (
    <aside className="fixed w-[230px] px-3 py-7 h-dvh left-0 top-0 bottom-0 bg-primary border-r border-myGray">
      <Link href="/">
        <img src="/logos/lapo-logo.svg" alt="Lapo Logo" />
      </Link>
      <nav className="h-dvh overflow-y-scroll no-scrollbar grid gap-6 mt-7">
        {sideNavLinks.map((nav, i) => (
          <div key={i}>
            <div>
              {nav.heading && (
                <p className="text-myGray-200 text-sm pl-7 mb-4">
                  {nav.heading}
                </p>
              )}
            </div>
            <ul className="grid gap-1">
              {nav.links.map((link, i) => (
                <li
                  key={i}
                  className={cn(
                    "p-3 text-myGray-100 rounded-lg transition-all duration-200 hover:bg-primary-100 hover:text-primary-200",
                    pathName === link.navLink &&
                      "bg-primary-100 text-primary-200 font-satoMd"
                  )}
                >
                  <Link href={link.navLink} className="flex gap-3">
                    <Image src={link.icon} width={18} height={18} alt="icon" />
                    <span>{link.navTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 border-t border-t-myGray-200 bg-primary py-4">
        <button className="px-5 myFlex gap-3 text-white font-satoMd">
          <Image
            src="/icons/logout.svg"
            alt="logout icon"
            width={18}
            height={18}
          />
          <span>Logout</span>
        </button>
        <div className="pl-5 mt-9">
          <p className="text-myGray-200 text-sm mb-2">POWERED BY</p>
          <Image
            src="/logos/cardInfra-logo.svg"
            alt="cardInfra Logo"
            width={100}
            height={42}
          />
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
