import React from "react";
interface JDAnalysisProps {
  analysis: string;
}
const JDAnalysis = ({ analysis }: JDAnalysisProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Analysis results:</h2>
          <pre>{analysis}</pre>
        </div>
      </div>
    </div>
  );
};
export default JDAnalysis;
