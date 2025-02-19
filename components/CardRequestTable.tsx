"use client";

import { Badge } from "@/components/ui/badge";

const cardRequests = [
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "Ready",
  },
  {
    branch: "Corporate",
    cardType: "Personalized",
    quantity: 10,
    status: "In Progress",
  },
  {
    branch: "Corporate",
    cardType: "Personalized",
    quantity: 10,
    status: "Acknowledged",
  },
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "Pending",
  },
];

const statusColors = {
  Ready: "bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]",
  "In Progress": "bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]",
  Acknowledged: "bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]",
  Pending: "bg-[#F9FAFB] text-[#344054] border-[#EAECF0]",
} as const;

const getStatusColor = (status: keyof typeof statusColors) =>
  statusColors[status];

const CardRequestsTable = () => {
  return (
    <div className="w-full bg-white p-3 flex-grow rounded-[10px] border border-myGray-500">
      <h4 className="mb-6">Recent Card Requests</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary-500 border border-myGray-500 text-center font-normal font-satoMd text-[#0000008F]">
              <th className="px-4 py-3">Branch</th>
              <th className="px-4 py-3">Card Type</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {cardRequests.map((request, index) => (
              <tr
                key={index}
                className="border-b border-b-[#EAECF0] last:border-b-0 text-center text-sm text-[#475467]"
              >
                <td className="px-4 py-3">{request.branch}</td>
                <td className="px-4 py-3">{request.cardType}</td>
                <td className="px-4 py-3">{request.quantity}</td>
                <td className="px-4 py-3">
                  <Badge
                    className={`${getStatusColor(
                      request.status as keyof typeof statusColors
                    )} px-3 py-1`}
                  >
                    {request.status}
                  </Badge>
                </td>
                <td className="px-4 py-2 text-primary-200 font-satoBold cursor-pointer">
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardRequestsTable;
