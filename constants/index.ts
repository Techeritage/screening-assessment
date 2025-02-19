import { StatProps } from "@/types";

export const QuickAccessLink = [
  {
    icon: "icons/card1.svg",
    text: "Manage a Card",
    link: "/card",
  },
  {
    icon: "icons/card2.svg",
    text: "Issue Instant Card",
    link: "/card",
  },
  {
    icon: "icons/card3.svg",
    text: "Issue Personalized Card",
    link: "/card",
  },
  {
    icon: "icons/card4.svg",
    text: "Review Card Requests",
    link: "/card-request",
  },
];

export const AnalyticsStat: StatProps[] = [
  {
    icon: "icons/card5.svg",
    text: "Total Active Cards",
    statValue: "26478",
    statPercent: "+9%",
  },
  {
    icon: "icons/card6.svg",
    text: "Total Personalized Cards",
    statValue: "15703",
    statPercent: "8.5%",
  },
  {
    icon: "icons/card7.svg",
    text: "Today’s Revenue",
    statValue: "₦9.3M",
    statPercent: "+6%",
  },
  {
    icon: "icons/card8.svg",
    text: "Pending Requests",
    statValue: "38",
    status: "Requires attention",
  },
];
