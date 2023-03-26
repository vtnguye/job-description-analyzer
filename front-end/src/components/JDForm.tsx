import { ChangeEvent, useEffect, useState } from "react";
import React from "react";
import analyzeJobDescription from "../services/JDAnalysisServices";
import { Row, Col, Form, Button, Card, Container } from "react-bootstrap";
import IAnalysis from "../shared/interfaces/IAnalysis";
import Square from "../shared/decor/Squares";

interface JDFormProps {
  afterSubmit: (analysis: IAnalysis) => void;
}

const JDForm = ({ afterSubmit }: JDFormProps) => {
  const [jobDescription, setjobDescription] = useState("");
  const [analysis, setAnalysis] = useState<IAnalysis>({} as IAnalysis);
  useEffect(() => {
    if (analysis.summary && analysis.questions) {
      afterSubmit(analysis);
    }
  }, [analysis, afterSubmit]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setjobDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    analyzeJobDescription(jobDescription).then((data: any) => {
      const updatedAnalysis = {
        summary: data[0].summary,
        questions: data[0].questions,
      };
      setAnalysis(updatedAnalysis);
    });
  };
  return (
    <>
      <Square />
      <Row>
        <Col></Col>
        <Col md={8}>
          <div className="title">
            <h3 className="mb-3">Job Descriptions</h3>
          </div>
          <Card>
            <Card.Body>
              <Form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <Form.Group controlId="formJD">
                  <Form.Control
                    as="textarea"
                    value={jobDescription}
                    onChange={handleChange}
                    placeholder="Paste your job description here"
                    rows={8}
                  />
                </Form.Group>
                <Button className="mt-5" type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default JDForm;
