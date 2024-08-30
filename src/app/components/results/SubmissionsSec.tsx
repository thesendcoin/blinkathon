import React from "react";
import TracksBottomBG from "@/assets/svgs/bgs/TracksBottomBG.svg";
import TracksTopBG from "@/assets/svgs/bgs/TracksTopBG.svg";
import Image from "next/image";
import SubmissionPreview from "@/app/components/submissions/SubmissionPreview";

const SubmissionsSec = () => {
  return (
    <>
      <div className="w-full h-full bg-[#1C71FF]">
        <Image
          className="w-full h-full"
          src={TracksTopBG}
          alt="Sponsors"
          width={240}
          height={240}
        />
        <p className="text-[94px] text-center">Blinkathon Submissions</p>

        <SubmissionPreview
          propActionApiUrl="https://checkmate.sendarcade.fun"
          propPfpUrl={""}
          propWalAddress={"0x093202..090"}
          propBlinkUrl={"blinkathon.com"}
        />

        <Image
          className="w-full h-full"
          src={TracksBottomBG}
          alt="Sponsors"
          width={240}
          height={240}
        />
      </div>
    </>
  );
};

export default SubmissionsSec;
