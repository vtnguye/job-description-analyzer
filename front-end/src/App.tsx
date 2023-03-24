import * as React from "react";
import { useEffect, useState } from "react";
import JDAnalysis from "./components/JDAnalysis";
import JDForm from "./components/JDForm";
import PageHeader from "./components/PageHeader";
import IAnalysis from "./shared/interfaces/IAnalysis";

const App = () => {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [analysis, setAnalysis] = useState<IAnalysis>({} as IAnalysis);
  const [showGreeting, setShowGreeting] = useState(true);

  const handleSubmission = (analysis: IAnalysis) => {
    setIsSubmitted(true);
    setAnalysis(analysis);
  };
  return (
    <>
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <JDForm afterSubmit={handleSubmission} />
          {isSubmitted && <JDAnalysis result={analysis} />}
        </div>
      </div>
    </>
  );
};

export default App;
