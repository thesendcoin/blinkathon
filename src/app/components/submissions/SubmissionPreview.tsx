"use client";

import closeIcon from "@/assets/svgs/buttons/close.svg";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import BlinkComp from "../Blinks/BlinkComp";
import utilCropGH from "@/utils/ui/utilCropGH";
import githubUrl from "@/assets/svgs/icons/github.svg";

interface TypeSubmissionPreview {
  propPfpUrl: string;
  propTgHandle: string;
  propBlinkUrl: string;
  propActionApiUrl: string;
  propBlinkPreviewUrl: string;
}

const SubmissionPreview = ({
  propPfpUrl,
  propTgHandle,
  propBlinkUrl,
  propActionApiUrl,
  propBlinkPreviewUrl,
}: TypeSubmissionPreview) => {
  return (
    <>
      <Dialog>
        <div className="flex flex-col items-center justify-center gap-4 ">
          <DialogTrigger>
            <div className="flex flex-col gap-1 text-left">
              {propBlinkPreviewUrl && (
                <Image
                  src={propBlinkPreviewUrl}
                  alt="Sponsors"
                  width={40}
                  height={40}
                />
              )}
              {!propBlinkPreviewUrl && (
                <div className="w-[320px] h-[320px] bg-[#fff] border-8 border-[#699EFF] text-black">
                  {" "}
                  {/* {propActionApiUrl} */}
                </div>
              )}
            </div>
          </DialogTrigger>

          <div className="flex flex-col w-[320px] p-2 gap-2 border-8 border-[#699EFF] bg-[#1D41B9]">
            <div
              onClick={() =>
                window?.open(`https://t.me/${propTgHandle?.replace("@", "")}`)
              }
              className="flex items-center gap-2"
            >
              <div className="cursor-pointer h-[44px]  w-[44px] border-8 border-[#699EFF] bg-[#cbe330] rounded-full"></div>
              <div className="cursor-pointer text-[24px]">{propTgHandle}</div>
            </div>
            <div
              onClick={() => window?.open(propBlinkUrl)}
              className="flex items-center gap-2"
            >
              <div className="cursor-pointer h-[44px]  w-[44px] rounded-full">
                <Image src={githubUrl} alt="Sponsors" width={40} height={40} />
              </div>
              <div className="cursor-pointer text-[24px]">
                {utilCropGH(propBlinkUrl)}
              </div>
            </div>
          </div>
        </div>

        <DialogContent className="bg-[#1C71FF] overflow-y-scroll">
          <div className="m-2 overflow-y-scroll">
            <BlinkComp propActionApiUrl={propActionApiUrl} />
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
    </>
  );
};

export default SubmissionPreview;
