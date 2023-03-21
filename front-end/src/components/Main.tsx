import * as React from "react";
import { Component, useState } from "react";
import JDForm from "./JDForm";
import JDAnalysis from "./JDAnalysis";

const Main = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmission = () => {
    setIsSubmitted(true);
  };
  return (
    <>
      <div className="container">
        <h1 className="align-middle">Job Description Analyzer</h1>
      </div>
      <JDForm afterSubmit={handleSubmission} />
      {isSubmitted && <JDAnalysis analysis="a" />}
    </>
  );
};

export default Main;
