"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cardProfile } from "@/constants";
import { Pen, Trash2 } from "lucide-react";

const DeleteDialog = ({
  setIsDelete,
}: {
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setIsDelete(false)}
      className="fixed z-[50000] top-0 bottom-0 myFlex justify-center right-0 left-0 bg-black/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-6 w-[90%] max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this project?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setIsDelete(false)}
            className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-500 myFlex justify-center text-white rounded-lg hover:bg-red-600 transition-colors duration-200">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const CardProfileTable = () => {
  const [isDelete, setIsDelete] = useState(false);
  return (
    <section className="overflow-x-auto rounded-[4px] border border-[#EAECF0]">
      <table className="w-full border-collapse rounded-[4px] overflow-hidden">
        <thead>
          <tr className="bg-[#F9FAFB] border-b border-[#EAECF0] text-center font-normal font-satoMd text-[#475467]">
            <th className="px-4 py-3 border-r border-[#EAECF0]">Card Name</th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">Currency</th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">Expiration</th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">Bin Prefix</th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">
              Date Created
            </th>
            <th className="px-4 py-3 border-r border-[#EAECF0]">Action</th>
          </tr>
        </thead>
        <tbody>
          {cardProfile.map((request, index) => (
            <tr
              key={index}
              className="border-b border-b-[#EAECF0] bg-white last:border-b-0 text-center text-sm text-[#475467]"
            >
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                {request.cardName}
              </td>
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                {request.currency}
              </td>
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                {request.expiration}
              </td>
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                {request.binPrefix}
              </td>
              <td className="px-4 py-3 border-r border-[#EAECF0]">
                {request.dataCreated}
              </td>
              <td className="px-4 py-2 inline-flex items-center gap-7">
                <button onClick={() => setIsDelete(true)}>
                  <Trash2
                    size={18}
                    className="transition-colors duration-200 hover:text-red-500"
                    strokeWidth={1}
                  />
                </button>
                <Link
                  href={`/card-profile/edit`}
                  className="hover:underline"
                >
                  <Pen
                    size={18}
                    className="transition-colors duration-200 hover:text-yellow-500"
                    strokeWidth={1}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isDelete && <DeleteDialog setIsDelete={setIsDelete} />}
    </section>
  );
};

export default CardProfileTable;
