import closeIcon from "@/assets/svgs/buttons/close.svg";
import alldomains from "@/assets/svgs/sponsors/alldomains.svg";
import bags from "@/assets/svgs/sponsors/bags.svg";
import carrot from "@/assets/svgs/sponsors/carrot.svg";
import dialect from "@/assets/svgs/sponsors/dialect.svg";
import helius from "@/assets/svgs/sponsors/helius.svg";
import juicebox from "@/assets/svgs/sponsors/JuiceBoxLogo.svg";
import kamino from "@/assets/svgs/sponsors/kamino.svg";
import metaplex from "@/assets/svgs/sponsors/metaplex.svg";
import okxwallet from "@/assets/svgs/sponsors/okxwallet.svg";
import send from "@/assets/svgs/sponsors/send.svg";
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
import BlinkComp from "../Blinks/BlinkComp";

interface TypeSubmissionPreview {
  propPfpUrl: string;
  propWalAddress: string;
  propBlinkUrl: string;
  propActionApiUrl: string;
}

const SubmissionPreview = ({
  propPfpUrl,
  propWalAddress,
  propBlinkUrl,
  propActionApiUrl,
}: TypeSubmissionPreview) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="relative  border-8 border-[#699EFF] bg-[#1D41B9]">
            <div className="absolute p-12 flex flex-col gap-1 text-left">
              {/* <Image src={alldomains} alt="Sponsors" width={40} height={40} /> */}
            </div>

            <div className="flex items-center justify-center p-2 gap-2">
              <div className="flex items-center justify-center gap-2">
                <div className="cursor-pointer h-[44px]  w-[44px] border-8 border-[#699EFF] bg-[#cbe330] rounded-full"></div>
                <div className="cursor-pointer text-[24px]">
                  {propWalAddress}
                </div>
              </div>

              <div className="text-[24px]">{propBlinkUrl}</div>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="bg-[#1C71FF]">
          <BlinkComp propActionApiUrl={propActionApiUrl} />
          <DialogClose>
            <Image
              className="w-8 h-8"
              src={closeIcon}
              alt="close"
              width={40}
              height={40}
            />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubmissionPreview;
