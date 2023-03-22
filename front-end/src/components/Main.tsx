import * as React from "react";
import { Component, useState } from "react";
import JDForm from "./JDForm";
import JDAnalysis from "./JDAnalysis";

interface Analysis {
  summary: string;
  questions: string;
}

const Main = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis>({} as Analysis);

  const handleSubmission = (analysis: Analysis) => {
    setIsSubmitted(true);
    setAnalysis(analysis);
  };
  return (
    <>
      <div className="container">
        <h1 className="align-middle">Job Description Analyzer</h1>
      </div>
      <JDForm afterSubmit={handleSubmission} />
      {isSubmitted && <JDAnalysis result={analysis} />}
    </>
  );
};

export default Main;
