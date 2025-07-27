import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#AA367C', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4A2FBD', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="40" stroke="url(#grad1)" strokeWidth="8" fill="none">
                <animate attributeName="stroke-dasharray" from="0, 251.2" to="251.2, 0" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="50" y="55" fontFamily="Centra" fontSize="30" fill="white" textAnchor="middle" dy=".3em">S</text>
            </svg>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/surya-s07/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/profile.php?id=100045273542958"><img src={navIcon2} alt="FaceBook" /></a>
              <a href="https://www.instagram.com/__its.me.surya__/?hl=en"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}