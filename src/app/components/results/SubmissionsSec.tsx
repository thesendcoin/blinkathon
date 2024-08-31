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

        <div className="flex flex-row items-center justify-center">
          <SubmissionPreview
            propBlinkPreviewUrl={""}
            propActionApiUrl="https://rockpaperblinks.vercel.app/rps"
            propPfpUrl={""}
            propWalAddress={"0x093202..090"}
            propBlinkUrl={"blinkathon.com"}
          />
        </div>
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
