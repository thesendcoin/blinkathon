import { TrackCardBg } from "@/assets/bgs/TrackCardBg";
import closeIcon from "@/assets/svgs/buttons/close.svg";
import bags from "@/assets/svgs/sponsors/bags.svg";
import carrot from "@/assets/svgs/sponsors/carrot.svg";
import dialect from "@/assets/svgs/sponsors/dialect.svg";
import helius from "@/assets/svgs/sponsors/helius.svg";
import juicebox from "@/assets/svgs/sponsors/JuiceBoxLogo.svg";
import metaplex from "@/assets/svgs/sponsors/metaplex.svg";
import okxwallet from "@/assets/svgs/sponsors/okxwallet.svg";
import solanafoundation from "@/assets/svgs/sponsors/solanafoundation.svg";
import squads from "@/assets/svgs/sponsors/squads.svg";
import stgermany from "@/assets/svgs/sponsors/stgermany.svg";
import stindia from "@/assets/svgs/sponsors/stindia.svg";
import stvietnam from "@/assets/svgs/sponsors/stvietnam.svg";
import tensor from "@/assets/svgs/sponsors/tensor.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";

interface Props {
  propPrizes: string[];
  propTitle: string;
  propDescription: string;
  propPrizePool: string;
  propPrizePoolSubTxt?: string;
  // bags, carrot, dialect, helius, okxwallet, metaplex, solanafoundation, squads, stindia, stvietnam, tensor
  propSponsors: string[];
}
const TracksCard = ({
  propPrizes,
  propTitle,
  propDescription,
  propPrizePool,
  propPrizePoolSubTxt,
  propSponsors,
}: Props) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="relative">
            <div className="absolute p-12 flex flex-col gap-1 text-left">
              <p className="text-[42px] leading-none">{propTitle}</p>
              <p className="text-[26px] leading-none">{propDescription}</p>
            </div>

            <div className="cursor-pointer">
              <TrackCardBg />
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="bg-[#1C71FF]">
          <div className="flex flex-col text-white">
            <div className="flex justify-between align-top ">
              <div className="text-[42px]"> {propTitle} </div>
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
            <div className="text-[64px]"> Prize Pool: ${propPrizePool} </div>
            {propPrizePoolSubTxt && (
              <div className="text-[24px]">{propPrizePoolSubTxt}</div>
            )}

            {propSponsors?.length > 0 && (
              <div
                className={`{bg-white flex flex-wrap justify-evenly align-middle items-center ${
                  propSponsors?.length == 1
                    ? "justify-center"
                    : "justify-between"
                } justify-between gap-4 p-4 border-8 border-[#699EFF] rounded-[32px] bg-white`}
              >
                {propSponsors?.map(
                  (sponsor, index) =>
                    sponsor !== undefined && (
                      <Image
                        key={index}
                        className="w-32 p-2 flex justify-center items-center"
                        src={
                          sponsor === "solanafoundation"
                            ? solanafoundation
                            : sponsor === "metaplex"
                            ? metaplex
                            : sponsor === "bags"
                            ? bags
                            : sponsor === "carrot"
                            ? carrot
                            : sponsor === "dialect"
                            ? dialect
                            : sponsor === "helius"
                            ? helius
                            : sponsor === "okxwallet"
                            ? okxwallet
                            : sponsor === "squads"
                            ? squads
                            : sponsor === "stindia"
                            ? stindia
                            : sponsor === "stvietnam"
                            ? stvietnam
                            : sponsor === "tensor"
                            ? tensor
                            : sponsor === "juicebox"
                            ? juicebox
                            : sponsor === "stgermany"
                            ? stgermany
                            : ""
                        }
                        alt="Sponsors"
                        width={240}
                        height={240}
                      />
                    )
                )}
              </div>
            )}
            <div className="text-[40px] "> Prizes: </div>

            {propPrizes.map((prize, index) => (
              <div key={index} className="text-[26px] ml-2">
                {prize}
              </div>
            ))}

            {/* <div className="text-[40px]"> Examples: </div>
              <div className="text-[26px] ml-2"> - idea 1</div>
              <div className="text-[26px] ml-2"> - idea 2</div>
  
              <div className="text-[40px] mb-4"> Resources: </div>
  
  
              <div className="text-[26px] ml-6 z-10 "> Link1.xyz </div>
              <Image
                className="w-32 h-full -mt-12 z-0"
                src={ResourceBG}
                alt="Sponsors"
                width={120}
                height={120}
              /> */}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TracksCard;
