"use client";

import { ChangeEvent, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, SquarePlus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function AddFeeModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    feeName: "",
    value: 0,
    currency: "NGN",
    frequency: "One Off",
    feeImpact: "Issuance",
    accountPad: "None",
    account: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
    setOpen(false);
  };

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-blue-600"
      >
        <Plus className="mr-2" /> Add Fee
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 max-w-[498px] h-[90dvh]">
          <DialogHeader className="flex-row p-4 py-5 gap-3 border-b border-b-[#EAECF0]">
            <div className="w-[48px] h-[48px] rounded-[10px] shadow myFlex justify-center">
              <SquarePlus className="text-myGray-400" />
            </div>
            <div className="flex justify-between flex-col">
              <DialogTitle className="text-primary-400">Add Fee</DialogTitle>
              <DialogDescription className="text-[#475467]">
                Fill in fee details.
              </DialogDescription>
            </div>
          </DialogHeader>
          <Card className="border-0 pt-0 px-4 no-scrollbar overflow-y-scroll">
            <CardContent className="space-y-7 p-0">
              <div>
                <label>Fee Name*</label>
                <Input
                  name="feeName"
                  placeholder="Maintenance"
                  value={formData.feeName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Value</label>
                <Input
                  name="value"
                  type="number"
                  value={formData.value}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Currency</label>
                <RadioGroup
                  value={formData.currency}
                  onValueChange={(value) =>
                    setFormData({ ...formData, currency: value })
                  }
                  className="flex space-x-4 mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="NGN" id="currency-ngn" />
                    <label
                      htmlFor="currency-ngn"
                      className="!font-sato text-myBlack"
                    >
                      NGN
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="USD" id="currency-usd" />
                    <label
                      htmlFor="currency-usd"
                      className="!font-sato text-myBlack"
                    >
                      USD
                    </label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <label>Fee Frequency</label>
                <RadioGroup
                  value={formData.frequency}
                  onValueChange={(value) =>
                    setFormData({ ...formData, frequency: value })
                  }
                  className="flex space-x-4 mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="One Off" id="currency-ngn" />
                    <label
                      htmlFor="currency-ngn"
                      className="!font-sato text-myBlack"
                    >
                      One Off
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Monthly" id="currency-usd" />
                    <label
                      htmlFor="currency-usd"
                      className="!font-sato text-myBlack"
                    >
                      Monthly
                    </label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <label>Fee Impact</label>
                <RadioGroup
                  value={formData.feeImpact}
                  onValueChange={(value) =>
                    setFormData({ ...formData, feeImpact: value })
                  }
                  className="flex space-x-4 mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Issuance" id="currency-ngn" />
                    <label
                      htmlFor="currency-ngn"
                      className="!font-sato text-myBlack"
                    >
                      Issuance
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Pin Reissue" id="currency-usd" />
                    <label
                      htmlFor="currency-usd"
                      className="!font-sato text-myBlack"
                    >
                      Pin Reissue
                    </label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <label>Account Pad</label>
                <RadioGroup
                  value={formData.accountPad}
                  onValueChange={(value) =>
                    setFormData({ ...formData, accountPad: value })
                  }
                  className="flex space-x-4 mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="None" id="currency-ngn" />
                    <label
                      htmlFor="currency-ngn"
                      className="!font-sato text-myBlack"
                    >
                      None
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="Branch Code Prefix"
                      id="currency-usd"
                    />
                    <label
                      htmlFor="currency-usd"
                      className="!font-sato text-myBlack"
                    >
                      Branch Code Prefix
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="Branch Code Suffix"
                      id="currency-usd"
                    />
                    <label
                      htmlFor="currency-usd"
                      className="!font-sato text-myBlack"
                    >
                      Branch Code Suffix
                    </label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <label>Account</label>
                <Input
                  name="account"
                  value={formData.account}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>
          <DialogFooter className="p-5 border-t border-b-[#EAECF0]">
            <Button
              onClick={handleSubmit}
              className="bg-blue-600 !h-[44px] w-full justify-center"
            >
              Add Fee
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
