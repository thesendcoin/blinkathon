import TracksBottomBG from "@/assets/svgs/bgs/TracksBottomBG.svg";
import TracksTopBG from "@/assets/svgs/bgs/TracksTopBG.svg";
import Image from "next/image";
import { tracks } from "../data/tracks";
import TracksCard from "./Tracks/TracksCard";

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
          {tracks.map((track, index) => (
            <TracksCard
              key={index}
              propTitle={track.propTitle}
              propDescription={track.propDescription}
              propPrizePool={track.propPrizePool}
              propPrizePoolSubTxt={track.propPrizePoolSubTxt}
              propPrizes={track.propPrizes}
              propSponsors={track.propSponsors}
            />
          ))}
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
