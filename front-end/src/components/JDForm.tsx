import { ChangeEvent, Component, useState } from "react";
import React from "react";
import analyzeJobDescription from "../services/JDAnalysisServices";

interface Analysis {
  summary: string;
  questions: string;
}
interface JDFormProps {
  afterSubmit: (analysis: Analysis) => void;
}

const JDForm = ({ afterSubmit }: JDFormProps) => {
  const [jobDescription, setjobDescription] = useState("");
  const [analysis, setAnalysis] = useState<Analysis>({} as Analysis);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setjobDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    analyzeJobDescription(jobDescription).then((data: any) => {
      setAnalysis({ summary: data[0].summary, questions: data[0].questions });
      afterSubmit(analysis);
    });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form-group">
              <label htmlFor="textarea">Your Job Description:</label>
              <textarea
                className="form-control"
                id="textarea"
                value={jobDescription}
                onChange={handleChange}
                placeholder="Paste your text here"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default JDForm;
