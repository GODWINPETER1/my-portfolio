import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/nike.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Nike Landing Page",
      description: "Responsive react js website",
      imgUrl: projImg2,
      link: "https://nike-landing-page-3v7u99jdl-godwin-peters-projects.vercel.app/"
    },
    {
      title: "Coffee Shop ",
      description: "Responsive react js and bootstrap website",
      imgUrl: projImg2,
      link: "https://velvety-lebkuchen-52708b.netlify.app"
    },
    {
      title: "Client Website",
      description: "Design & Development Using Drupal",
      imgUrl: projImg3,
      link: "https://www.pressconn.co.tz/"
    },
    {
      title: "Tourism Website",
      description: "Design & Development using React , Typescript and Vite",
      imgUrl: projImg2,
      link: "https://toursim-website-lkpa.vercel.app/"
    },
    {
      title: "Ai-landing Page",
      description: "Design & Development using React , vite and Tailwind",
      imgUrl: projImg2,
      link: "https://ai-landing-page-gilt.vercel.app/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://nike-landing-page-3v7u99jdl-godwin-peters-projects.vercel.app/"
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
                <p>
                    In this section, I showcase some of the projects I've worked on, each representing a unique
                    challenge and learning opportunity. From designing user-friendly interfaces to building robust
                    backend systems, these projects highlight my skills in problem-solving, creativity, and technical
                    expertise. Each card provides a glimpse into the tools, technologies, and processes I used, along with
                    the impact and outcomes achieved. Feel free to explore and get a closer look at how i bring ideas to life!
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"> Project Section One </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project Section Two </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"> Project Section Three </Nav.Link>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
