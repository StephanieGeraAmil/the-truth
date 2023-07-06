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
    gap: 0%;
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
            Let God's <span>Truth</span> renew your mind & set you free
          </Title>
          <Info $wide>
            Based on Craig Groeschel "Winning the war in your mind" book, this
            website is intended to help you break free from the mental prision
            that is holding you back from experiencing God's Love, Peace and
            Joy.{" "}
          </Info>
          <Info $wide>
            {" "}
            As Groeschel says "Our lives are always moving on the direction of
            pur strongest thoughts" , we can't live a positive and healthy life
            while having a negative and toxic mind.{" "}
          </Info>

          <Info $wide>
            {" "}
            The good news is that we can and should renew our minds (Romans 12)
          </Info>
        </TextContainer>
        <ImgContainer $floating>
          <img src={Brain} alt="brain" />
        </ImgContainer>
      </RowSection>
      <RowSection>
        <TextContainer $wide>
          <SubTitle>Identify what's holding you back</SubTitle>
          <Info $wide>
            {" "}
            When we experience hurt throughout our lives, we tend to develop
            strongholds on our minds to keep us safe from reliving those painful
            feelings.
          </Info>
          <Info $wide>
            {" "}
            While we believe those strongholds are keeping us safe they take
            roots on our brain, the more we think a thought the easier it gets
            to keep on thinking it, so we start to believe it as an absolute
            truth, and let it control our lives. Those strongholds are distorted
            interpretations of what is true, and they keep us away from God and
            from the plan he has for us.
          </Info>
          <Info $wide>
            {" "}
            We can't defeat what we can't define, so the first step is to
            identify our bigest stronghold.
          </Info>
        </TextContainer>
        <ImgContainer $first>
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
        <ImgContainer $middle>
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
          <SubTitle>Name the Truth</SubTitle>
          <Info $wide>
            Each lie we believe has a truth that exposes it. That Truth is in
            God's word.
          </Info>
          <Info $wide>
            God's word is the weapon we have given to demolish all deceptions
            from the enemy. Jesus is The Truth that will set us free.
          </Info>
          <Info $wide>
            {" "}
            To help you find the truth that demoilsh your stronghold you can use
            our search feature.
          </Info>
          <ColorAndTextButton $wide $short $margin>
            Search
          </ColorAndTextButton>
        </TextContainer>
      </RowSection>
      <RowSection>
        <TextContainer $wide>
          <SubTitle>Say it until you think it</SubTitle>
          <Info $wide>
            It's normal that at the begining the truth sounds more like a lie
            than the actual lie,that's because you are used to believe it.
          </Info>
          <Info $wide>
            {" "}
            Your brain have formed a neuropathway ( a path of less resistance)
            towards that distorted interpretation of reality.
          </Info>
          <Info $wide>
            {" "}
            You will need to read and repeat the truth to yourself once and
            again until you are able to actualy believe it. On the Decks feature
            you Create decks that you can revisit as much as you need during
            that process.
          </Info>

          <ColorAndTextButton $wide $short $margin>
            Create Deck
          </ColorAndTextButton>
        </TextContainer>
        <ImgContainer $last>
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
