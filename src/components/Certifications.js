import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Certifications = () => {
  return (
    <section className="certification" id="certifications">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Certifications</h2>
                  <div className="certification-grid">
                    <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/d475bfe5ee6648919154692460c7b8a7" target="_blank" rel="noopener noreferrer" className="certification-link">
                      <div className="certification-card">
                        <div className="certification-content">
                          <h3>AWS Certified Cloud Practitioner</h3>
                          <p className="certification-issuer">Amazon Web Services</p>
                        </div>
                      </div>
                    </a>
                    <div className="certification-card">
                      <div className="certification-content">
                        <h3>Python for Everybody</h3>
                        <p className="certification-issuer">Coursera</p>
                      </div>
                    </div>
                    <div className="certification-card">
                      <div className="certification-content">
                        <h3>SQL Basics for Data Science</h3>
                        <p className="certification-issuer">Coursera</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  );
}