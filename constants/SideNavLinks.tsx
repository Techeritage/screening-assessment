import {
  Home2,
  SecurityUser,
  Profile2User,
  Setting3,
  CardPos,
  CardTick1,
  Card,
  CardSlash,
  Map1,
  Layer,
  Profile,
  ArchiveBook,
  DocumentText1,
} from "iconsax-react";

export const sideNavLinks = [
  {
    links: [{ navTitle: "Dashboard", navLink: "/", icon: <Home2 /> }],
  },
  {
    heading: "MAIN MENU",
    links: [
      {
        navTitle: "Branches",
        navLink: "/branches",
        icon: <Map1 />,
      },
      {
        navTitle: "Roles",
        navLink: "/roles",
        icon: <SecurityUser />,
      },
      {
        navTitle: "Users",
        navLink: "/users",
        icon: <Profile2User />,
      },
      {
        navTitle: "Card Schema",
        navLink: "/card-schema",
        icon: <Setting3 />,
      },
      {
        navTitle: "Card Profile",
        navLink: "/card-profile",
        icon: <CardPos />,
      },
      {
        navTitle: "Card Request",
        navLink: "/card-request",
        icon: <CardTick1 />,
      },
      {
        navTitle: "Stock",
        navLink: "/stock",
        icon: <ArchiveBook />,
      },
      {
        navTitle: "Cards",
        navLink: "/cards",
        icon: <Card />,
      },
      {
        navTitle: "Block/Unblock Card",
        navLink: "/block-card",
        icon: <CardSlash />,
      },
      {
        navTitle: "Authorization List",
        navLink: "/authorization-list",
        icon: <DocumentText1 />,
      },
      {
        navTitle: "Authorization Queue",
        navLink: "/authorization-queue",
        icon: <Map1 />,
      },
      {
        navTitle: "Trial",
        navLink: "/trial",
        icon: <Layer />,
      },
      {
        navTitle: "Account",
        navLink: "/account",
        icon: <Profile />,
      },
    ],
  },
];
