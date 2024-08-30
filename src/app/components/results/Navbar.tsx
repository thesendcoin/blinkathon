"use client";

import React from "react";
import { BlinkathonSVG } from "../HeroSection";
import Image from "next/image";
import whiteSvgCTA from "@/assets/svgs/buttons/CtaWhiteBg.svg";
import blueSvgCTA from "@/assets/svgs/buttons/CtaBlueBg.svg";
import blinkathonLogo from "@/assets/logos/BlinkathonLogo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center m-4">
        <Link href="/">
          <Image src={blinkathonLogo} alt="Sponsors" width={80} height={240} />
        </Link>
        <div className="flex gap-4">
          <div className=" cursor-pointer">
            <Image
              className="-z-40"
              src={whiteSvgCTA}
              alt="Sponsors"
              width={120}
              height={240}
            />

            <div
              onClick={() => window.open("https://t.me/blinkathon")}
              className="-mt-8 ml-6 text-[#1C71FF] text-lg z-50"
            >
              Join telegram
            </div>
          </div>

          <div className="cursor-pointer">
            <Image
              className="-z-40"
              src={blueSvgCTA}
              alt="Sponsors"
              width={120}
              height={240}
            />
            <div className="-mt-8 ml-6 text-[#fff] text-lg z-50">
              Submit Blinks
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
