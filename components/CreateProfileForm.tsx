"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import AddFeeModal from "./CreateFeeModal";

const CreateProfileForm = () => {
  const [form, setForm] = useState({
    cardName: "",
    binPrefix: "",
    cardScheme: "Verve",
    description: "",
    expiration: "0",
    currency: "NGN",
    branchBlacklist: "Head Office",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="mt-5">
      <Card className="mb-6">
        <CardContent className="space-y-4">
          <h4 className="text-myBlack !font-satoMd">Profile Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Card Name*</label>
              <Input
                name="cardName"
                value={form.cardName}
                onChange={handleChange}
                placeholder="Enter card name"
              />
            </div>
            <div>
              <label>Bin Prefix*</label>
              <Input
                name="binPrefix"
                value={form.binPrefix}
                onChange={handleChange}
                placeholder="00000000"
              />
            </div>
            <div>
              <label>Card Scheme*</label>
              <Select
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, cardScheme: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder={form.cardScheme} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Verve">Verve</SelectItem>
                  <SelectItem value="Visa">Visa</SelectItem>
                  <SelectItem value="Mastercard">Mastercard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label>Expiration*</label>
              <Input
                name="expiration"
                value={form.expiration}
                onChange={handleChange}
                placeholder="0"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Description</label>
              <Input
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
              />
            </div>
            <div>
              <label>Currency*</label>
              <Select
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, currency: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder={form.currency} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NGN">NGN</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <h4 className="text-myBlack !font-satoMd">Fees</h4>
          <AddFeeModal />
          <table className="w-full border border-[#EAECF0]">
            <thead>
              <tr className="bg-[#F9FAFB] font-satoMd">
                {[
                  "Name",
                  "Value",
                  "Frequency",
                  "Currency",
                  "Time",
                  "Account Pad",
                  "Account",
                ].map((header) => (
                  <th key={header} className="p-2 border border-[#EAECF0]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-4 border border-[#EAECF0]" colSpan={7}>
                  No fees added yet.
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Button type="submit" className="mt-6 !h-[44px] !px-16">
        Create Profile
      </Button>
    </form>
  );
};

export default CreateProfileForm;
