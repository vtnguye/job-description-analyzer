import { Container } from "react-bootstrap";
import Square from "../shared/decor/Squares";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <Square />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Job Descriptions Analyzer</h1>
          <h3 className="d-none d-sm-block">
            Prepare you for your next job interview
          </h3>
        </div>
      </Container>
    </div>
  );
}
