import * as React from "react";
import { Component, useState } from "react";
import JDForm from "./JDForm";
import Summary from "./Summary";

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
      {isSubmitted && <Summary />}
    </>
  );
};

export default Main;
