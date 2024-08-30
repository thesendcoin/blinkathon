import Image from "next/image";
import React from "react";
import resultsHeroSvg from "@/assets/svgs/bgs/ResultsHeroBG.svg";
import blueSvgCTA from "@/assets/svgs/buttons/CtaBlueBg.svg";

const ResultsHero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mt-32">
          <p className="text-[104px] text-[#1C71FF] z-50">Flex your Blinks</p>
          <p className="text-[40px] text-[#1C71FF] z-50">
            Submit your Project here!
          </p>
          <div className="">
            <div className="text-[#fff] text-lg z-50">Submit</div>
            <Image
              className="-mt-6 z-0"
              src={blueSvgCTA}
              alt="Sponsors"
              width={104}
              height={240}
            />
          </div>
        </div>
        <Image
          className="w-full h-full z-0 -mt-72"
          src={resultsHeroSvg}
          alt="Sponsors"
          width={240}
          height={240}
        />
      </div>
    </>
  );
};

export default ResultsHero;
