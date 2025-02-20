import { btnColors } from "@/components/Cards/CardRequestDetails";

export interface StatProps {
  icon: string;
  text: string;
  statValue: string;
  statPercent?: string;
  status?: string;
}

export interface CardRequestsProps {
  id: number;
  branch: string;
  initiator?: string;
  cardType?: "Personalized" | "Instant";
  quantity: number;
  batch?: string;
  dataRequested?: string;
  status: "Pending" | "Ready" | "In Progress" | "Acknowledged";
  cardCharges?: string;
}

 export type ActionButton = {
  icon: string;
  text: keyof typeof btnColors;
  action: ActionStatusType;
  showModal?: boolean;
};

export type DisplayStatusType = "Pending" | "Ready" | "In Progress" | "Acknowledged";

export type ActionStatusType = DisplayStatusType | "DOWNLOADED" | "DISPATCHED";