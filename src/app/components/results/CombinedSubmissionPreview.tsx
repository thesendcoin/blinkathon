import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Action, useAction } from "@dialectlabs/blinks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
import "@dialectlabs/blinks/index.css";
import { envHeliusRpcUrl } from "@/lib/envConfig";
import closeIcon from "@/assets/svgs/buttons/close.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import BlinkComp from "../Blinks/BlinkComp";

const DynamicBlink = dynamic(
  () => import("@dialectlabs/blinks").then((mod) => mod.Blink),
  { ssr: false }
);

interface CombinedSubmissionPreviewProps {
  propPfpUrl: string;
  propWalAddress: string;
  propBlinkUrl: string;
  propActionApiUrl: string;
  propBlinkPreviewUrl: string;
}

const CombinedSubmissionPreview = ({
  propPfpUrl,
  propWalAddress,
  propBlinkUrl,
  propActionApiUrl,
  propBlinkPreviewUrl,
}: CombinedSubmissionPreviewProps) => {
  const [action, setAction] = useState<Action | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { adapter } = useActionSolanaWalletAdapter(envHeliusRpcUrl as string);
  const { action: actionUrl } = useAction({
    url: propActionApiUrl,
    adapter,
  });

  useEffect(() => {
    if (actionUrl) {
      setAction(actionUrl);
      setError(null);
    } else {
      console.error("Error fetching action:", actionUrl);
      setError("Failed to load blink data. Please try again later.");
    }
  }, [actionUrl]);

  // const BlinkContent = () => {
  //   if (error) {
  //     return <div className="text-red-500">{error}</div>;
  //   }

  //   return action ? (
  //     <DynamicBlink
  //       stylePreset="custom"
  //       action={action}
  //       websiteText={new URL(propActionApiUrl).hostname}
  //     />
  //   ) : (
  //     <div className="flex flex-col gap-2">
  //       <Skeleton className="h-[320px]" />
  //       <Skeleton className="h-[16px]" />
  //       <Skeleton className="h-[16px]" />
  //       <Skeleton className="h-[32px]" />
  //       <div className="flex gap-2">
  //         <Skeleton className="h-[32px]" />
  //         <Skeleton className="h-[32px]" />
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-1 text-left">
            {action?.icon ? (
              <Image
                src={action.icon}
                alt="Blink Icon"
                width={320}
                height={320}
              />
            ) : (
              <div className="w-[320px] h-[320px] bg-[#fff] border-8 border-[#699EFF]"></div>
            )}
          </div>

          <div className="flex w-full items-center justify-center p-2 gap-2 border-8 border-[#699EFF] bg-[#1D41B9]">
            <div className="flex items-center justify-center gap-2">
              <div className="cursor-pointer h-[44px] w-[44px] border-8 border-[#699EFF] bg-[#cbe330] rounded-full"></div>
              <div className="cursor-pointer text-[24px]">{propWalAddress}</div>
            </div>
            <div className="text-[24px]">{action?.url || propBlinkUrl}</div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-[#1C71FF] overflow-y-scroll">
        <div className="m-2 overflow-y-scroll">
          {action && <BlinkComp propActionApiUrl={propActionApiUrl} />}
        </div>

        <DialogClose className="absolute right-2 top-2 p-1">
          <Image
            className="w-8 h-8"
            src={closeIcon}
            alt="close"
            width={40}
            height={40}
          />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default CombinedSubmissionPreview;
