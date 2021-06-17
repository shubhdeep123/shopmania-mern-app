import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Shop Mania</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
