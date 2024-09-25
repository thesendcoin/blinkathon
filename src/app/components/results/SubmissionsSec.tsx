"use client";

import React, { useEffect, useState } from "react";
import TracksBottomBG from "@/assets/svgs/bgs/TracksBottomBG.svg";
import TracksTopBG from "@/assets/svgs/bgs/TracksTopBG.svg";
import Image from "next/image";
import SubmissionPreview from "@/app/components/submissions/SubmissionPreview";
import axios from "axios";

const SubmissionsSec = () => {
  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {
    const res = await axios.get("/api/results");
    setSubmissions(res?.data?.data);
    console.log(res?.data);
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);
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

        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* <div className="grid grid-cols-3 gap-8"> */}
          {submissions &&
            submissions?.map((submission: any, index) => (
              <SubmissionPreview
                key={index}
                propBlinkPreviewUrl={""}
                propActionApiUrl={submission?.blink}
                propPfpUrl={""}
                propTgHandle={`@${submission?.telegram}`}
                propBlinkUrl={submission?.github}
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
    </>
  );
};

export default SubmissionsSec;
