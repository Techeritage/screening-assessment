"use client";

import { sideNavLinks } from "@/constants/SideNavLinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const SideNav = () => {
  const pathName = usePathname();

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
    <aside className="fixed w-[230px] h-full left-0 top-0 bg-primary border-r border-myGray flex flex-col">
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
        <nav className="px-3 grid gap-6">
          {sideNavLinks.map((nav, i) => (
            <div key={i}>
              {nav.heading && (
                <p className="text-myGray-200 text-sm pl-4 mb-2">
                  {nav.heading}
                </p>
              )}
              <ul className="grid gap-1">
                {nav.links.map((link, i) => (
                  <li
                    key={i}
                    className={cn(
                      "p-3 text-myGray-100 rounded-lg transition-all duration-200 flex items-center gap-3 hover:bg-primary-100 hover:text-primary-200",
                      isActiveLink(link.navLink) &&
                        "bg-primary-100 text-primary-200 font-satoMd"
                    )}
                  >
                    <Link href={link.navLink} className="flex gap-3 w-full">
                      <Image
                        src={link.icon}
                        width={18}
                        height={18}
                        alt="icon"
                      />
                      <span>{link.navTitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>

      <Separator />

      <div className="p-4 bg-primary">
        <button className="w-full myFlex gap-3 text-white font-satoMd">
          <Image
            src="/icons/logout.svg"
            alt="logout icon"
            width={18}
            height={18}
          />
          <span>Logout</span>
        </button>
        <div className="mt-6">
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
