import Image from "next/image";
import React from "react";
import TracksBottomBG from "@/assets/svgs/bgs/TracksBottomBG.svg";
import TracksTopBG from "@/assets/svgs/bgs/TracksTopBG.svg";
import { TrackCardBg } from "@/assets/bgs/TrackCardBg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import closeIcon from "@/assets/svgs/buttons/close.svg";
import ResourceBG from "@/assets/svgs/bgs/ResourceBg.svg";
import juiceboxSvg from "@/assets/svgs/sponsors/JuiceBoxLogo.svg";
import STGermanyLogo from "@/assets/svgs/sponsors/STGermanyLogo.svg";

const TrackContainer = () => {
  return (
    <>
      <Dialog>
        <div className="relative">
          <div className="absolute p-12 flex flex-col gap-1">
            <p className="text-[42px] leading-none">Track name</p>
            <p className="text-[26px] leading-none">Track Description</p>
          </div>
          <DialogTrigger>
            <div className="cursor-pointer">
              <TrackCardBg />
            </div>
          </DialogTrigger>
        </div>

        <DialogContent className="bg-[#1C71FF]">
          <div className="flex flex-col text-white">
            <div className="flex justify-between">
              <div className="text-[42px]"> Track Title </div>
              <DialogClose>
                <Image
                  className="w-8 h-8"
                  src={closeIcon}
                  alt="close"
                  width={40}
                  height={40}
                />
              </DialogClose>
            </div>
            <div className="text-[64px]"> Prize Pool: $10k </div>

            <div className="bg-white flex justify-between gap-4 p-4 border-8 border-[#699EFF] rounded-[32px]">
              {" "}
              <Image
                className="w-32"
                src={juiceboxSvg}
                alt="Sponsors"
                width={240}
                height={240}
              />
              <Image
                className="w-32"
                src={STGermanyLogo}
                alt="Sponsors"
                width={240}
                height={240}
              />
            </div>

            <div className="text-[40px] "> Prizes: </div>
            <div className="text-[26px] ml-2"> - 1st Place : 6k USDC</div>
            <div className="text-[26px] ml-2"> - 1st Place : 6k USDC</div>

            <div className="text-[40px]"> Examples: </div>
            <div className="text-[26px] ml-2"> - idea 1</div>
            <div className="text-[26px] ml-2"> - idea 2</div>

            <div className="text-[40px] mb-4"> Resources: </div>

            {/* Group This :  */}
            <div className="text-[26px] ml-6 z-10 "> Link1.xyz </div>
            <Image
              className="w-32 h-full -mt-12 z-0"
              src={ResourceBG}
              alt="Sponsors"
              width={120}
              height={120}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const TracksSection = () => {
  return (
    <div
      id="tracks"
      className="min-h-screen relative flex flex-row justify-between items-center bg-[#1C71FF]"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          className="w-full h-full"
          src={TracksTopBG}
          alt="Sponsors"
          width={240}
          height={240}
        />

        <p className="text-[94px]">Blinkathon Tracks</p>

        <div className="flex flex-row flex-wrap items-center justify-center gap-12 max-w-7xl">
          <TrackContainer />
          <TrackContainer />
          <TrackContainer />
          <TrackContainer />
        </div>

        <Image
          className="w-full h-full"
          src={TracksBottomBG}
          alt="Sponsors"
          width={240}
          height={240}
        />
      </div>
    </div>
  );
};

export default TracksSection;
