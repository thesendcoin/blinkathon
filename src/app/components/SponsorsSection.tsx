
import sponsorSvg from "@/assets/svgs/sponsorsSVG.svg";
import juiceboxSvg from "@/assets/svgs/sponsors/JuiceBoxLogo.svg";
import STGermanyLogo from "@/assets/svgs/sponsors/STGermanyLogo.svg";
import Image from "next/image";

export const SponsorsSection = () => {
  return (
    <>
      <div className="w-full">
        <div className="text-[#1C71FF] text-6xl flex justify-center m-4">
          {" "}
          Sponsors{" "}
        </div>

        <div className="flex flex-wrap gap-16 align-middle items-center justify-center ">
          <Image
            className=""
            src={juiceboxSvg}
            alt="Sponsors"
            width={240}
            height={240}
          />
          <Image
            className=""
            src={STGermanyLogo}
            alt="Sponsors"
            width={240}
            height={240}
          />
        </div>

        {/* <SponsorsBg /> */}

        <Image
          className="w-full h-full"
          src={sponsorSvg}
          alt="Sponsors"
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
};
