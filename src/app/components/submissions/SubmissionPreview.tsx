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

const SubmissionPreview = ({}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="relative">
            <div className="absolute p-12 flex flex-col gap-1 text-left">

                
            </div>

            <div className="cursor-pointer"></div>
          </div>
        </DialogTrigger>

        <DialogContent className="bg-[#1C71FF]">
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
