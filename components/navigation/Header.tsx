"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { sideNavLinks } from "@/constants/SideNavLinks";

const Header = () => {
  const pathname = usePathname();

  const activeLink = sideNavLinks
    .flatMap((group) => group.links)
    .find((link) => link.navLink === pathname);

  return (
    <div className="fixed top-0 right-0 h-[48px] left-[230px] flex items-center px-5 bg-white justify-between border-b border-myGray">
      <div className="flex gap-3 w-fit">
        {activeLink ? (
          <>
            <Image
              src={activeLink.icon}
              alt={activeLink.navTitle}
              width={20}
              height={20}
            />
            <span className="text-lg font-satoMd text-primary-300">
              {activeLink.navTitle}
            </span>
          </>
        ) : (
          <span className="text-lg font-medium text-myGray-500">
            Page Not Found
          </span>
        )}
      </div>

      <div className="myFlex gap-4">
        <div className="border border-myGray-100 rounded-full h-[32px] px-3 w-[214px] myFlex gap-3">
          <Image
            src="/icons/search.svg"
            alt="search icon"
            width={16}
            height={16}
          />
          <input
            type="text"
            className="focus:outline-none w-full placeholder:text-sm placeholder:text-myGray-400"
            placeholder="Search"
          />
        </div>
        <div className="p-3 rounded-full">
          <Image src="/icons/bell.svg" alt="bell icon" width={20} height={20} />
        </div>
        <div className="p-2 rounded-full bg-myGray-50 border border-myGray">
          <Image
            src="/icons/user2.svg"
            alt="user icon"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
