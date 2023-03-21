import { ChangeEvent, Component, useState } from "react";
import React from "react";

interface JDFormProps {
  afterSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const JDForm = ({ afterSubmit }: JDFormProps) => {
  const [jobDescription, setjobDescription] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setjobDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(jobDescription);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              afterSubmit(e);
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
