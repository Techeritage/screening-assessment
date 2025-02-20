"use client";

import { cn } from "@/lib/utils";
import {
  ActionButton,
  ActionStatusType,
  CardRequestsProps,
  DisplayStatusType,
} from "@/types";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { getStatusColor } from "@/constants";
import { CircleCheck } from "lucide-react";
import { getDisplayStatus, getInitialStep } from "@/lib/helper";

const DetailsView = ({
  title,
  value,
  type = 1,
}: {
  title: string;
  value: any;
  type?: number;
}) => (
  <div>
    <p className="text-[#344054] font-satoMd mb-1">{title}</p>
    <div
      className={cn(
        "py-2 rounded-lg text-primary-400",
        type === 1 &&
          "bg-[#F5F5F7] max-w-[448px] px-3 border border-myGray-100",
        type === 3 &&
          `${getStatusColor(
            value as DisplayStatusType
          )} w-fit border py-1 px-4 rounded-full`
      )}
    >
      {value}
    </div>
  </div>
);

export const btnColors = {
  "Download for production": "bg-[#344054]",
  "Mark as In Progress": "bg-[#B54708]",
  "Mark as Ready": "bg-[#067647]",
  "Send to Dispatch": "bg-[#8020E7]",
  "Mark as Acknowledged": "bg-[#014DAF]",
} as const;

export const getBtnColor = (btn: keyof typeof btnColors) => btnColors[btn];

const actionBtn: ActionButton[] = [
  {
    icon: "/icons/btn1.svg",
    text: "Download for production",
    action: "DOWNLOADED",
    showModal: true,
  },
  {
    icon: "/icons/btn2.svg",
    text: "Mark as In Progress",
    action: "In Progress",
  },
  {
    icon: "/icons/btn3.svg",
    text: "Mark as Ready",
    action: "Ready",
  },
  {
    icon: "/icons/btn4.svg",
    text: "Send to Dispatch",
    action: "DISPATCHED",
    showModal: true,
  },
  {
    icon: "/icons/btn5.svg",
    text: "Mark as Acknowledged",
    action: "Acknowledged",
  },
];

const SuccessModal = ({
  isOpen,
  onClose,
  message,
}: {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
      <div className="w-[48px] h-[48px] rounded-[10px] shadow myFlex justify-center">
        <CircleCheck color="#007129" />
      </div>
      <div>
        <h4 className="text-primary-400 font-normal font-satoBold">
          Successful
        </h4>
        <p className="text-[#475467]">{message}</p>
      </div>
      <DialogClose className="w-fit rounded-[4px] font-normal focus:outline-none px-7 py-2 bg-primary-200 text-white !font-satoMd">
        Continue
      </DialogClose>
    </DialogContent>
  </Dialog>
);

const CardRequestDetails = ({ data }: { data: CardRequestsProps }) => {
  const [currentStep, setCurrentStep] = useState(getInitialStep(data.status));
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [status, setStatus] = useState<ActionStatusType>(data.status);
  const [isCompleted, setIsCompleted] = useState(
    data.status === "Acknowledged"
  );
  const displayStatus = getDisplayStatus(status);

  const handleAction = async (button: ActionButton, index: number) => {
    try {
      if (button.showModal) {
        setModalMessage(
          button.text === "Download for production"
            ? "Production file has been downloaded."
            : "Card batch successfully sent to dispatch."
        );
        setShowModal(true);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
      setStatus(button.action);

      if (button.action === "Acknowledged") {
        setIsCompleted(true);
        setCurrentStep(-1);
      } else {
        let nextStep = -1;
        switch (button.action) {
          case "DOWNLOADED":
            nextStep = 1;
            break;
          case "In Progress":
            nextStep = 2;
            break;
          case "Ready":
            nextStep = 3;
            break;
          case "DISPATCHED":
            nextStep = 4;
            break;
          default:
            nextStep = -1;
        }
        setCurrentStep(nextStep);
      }
    } catch (error) {
      console.error("Error handling action:", error);
    }
  };

  const isButtonEnabled = (index: number) => {
    if (isCompleted) return false;
    return index === currentStep;
  };

  return (
    <section className="bg-white rounded-[10px] p-3 border border-myGray-500">
      <h4 className="text-myBlack !font-satoMd">Card Request Details</h4>
      <div className="grid gap-5 mt-8">
        <div className="grid grid-cols-2 gap-5">
          <DetailsView title="Branch Name" value={data?.branch} />
          {data?.initiator && (
            <DetailsView title="Initiator" value={data.initiator} />
          )}
        </div>
        <div className="grid grid-cols-2 gap-5">
          {data?.cardType && (
            <DetailsView title="Card Type" value={data.cardType} />
          )}
          {data?.cardCharges && (
            <DetailsView title="Card Charges" value={data.cardCharges} />
          )}
        </div>
        <div className="grid grid-cols-2 gap-5">
          {data?.quantity && (
            <DetailsView title="Quantity" value={data.quantity} />
          )}
          {data?.batch && <DetailsView title="Batch" value={data.batch} />}
        </div>
        <div className="grid grid-cols-2 gap-5">
          {data?.dataRequested && (
            <DetailsView
              title="Date Requested"
              value={data.dataRequested}
              type={2}
            />
          )}
          <DetailsView title="Status" value={displayStatus} type={3} />
        </div>
      </div>
      <div className="py-5">
        <p className="text-[#344054] font-satoBold">Actions</p>
        <div className="mt-3 flex gap-5">
          {actionBtn.map((btn, i) => (
            <button
              key={i}
              disabled={!isButtonEnabled(i)}
              onClick={() => handleAction(btn, i)}
              className={cn(
                `${getBtnColor(
                  btn.text
                )} rounded-[4px] py-2 px-3 font-satoMd gap-2 text-white myFlex`,
                !isButtonEnabled(i) && "opacity-50 cursor-not-allowed"
              )}
            >
              <Image src={btn.icon} alt="icon" width={20} height={20} />
              <span className="text-sm">{btn.text}</span>
            </button>
          ))}
        </div>
      </div>

      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
    </section>
  );
};

export default CardRequestDetails;
