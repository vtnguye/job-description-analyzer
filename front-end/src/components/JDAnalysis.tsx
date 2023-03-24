import React, { useEffect, useState } from "react";
import { Row, Col, Tab, Tabs, Card } from "react-bootstrap";
import IAnalysis from "../shared/interfaces/IAnalysis";
interface JDAnalysisProps {
  result: IAnalysis;
}

const JDAnalysis = ({ result }: JDAnalysisProps) => {
  const [analysis, setAnalysis] = useState<IAnalysis>(result);
  useEffect(() => {
    setAnalysis(result);
  }, [result]);
  const [key, setKey] = useState("summary");
  return (
    <>
      <Row>
        <Col></Col>
        <Col md={8}>
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
                  <Card.Text>{analysis.summary}</Card.Text>
                </Tab>
                <Tab eventKey="questions" title="Questions">
                  <Card.Text>{analysis.questions}</Card.Text>
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
