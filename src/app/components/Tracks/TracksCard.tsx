import { TrackCardBg } from "@/assets/bgs/TrackCardBg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import closeIcon from "@/assets/svgs/buttons/close.svg";
import juiceboxSvg from "@/assets/svgs/sponsors/JuiceBoxLogo.svg";
import STGermanyLogo from "@/assets/svgs/sponsors/STGermanyLogo.svg";
import Image from "next/image";

interface Props {
  propPrizes: {
    place: number;
    amount: string;
  }[];
  propTitle: string;
  propDescription: string;
  propPrizePool: string;
  propPrizePoolSubTxt: string;
}
const TracksCard = ({
  propPrizes,
  propTitle,
  propDescription,
  propPrizePool,
  propPrizePoolSubTxt,
}: Props) => {
  return (
    <>
      <Dialog>
        <div className="relative">
          <div className="absolute p-12 flex flex-col gap-1">
            <p className="text-[42px] leading-none">{propTitle}</p>
            <p className="text-[26px] leading-none">{propDescription}</p>
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
            <div className="text-[24px]">{propPrizePoolSubTxt}</div>

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

            {propPrizes.map((prize, index) => (
              <div key={index} className="text-[26px] ml-2">
                - {prize.place} Place : {prize.amount}
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
