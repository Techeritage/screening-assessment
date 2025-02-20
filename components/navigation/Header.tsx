"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { sideNavLinks } from "@/constants/SideNavLinks";
import { ChevronRight, ChevronLeft, Bell, User } from "lucide-react";
import React from "react";
import { Home2, SearchNormal1 } from "iconsax-react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const pathSegments = pathname.split("/").filter(Boolean);

  const baseRoute:
    | {
        navTitle: string;
        navLink: string;
        icon: React.JSX.Element;
      }
    | undefined =
    pathname === "/"
      ? { navTitle: "Dashboard", navLink: "/", icon: <Home2 /> }
      : sideNavLinks
          .flatMap((group) => group.links)
          .find((link) => {
            const linkPath = link.navLink.split("/")[1];
            return linkPath === pathSegments[0];
          });

  const isDynamicRoute = pathSegments.length > 1 && pathname !== "/";

  let dynamicNavTitle = "";
  if (pathname.startsWith("/card-request/")) {
    dynamicNavTitle = "Request Details";
  } else if (pathname.startsWith("/card-profile/")) {
    const action = pathSegments[1];
    dynamicNavTitle = action.startsWith("edit")
      ? "Edit Profile"
      : "Create Profile";
  }

  return (
    <div className="fixed top-0 right-0 h-[48px] z-50 left-[230px] flex items-center px-5 bg-white justify-between border-b border-myGray">
      <div className="flex items-center gap-3">
        {isDynamicRoute && (
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-[#475467] font-satoMd hover:text-gray-800"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        )}
        {baseRoute && (
          <div className="flex items-center gap-3">
            {React.cloneElement(baseRoute.icon, {
              size: 20,
              color: "#001735",
              className: "transition-colors duration-200",
            })}

            {isDynamicRoute && (
              <ChevronRight className="w-5 h-5 text-myGray-300" />
            )}
            <div className="flex items-center gap-3">
              <Link
                href={baseRoute.navLink}
                className="text-[#001735] font-satoMd hover:text-gray-800"
              >
                {baseRoute.navTitle}
              </Link>

              {isDynamicRoute && dynamicNavTitle && (
                <>
                  <ChevronRight className="w-5 h-5 text-myGray-300" />
                  <span className="font-satoBold text-[#475467]">
                    {dynamicNavTitle}
                  </span>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="myFlex gap-4">
        {!isDynamicRoute && (
          <div className="border border-myGray-100 rounded-full h-[32px] px-3 w-[214px] myFlex gap-3">
            <SearchNormal1 size="16" color="#344054" />
            <input
              type="text"
              className="focus:outline-none w-full placeholder:text-sm placeholder:text-myGray-400"
              placeholder="Search"
            />
          </div>
        )}

        <div className="p-3 rounded-full">
          <Bell size="20" color="#475467" />
        </div>
        <div className="p-2 rounded-full bg-myGray-50 border border-myGray">
          <User size="16" color="#475467" />
        </div>
      </div>
    </div>
  );
};

export default Header;
