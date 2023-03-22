import React from "react";

interface JDAnalysisProps {
  result: Analysis;
}

interface Analysis {
  summary: string;
  questions: string;
}
const JDAnalysis = ({ result }: JDAnalysisProps) => {
  console.log(result);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Analysis results:</h2>
          <pre>{result.questions}</pre>
        </div>
      </div>
    </div>
  );
};
export default JDAnalysis;
