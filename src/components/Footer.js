import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import phoneIcon from "../assets/img/phon.svg";
import email from "../assets/img/email.svg";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer py-4 bg-dark text-white">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h1 className="header">Godwin</h1>
          </Col>
          
          <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-3 mb-md-0">
            <div className="d-flex align-items-center ">
              
              <p className="mb-0">Copyright {year}. All Rights Reserved</p>
            </div>
          </Col>
          
          <Col xs={12} md={4} className="text-center text-md-end">
            <div className="social-icon mb-2">
              <a href="https://www.linkedin.com/in/godwin-peter-b1279a220/">
                <img src={navIcon1} alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
