import * as React from "react";
import { useEffect, useState } from "react";
import JDAnalysis from "./components/JDAnalysis";
import JDForm from "./components/JDForm";
import PageHeader from "./components/PageHeader";
import IAnalysis from "./shared/interfaces/IAnalysis";
import "./App.css";
import { Container } from "react-bootstrap";

const App = () => {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  const [analysis, setAnalysis] = useState<IAnalysis>({} as IAnalysis);

  const handleSubmission = (analysis: IAnalysis) => {
    setAnalysis(analysis);
  };
  return (
    <>
      <PageHeader />
      <Container fluid className="main">
        <JDForm afterSubmit={handleSubmission} />
        {Object.keys(analysis).length > 0 && <JDAnalysis result={analysis} />}
      </Container>
    </>
  );
};

export default App;
