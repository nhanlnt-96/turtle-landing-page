import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import RoadmapDetail from '../../assets/imgs/roadmapDetail.png';

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp page-bg d-flex flex-column justify-content-center align-items-center">
      <Container className="roadmap-comp-container">
        <div
          className="roadmap-comp-content comp-margin-top d-flex flex-column justify-content-center align-items-center">
          <Row className="roadmap-comp-title">
            <TitleComp title={'Roadmap'}
                       subtitle={`Space Turtles is a full-time project and it will continue to be following the public sale. Below is what we're working towards in the short term.`}/>
          </Row>
          <Row className="roadmap-comp-content-items">
            <p className="roadmap-subtitle">Future developments will be announced in Roadmap 2.0.</p>
            <div className="roadmap-item-detail">
              <img src={RoadmapDetail} alt="roadmap"/>
              <div data-aos="fade-up" className="roadmap-start">
                <div className="zoom-out">
                  <h6 className="title">START</h6>
                  <p className="subtitle">The Roadmap is divided into 9 parts which are 10% each.</p>
                  <span className="desc">Most of the flags are placed in the Turtlemint (presale) where we as creators guarantee that if you get one of them that we will happily rebuy the art for 1 ETH. But if you decide to hold the same art until we reach the end of the 10% of the roadmap then you will be guaranteed 1.2 ETH if resold to us. And all the members holding 3 random SpaceTurtles at the end of the Turtlemint will be in our giveaway where we airdrop 20 Space Turtles.</span>
                </div>
                <div className="not-zoom">
                  <h6 className="title">START</h6>
                  <p className="subtitle">The Roadmap is divided into 9 parts which are 10% each.</p>
                </div>
              </div>
              <div data-aos="fade-down" className="roadmap-10">
                <div className="not-zoom">
                  <h6 className="title">10% REACHED</h6>
                </div>
                <div className="zoom-out">
                  <h6 className="title">10% REACHED</h6>
                  <span className="desc">The rares without flags are increased and half of the US state flags are in this part of the roadmap, so if you're good at math then you know that there is a great chance of getting one! At the end of this part of the road map we will as previously offer 1.2 ETH for every US state flag as there are not many of them. And as previously If you wish to HODL the artwork with the flag it will be rebought for 1.5 ETH by the creators when we reach 20% of the roadmap. We finish the round with a giveaway of 20 SpaceTurtles to members holding 3 SpaceTurtles. (Those holding Space Turtles from the first round have a greater chance of receiving the giveaway airdrop).</span>
                </div>
              </div>
              <div data-aos="fade-up" className="roadmap-20">
                <div className="zoom-out">
                  <h6 className="title">20% REACHED</h6>
                  <span className="desc">We will use our community wallet to promote the project and do certain promotions which we cannot yet disclose but those have been confirmed and agreed on verbally between the lawyers handling it and this will skyrocket the project and this is our biggest confidence that the project will go to the moon. Meanwhile, we continue our journey we start this round by doing a giveaway of 20 Space Turtles to those holding 5 SpaceTurtles in total and 10 of those in the giveaway will be rare, not a bad way to start the round. Other SpaceTurtles with flags are of course in this round as well and after the giveaway, we will reveal the exact amount left in this round and give you a sneak peek.</span>
                </div>
                <div className="not-zoom">
                  <h6 className="title">20% REACHED</h6>
                </div>
              </div>
              <div data-aos="fade-down" className="roadmap-30">
                <div className="not-zoom">
                  <h6 className="title">30% REACHED</h6>
                </div>
                <div className="zoom-out">
                  <h6 className="title">30% REACHED</h6>
                  <span className="desc">When we reach 30% we will further engage ourselves in an indebt promotion whilst waiting to finalize the papers for the promotion we already have a verbal agreement to. And we start this round by an airdrop giveaway of 20 Turtles which contains 2 super rare SpaceTurtles with flags that we as the owners will rebuy for 1.5 ETH at the spot, but since we've come this far that would be a cheap price to get it for but that's our offer guaranteed. And only those who hold a total of 10 SpaceTurtles will be given a spot in the airdrop giveaway.</span>
                </div>
              </div>
              <div data-aos="fade-up" className="roadmap-40">
                <div className="zoom-out">
                  <h6 className="title">40% REACHED</h6>
                  <span className="desc">Wow almost halfway, here is where we've put the second part of the US state flags, so imagine the chance of getting one! There is a total of 25 flags and a lot of rares in this collection. And after we have reached halfway to 50% we will reveal the amount of rares left. And at the end of the round, we will be doing another airdrop giveaway of  20 Space Turtles containing 5 SpaceTurtles with national flags! And this giveaway will only be to those HODLing a SpaceTurtles art with a flag.</span>
                </div>
                <div className="not-zoom">
                  <h6 className="title">40% REACHED</h6>
                </div>
              </div>
              <div data-aos="fade-up" className="roadmap-50">
                <div className="zoom-out">
                  <h6 className="title">50% REACHED</h6>
                  <span className="desc">BIG BANG! This will blow your mind, we are going to the moon! Why? You will understand because this is where we launch our Roadmap 2.0 and our partnerships are revealed and the SpaceTurtles community becomes something very special. At this point it already is, but now that we have passed all the known planets, let's enjoy the ride through the galaxy with a more powerful spaceship that will take us further into the galaxy, and when we look down all we see is those who missed this journey. Suckers.</span>
                </div>
                <div className="not-zoom">
                  <h6 className="title">50% REACHED</h6>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default RoadmapComp;