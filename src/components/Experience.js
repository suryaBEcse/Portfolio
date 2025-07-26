import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <div className="experience-timeline">
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h3>Technical Support Executive</h3>
                        <p className="experience-subheading">Star Health and Allied Insurance Co. Ltd. | Jan 2024 - Jun 2025</p>
                        <ul>
                          <li>Provided Level 1 technical support for system and application issues.</li>
                          <li>Troubleshot basic hardware, software, and network connectivity problems.</li>
                          <li>Resolved internal technical issues within SLA timelines to ensure smooth operations.</li>
                          <li>Documented all support requests, solutions, and follow-up actions.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}