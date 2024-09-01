import React from "react";
import ResultsHero from "../components/results/ResultsHero";
import Navbar from "../components/results/Navbar";
import SubmissionsSec from "../components/results/SubmissionsSec";

const Page = () => {
  return (
    <>
      <Navbar />
      <ResultsHero />
      <SubmissionsSec/>
    </>
  );
};

export default Page;
