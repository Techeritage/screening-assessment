import React from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { cardRequests, getStatusColor, statusColors } from "@/constants";

const RequestTable = () => {
  return (
    <div className="overflow-x-auto rounded-[4px] border border-[#EAECF0]">
      <table className="w-full border-collapse rounded-[4px] overflow-hidden">
        <thead>
          <tr className="bg-[#F9FAFB] border-b border-[#EAECF0] text-center font-normal font-satoMd text-[#475467]">
            <th className="px-4 py-3 border-r border-[#EAECF0]">Branch</th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">Initiator</th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">Quantity</th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">Batch</th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">
              Date Requested
            </th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">Status</th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">Action</th>
          </tr>
        </thead>
        <tbody>
          {cardRequests.map((request, index) => (
            <tr
              key={index}
              className="border-b border-b-[#EAECF0] bg-white last:border-b-0 text-center text-sm text-[#475467]"
            >
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                {request.branch}
              </td>
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                {request.initiator}
              </td>
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                {request.quantity}
              </td>
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                {request.batch}
              </td>
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                {request.dataRequested}
              </td>
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                <Badge
                  className={`${getStatusColor(
                    request.status as keyof typeof statusColors
                  )} px-3 py-1`}
                >
                  {request.status}
                </Badge>
              </td>
              <td className="px-4 py-2 text-primary-200 font-satoBold">
                <Link
                  href={`/card-request/${request.id}`}
                  className="hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
