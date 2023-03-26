import React, { useEffect, useState } from "react";
import { Row, Col, Tab, Tabs, Card, Container } from "react-bootstrap";
import IAnalysis from "../shared/interfaces/IAnalysis";
interface JDAnalysisProps {
  result: IAnalysis;
}

const JDAnalysis = ({ result }: JDAnalysisProps) => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [summary, setSummary] = useState<string[]>([]);

  useEffect(() => {
    const questionList = result.questions.split("\n");
    const summaryList = result.summary.split(".");
    setSummary(summaryList);
    setQuestions(questionList);
  }, [result]);
  const [key, setKey] = useState("summary");
  return (
    <>
      <Row>
        <Col></Col>
        <Col md={8} className="my-3">
          <div className="title">
            <h3 className="mb-3">Analysis results:</h3>
          </div>
          <Card>
            <Card.Body>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k as string)}
                className="mb-3"
              >
                <Tab eventKey="summary" title="Summary">
                  {summary.map((summary, index) => (
                    <h4 key={index}>{summary}</h4>
                  ))}
                </Tab>
                <Tab eventKey="questions" title="Questions">
                  {questions.map((question, index) => (
                    <h4 key={index}>{question}</h4>
                  ))}
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};
export default JDAnalysis;
