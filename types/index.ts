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
