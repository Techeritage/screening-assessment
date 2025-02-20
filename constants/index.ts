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
    statValue: "26,478",
    statPercent: "+9%",
  },
  {
    icon: "icons/card6.svg",
    text: "Total Personalized Cards",
    statValue: "15,703",
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

export const cardRequests = [
  {
    id: 1,
    branch: "Corporate",
    initiator: "RootUser",
    cardType: "Instant",
    quantity: 10,
    batch: "847264905",
    dataRequested: "11/14/2024  10:27:43",
    status: "Ready",
    cardCharges: "₦1,500",
  },
  {
    id: 2,
    branch: "Corporate",
    initiator: "RootUser",
    cardType: "Personalized",
    quantity: 10,
    batch: "847264905",
    dataRequested: "11/14/2024  10:27:43",
    status: "Ready",
    cardCharges: "₦1,500",
  },
  {
    id: 3,
    branch: "Corporate",
    initiator: "RootUser",
    cardType: "Personalized",
    quantity: 10,
    batch: "847264905",
    dataRequested: "11/14/2024  10:27:43",
    status: "In Progress",
    cardCharges: "₦1,500",
  },
  {
    id: 4,
    branch: "Corporate",
    initiator: "RootUser",
    cardType: "Instant",
    quantity: 10,
    batch: "847264905",
    dataRequested: "11/14/2024  10:27:43",
    status: "Acknowledged",
    cardCharges: "₦1,500",
  },
  {
    id: 5,
    branch: "Corporate",
    initiator: "RootUser",
    cardType: "Personalized",
    quantity: 10,
    batch: "847264905",
    dataRequested: "11/14/2024  10:27:43",
    status: "Pending",
    cardCharges: "₦1,500",
  },
];

export const statusColors = {
  Ready: "bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]",
  "In Progress": "bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]",
  Acknowledged: "bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]",
  Pending: "bg-[#F9FAFB] text-[#344054] border-[#EAECF0]",
} as const;

export const getStatusColor = (status: keyof typeof statusColors) =>
  statusColors[status];
