import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const CurrentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>ProShop &copy; {CurrentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
