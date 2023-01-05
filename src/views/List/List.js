import { Container, Row } from "react-bootstrap";
import News from "../../Components/News/News";

export default function List() {
  return (
    <Container>
      <Row>
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase"
            style={{
              textShadow: "0 0 5px #005190",
              color: "#ffffff",
              fontWeight: "900",
            }}
          >
            List
          </h1>
          <h2 className="position-absolute text-primary">API Drink List</h2>
        </div>
      </Row>
      <Row>
        <p>
          This list is made from a API Client with API REST/CRUDE method (GET).
        </p>
      </Row>

      <News />
    </Container>
  );
}
