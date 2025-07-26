import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "eCommerce Website",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://masssurya.neocities.org/shopping/app"
    },
    {
      title: "Weather Web App",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://lustrous-speculoos-230e01.netlify.app/"
    },
    {
      title: "Password Generator",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://idyllic-dasik-eba07f.netlify.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I've worked on.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Designed an Ecommerce Website using HTML, CSS, and JavaScript, enhancing user experience and engagement. Implemented responsive design for seamless browsing across devices. Created dynamic product pages with interactive elements and real-time updates. Leveraged API Gateway to facilitate smooth inter-component communication and crafted a user-friendly frontend.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>As a Technical Support Executive at Star Health and Allied Insurance Co. Ltd. from January 2024 to June 2025, I provided Level 1 technical support for system and application issues. I troubleshot hardware, software, and network problems and resolved internal technical issues within SLA timelines to ensure smooth system operations. Additionally, I documented all support requests, solutions, and follow-up actions.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}