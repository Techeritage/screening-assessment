"use client";

import { sideNavLinks } from "@/constants/SideNavLinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

const SideNav = () => {
  const pathName = usePathname();
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number | null>(null);

  const isActiveLink = (navUrl: string) => {
    if (navUrl === "/" && pathName === "/") {
      return true;
    }
    if (navUrl !== "/") {
      return pathName.startsWith(navUrl);
    }
    return false;
  };

  return (
    <aside className="fixed w-[70px] lg:w-[230px] h-full left-0 top-0 bg-primary border-r border-myGray flex flex-col">
      <div className="p-4 bg-primary border-b border-myGray/10">
        <Link href="/">
          <Image
            src="/logos/lapo-logo.svg"
            alt="Lapo Logo"
            width={120}
            height={40}
          />
        </Link>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="lg:px-3 grid lg:gap-6">
          {sideNavLinks.map((nav, i) => (
            <div key={i}>
              {nav.heading && (
                <p className="text-myGray-200 max-lg:text-[10px] max-lg:text-center whitespace-nowrap text-sm lg:pl-4 mb-2">
                  {nav.heading}
                </p>
              )}
              <ul className="grid gap-1 max-lg:place-items-center">
                {nav.links.map((link, index) => {
                  const iconColor =
                    hoveredLinkIndex === index || isActiveLink(link.navLink)
                      ? "#014DAF"
                      : "#D0D5DD";

                  return (
                    <li
                      key={index}
                      className={cn(
                        "p-3 max-lg:w-fit text-myGray-100 group rounded-lg transition-all duration-200 flex items-center gap-3 hover:bg-primary-100 hover:text-primary-200",
                        isActiveLink(link.navLink) &&
                          "bg-primary-100 text-primary-200 font-satoMd"
                      )}
                      onMouseEnter={() => setHoveredLinkIndex(index)}
                      onMouseLeave={() => setHoveredLinkIndex(null)}
                    >
                      <Link href={link.navLink} className="flex max-lg:items-center max-lg:justify-center gap-3 w-full">
                        {link.icon &&
                          React.cloneElement(link.icon, {
                            size: 20,
                            color: iconColor,
                            className: "transition-colors duration-200",
                          })}
                        <span className="max-lg:hidden">{link.navTitle}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>

      <Separator />

      <div className=" py-4 px-2 lg:p-4 bg-primary">
        <button className="w-full myFlex max-lg:justify-center lg:gap-3 text-white font-satoMd">
          <Image
            src="/icons/logout.svg"
            alt="logout icon"
            width={18}
            height={18}
          />
          <span className="max-lg:hidden">Logout</span>
        </button>
        <div className="mt-6">
          <p className="text-myGray-200 max-lg:text-[10px] text-sm mb-2">POWERED BY</p>
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
