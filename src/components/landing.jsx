import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styled, { css } from "styled-components";
import { PreviewDeck } from "./previewDeck";
import { Title, SubTitle, Info } from "./shared_styles/styled_text";
import { TextContainer, ImgContainer } from "./shared_styles/styled_containers";

import { ColorAndTextButton } from "./shared_styles/styled_buttons";
import Brain from "../assets/brain-with-connecting-dots.webp";
import Man from "../assets/thoughtful-man-with-hand-his-chin.webp";
import Woman from "../assets/woman-searching-something-looking-through-magnifying-glass-white.webp";

const RowSection = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2%;
  position: relative;
  ${(props) =>
    props.$large &&
    css`
      width: 100%;
      margin-bottom: 0;
      height: 30%;
      min-height: 85vh;
      justify-content: flex-start;

      @media (min-aspect-ratio: 1) {
        height: 65%;
      }

      @media (min-aspect-ratio: 1.4) {
        height: 80%;
      }
      @media (min-aspect-ratio: 1.8) {
        height: 100%;
      }

      @media (max-width: 850px) {
        height: 80%;
      }

      @media (max-width: 700px) {
        height: 100%;
      }
  `}
  @media (max-width: 1500px) {
    width: 70%;

    ${(props) =>
      props.$large &&
      css`
        width: 100%;
      `}
  }
  @media (max-width: 1300px) {
    width: 80%;
    ${(props) =>
      props.$large &&
      css`
        width: 100%;
      `}
  }
  @media (max-width: 550px) {
    gap:0%;
        width: 95%;
    height: 20%;
      flex-direction: column;
    ${(props) =>
      props.$large &&
      css`
        width: 100%;
      `}
  }
`;
const StyledSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4%;
  @media (max-width: 550px) {
    gap: 3%;
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
          <SubTitle>Detect the hurtful pathways</SubTitle>
          <Info $wide>
            our brains automate behaivior based on what we learned from our past
            experiences , the rewards and punishments we got over time. Chances
          </Info>
        </TextContainer>
        <ImgContainer $first >
          <div
            className="elipse"
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
        <ImgContainer $middle >
          <div
            className="elipse"
            data-aos="fade-right"
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
        <TextContainer $wide>
          <SubTitle>Search for the truth </SubTitle>
          <Info $wide>
            our brains automate behaivior based on what we learned from our past
            experiences , the rewards and punishments we got over time. Chances
          </Info>
          <ColorAndTextButton $wide $short $margin>
            Search
          </ColorAndTextButton>
        </TextContainer>
      </RowSection>
      <RowSection>
        <TextContainer $wide>
          <SubTitle>Create decks that you can revisit</SubTitle>
          <Info $wide>
            our brains automate behaivior based on what we learned from our past
            experiences , the rewards and punishments we got over time. Chances
          </Info>

          <ColorAndTextButton $wide $short $margin>
            Create Deck
          </ColorAndTextButton>
        </TextContainer>
        <ImgContainer $last  >
          <div
            className="elipse"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          ></div>
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
