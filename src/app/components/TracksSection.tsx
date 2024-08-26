import Image from "next/image";
import React from "react";
import TracksBottomBG from "@/assets/svgs/bgs/TracksBottomBG.svg";
import TracksTopBG from "@/assets/svgs/bgs/TracksTopBG.svg";
import { TrackCardBg } from "@/assets/bgs/TrackCardBg";
const TrackContainer = () => {
  return (
    <div className="relative">
      <div className="absolute p-12 flex flex-col gap-1">
        <p className="text-[42px] leading-none">Track name</p>
        <p className="text-[26px] leading-none">Track Description</p>
      </div>
      <TrackCardBg />
    </div>
  );
};

const TracksSection = () => {
  return (
    <div className="min-h-screen relative flex flex-row justify-between items-center bg-[#1C71FF]">
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
