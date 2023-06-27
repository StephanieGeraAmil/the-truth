import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styled, { css } from "styled-components";
import { PreviewDeck } from "./previewDeck";
import { Title, SubTitle, Info } from "./shared_styles/styled_text";
import { TextContainer, ImgContainer } from "./shared_styles/styled_containers";

import { StyledButton } from "./shared_styles/styled_buttons";
import Brain from "../assets/brain-with-connecting-dots.webp";
import Man from "../assets/thoughtful-man-with-hand-his-chin.webp";
import Woman from "../assets/woman-searching-something-looking-through-magnifying-glass-white.webp";


const RowSection = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 2%;
  position: relative;
  ${(props) =>
    props.$large &&
    css`
      height: 40%;
      min-height: 85vh;
      justify-content: flex-start;
      @media (min-aspect-ratio: 1/2) {
        height: 55%;
      }
    `}
  @media (max-width: 550px) {
    margin-left: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0;
  }
`;
const StyledSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
  @media (max-width: 550px) {
    gap: 0;
  }
`;

export const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <StyledSection>
      <RowSection $large>
        <TextContainer $head>
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
        <ImgContainer $floating>
          <img src={Brain} alt="brain" />
        </ImgContainer>
      </RowSection>
      <RowSection>
        <TextContainer $wide>
          <SubTitle>Detect the hurtful pathways your brain have</SubTitle>
          <Info $wide>
            our brains automate behaivior based on what we learned from our past
            experiences , the rewards and punishments we got over time. Chances
          </Info>
        </TextContainer>
        <ImgContainer $closer>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          ></div>
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
        <ImgContainer $last $closer>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          ></div>
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
          <PreviewDeck
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
        </ImgContainer>
      </RowSection>
    </StyledSection>
  );
};
