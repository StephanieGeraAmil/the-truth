import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styled, { css } from "styled-components";
// import { LandingHero } from "./landingHero";
import { PreviewDeck } from "./previewDeck";
import { Title, SubTitle, Info } from "./shared_styles/styled_text";
import { TextContainer, ImgContainer } from "./shared_styles/styled_containers";

import { StyledButton } from "./shared_styles/styled_buttons";
// import Brain from "../assets/3d-brain-removebg-preview.webp";
 import Brain from "../assets/brain-with-connecting-dots.webp";
import Man from "../assets/thoughtful-man-with-hand-his-chin.webp";
import Woman from "../assets/woman-searching-something-looking-through-magnifying-glass-white.webp";
import ElipseReflect from "../assets/Ellipse 9.png";
import ElipseSearch from "../assets/Ellipse 9.png";
import ElipseDeck from "../assets/Ellipse 9.png";

const RowSection = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;
  align-items: flex-end;
  ${(props) =>
    props.large &&
    css`
      height: 80%;
    `}
`;
const StyledSection = styled.div`
  width: 100%;
  height: 300%;
  margin: auto 0;
  margin-top: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15%;
  align-items: center;
  /* 
  @media (max-width: 1080px) and (min-height: 550px) {
    width: 90%;
    height: 145%;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 650px) {
    height: 110%;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 2%;
  }

  @media (max-width: 1800px) and (min-height: 1000px) {
    width: 100%;
    height: 150%;
  } */
`;

export const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <StyledSection>
      {/* <LandingHero /> */}
      <RowSection $large>
        <TextContainer>
          <Title>
            Focus on <span>the Truth</span> & be free
          </Title>
          <Info $wide>
            our brains automate behaivior based on what we learned from our past
            experiences , the rewards and punishments we got over time. Chances
            are that your brain keeps going back to some thoughts that are
            harmful and untrue ,lets call them th lies we live by
          </Info>
        </TextContainer>
        <ImgContainer $wide $floating>
          <img src={Brain} alt="brain" />
        </ImgContainer>
      </RowSection>
      <RowSection>
        <TextContainer $wide>
          <SubTitle >Detect the hurtful pathways your brain have</SubTitle>
          <Info $wide>
            our brains automate behaivior based on what we learned from our past
            experiences , the rewards and punishments we got over time. Chances
          </Info>
        </TextContainer>
        <ImgContainer>
          <img
            src={ElipseReflect}
            alt="gradiant_elipse"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <img
            src={Man}
            className="focus"
            alt="man_thinking"
            data-aos="fade-left"
            data-aos-duration="1800"
            data-aos-easing="ease-in-out"
          />
        </ImgContainer>
      </RowSection>
      <RowSection>
        <ImgContainer>
          <img
            src={ElipseSearch}
            alt="gradiant_elipse"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <img
            src={Woman}
            className="focus"
            alt="womman_searhing"
            data-aos="fade-right"
            data-aos-duration="1800"
            data-aos-easing="ease-in-out"
          />
        </ImgContainer>
        <TextContainer>
          <SubTitle>Search for the truth </SubTitle>
          <Info $wide>
            our brains automate behaivior based on what we learned from our past
            experiences , the rewards and punishments we got over time. Chances
          </Info>
          <StyledButton>Search</StyledButton>
        </TextContainer>
      </RowSection>
      <RowSection>
        <TextContainer $wide>
          <SubTitle>Create decks that you can revisit</SubTitle>
          <Info $wide>
            our brains automate behaivior based on what we learned from our past
            experiences , the rewards and punishments we got over time. Chances
          </Info>

          <StyledButton>Create Deck</StyledButton>
        </TextContainer>
        <ImgContainer>
          <img src={ElipseDeck} alt="gradiant_elipse" data-aos="fade-left" />
          <PreviewDeck />
        </ImgContainer>
      </RowSection>
    </StyledSection>
  );
};
