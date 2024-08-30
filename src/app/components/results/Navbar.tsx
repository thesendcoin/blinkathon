import React from "react";
import { BlinkathonSVG } from "../HeroSection";
import Image from "next/image";
import whiteSvgCTA from "@/assets/svgs/buttons/CtaWhiteBg.svg";
import blueSvgCTA from "@/assets/svgs/buttons/CtaBlueBg.svg";
import blinkathonLogo from "@/assets/logos/BlinkathonLogo.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Image src={blinkathonLogo} alt="Sponsors" width={80} height={240} />

        <div className="flex ">
          <div className="">
            <div className="text-[#1C71FF] text-lg z-100">Join telegram</div>
            <Image className="-mt-6" src={whiteSvgCTA} alt="Sponsors" width={104} height={240} />
          </div>

          <div className="">
            <div className="text-[#fff] text-lg z-50">Join telegram</div>
            <Image className="-mt-6 -z-40" src={blueSvgCTA} alt="Sponsors" width={104} height={240} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
