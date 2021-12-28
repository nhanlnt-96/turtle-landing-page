import React from 'react';
import {Container, Row} from "react-bootstrap";
import HomepageComp from "../../components/homepage/HomepageComp";
import AboutComp from "../../components/about/AboutComp";
// import DaoComp from "../../components/dao/DaoComp";
import RoadmapComp from "../../components/roadmap/RoadmapComp";
import TeamComp from "../../components/team/TeamComp";
import FAQsComp from "../../components/faqs/FAQsComp";
import FooterComp from "../../components/footer/FooterComp";
import SlideShow from "../../components/slideShow/SlideShow";

const MainLayout = () => {
  return (
    <Container fluid>
      <Row id="home">
        <HomepageComp/>
      </Row>
      <Row>
        <SlideShow/>
      </Row>
      <Row id="about">
        <AboutComp/>
      </Row>
      {/*<Row id="dao">*/}
      {/*  <DaoComp/>*/}
      {/*</Row>*/}
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row id="faqs">
        <FAQsComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
      <Row>
        <FooterComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;