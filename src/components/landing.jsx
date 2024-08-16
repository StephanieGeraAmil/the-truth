import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import styled, { css } from "styled-components";
import { PreviewDeck } from "./previewDeck";
import { Title, SubTitle, Info } from "./shared_styles/styled_text";
import { TextContainer, ImgContainer } from "./shared_styles/styled_containers";
import { LoginButton } from "./0auth/LoginButton";

import { ColorAndTextButton } from "./shared_styles/styled_buttons";

const RowSection = styled.div`
  width: ${(props) => (props.$large ? "100%" : "50%")};
  height: ${(props) => (props.$large ? "100vh" : "40vh")};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.$large ? "flex-start" : "space-between"};
  align-items: ${(props) => (props.$last ? "flex-end" : "flex-start")};
  gap: 2%;
  position: relative;
  @media (min-aspect-ratio: 1.4) {
    height: ${(props) => (props.$large ? "140vh" : "40vh")};
  }
  @media (max-width: 1800px) {
    width: ${(props) => (props.$large ? "100%" : "70%")};
  }
  @media (max-width: 1300px) {
    width: ${(props) => (props.$large ? "100%" : "80%")};
  }
  @media (max-width: 900px) {
    height: ${(props) => (props.$large ? "130vh" : "90vh")};
    flex-direction: column;
    justify-content: ${(props) => (props.$large ? "center" : "space-between")};
    gap: 0%;
  }
  @media (max-width: 550px) {
    gap: 5%;
    width: 100%;
    align-items: flex-start;
    height: ${(props) => (props.$large ? "100vh" : "80vh")};
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
  @media (min-width: 1400px) {
    gap: 0%;
  }
  @media (max-width: 550px) {
    gap: 0%;
  }
`;

export const Landing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <StyledSection>
      <RowSection $large>
        <TextContainer $head>
          <Title>
            Let God's <span>Truth</span> set you free
          </Title>
          <Info $wide>
            Based on Craig Groeschel book "Winning the war in your mind" , this
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
          <img
            src="./brain-with-connecting-dots-500.webp"

           srcSet="./brain-with-connecting-dots-500.webp, ./brain-with-connecting-dots-700.webp 700w, ../brain-with-connecting-dots-1500.webp 1500w"
            alt="brain"
          />
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
            src="./thoughtful-man-with-hand-his-chin-500.webp"
            className="focus"
            alt="man_thinking"
            data-aos="fade-left"
            data-aos-duration="1800"
            data-aos-easing="ease-in-out"
            srcSet="./thoughtful-man-with-hand-his-chin-500.webp, ./thoughtful-man-with-hand-his-chin-700.webp 700w, ./thoughtful-man-with-hand-his-chin-1500.webp 1500w"
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
            src="./woman-searching-something-looking-through-magnifying-glass-white-500.webp"
            className="focus"
            alt="womman_searhing"
            data-aos="fade-right"
            data-aos-duration="1800"
            data-aos-easing="ease-in-out"
            srcSet="./woman-searching-something-looking-through-magnifying-glass-white-500.webp, ./woman-searching-something-looking-through-magnifying-glass-white-700.webp 700w,./woman-searching-something-looking-through-magnifying-glass-white-1500.webp 1500w"
       
          />
        </ImgContainer>
        <TextContainer $wide>
          <SubTitle>Find the Truth</SubTitle>
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
          {/* <ColorAndTextButton
            $wide
            $short
            $margin
            onClick={() => navigate("/search")}
          >
            Search
          </ColorAndTextButton> */}
            <LoginButton text="Start now" />
        </TextContainer>
      </RowSection>
      <RowSection $last>
        <TextContainer $wide>
          <SubTitle>
            Repeat that truth to yourself until you believe it
          </SubTitle>
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
  <LoginButton text="Start now" />
          {/* <ColorAndTextButton
            $wide
            $short
            $margin
            onClick={() => navigate("/decks")}
          >
            Create Deck
          </ColorAndTextButton> */}
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
