import { ActionStatusType, DisplayStatusType } from "@/types";

export const getInitialStep = (status: DisplayStatusType) => {
  switch (status) {
    case "Pending":
      return 0;
    case "Acknowledged":
      return 1;
    case "In Progress":
      return 2;
    case "Ready":
      return 3;
    default:
      return -1;
  }
};

export const getDisplayStatus = (status: ActionStatusType): DisplayStatusType => {
  if (status === "DOWNLOADED" || status === "DISPATCHED") {
    return "Ready";
  }
  return status as DisplayStatusType;
};