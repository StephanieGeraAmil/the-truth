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
  width: 70%;
  height:90vw;
  min-height: 400px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: flex-start;
  gap: 2%;
  position: relative;
  margin-bottom:5vw;

  ${(props) =>
    props.$large &&
    css`
      height: 150vw;
      min-height:700px;
      justify-content: flex-start;
      margin-bottom:0px;
   `}
  ${(props) =>
    props.$wide &&
    css`
      width: 70%;
      min-height: 200px;
    `}
  ${(props) =>
    props.$extra_wide &&
    css`
      width: 100%;
      min-height: 200px;
    `}
    ${(props) =>
      props.$head &&
      css`
        width: 100%;
        min-height: 700px;
        height: 150vw;
        justify-content: flex-start;
        margin-bottom:0px;
      `}
  @media (max-width: 550px) {
    
     margin:0;
  
      width:95%;
      min-height:700px;
      flex-direction: column;
      justify-content: ${(props) => (props.$large ? "center" : "space-between")};
      gap: 0%;
      ${(props) =>
        props.$wide &&
        css`
          height: 150px;
          min-height:150px;  `}
          ${(props) =>
            props.$head &&
            css`
           
              justify-content: center;
           
            `}
        
    }


`;



// @media (max-width: 1800px) {
//   width: ${(props) => (props.$large ? "100%" : "70%")};
//   background-color:green;
// }
// @media (min-aspect-ratio: 1.4) {
//   height: ${(props) => (props.$large ? "140vw" : "100vw")};
//   background-color:yellow;
// }
// @media (max-width: 1300px) {
//   width: ${(props) => (props.$large ? "100%" : "80%")};
//   background-color:blue;
// }
// @media (max-width: 900px) {
//   height: ${(props) => (props.$large ? "130vw" : "90vw")};
//   background-color:orange;
//   flex-direction: column;
//   justify-content: ${(props) => (props.$large ? "center" : "space-between")};
//   gap: 0%;
// }
// @media (max-width: 550px) {
//   gap: 5%;
//   width: 100%;
//   align-items: flex-start;
//   height: ${(props) => (props.$large ? "100vh" : "80vh")};
// }



const StyledSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4vw;
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
      <RowSection  $head>
        <TextContainer $head>
          <Title>
            {/* Unlock Your Freedom with God's <span>Truth</span> */}
            Let God's <span>Truth</span> set you free
          </Title>
          {/* <Info $wide>
            Inspired by Craig Groeschel’s transformative book, Winning the War in Your Mind, this website is dedicated to helping you break free from the mental barriers that hold you back from experiencing God’s boundless Love, Peace, and Joy.
          </Info>
          <Info $wide>
            As Groeschel insightfully notes, "Our lives are always moving in the direction of our strongest thoughts." You can’t live a positive, fulfilling life while harboring negative, toxic thoughts.
          </Info>

          <Info $wide>
            {" "}
            The Good News: We have the power to renew our minds. (Romans 12:2)
          </Info> */}
        </TextContainer>

      </RowSection>
      <ImgContainer $floating>
        <img
          src="./brain-with-connecting-dots-500.webp"

          srcSet="./brain-with-connecting-dots-500.webp, ./brain-with-connecting-dots-700.webp 700w, ../brain-with-connecting-dots-1500.webp 1500w"
          alt="brain"
        />
      </ImgContainer>
      <RowSection $wide>
        <TextContainer $all>

          <Info $wide $bold >
            Inspired by Craig Groeschel’s transformative book, Winning the War in Your Mind, this website is dedicated to helping you break free from the mental barriers that hold you back from experiencing God’s boundless Love, Peace, and Joy.
          </Info>
          <Info $wide $bold >
            As Groeschel insightfully notes, "Our lives are always moving in the direction of our strongest thoughts." You can’t live a positive, fulfilling life while harboring negative, toxic thoughts.
          </Info>

          <Info $wide $bold >
            The Good News: We have the power to renew our minds. (Romans 12:2)
          </Info>
        </TextContainer>
      </RowSection>
      <RowSection >
        <TextContainer $wide>
          <SubTitle>Identify What’s Holding You Back</SubTitle>
          <Info $wide>
            Life’s hurts often create mental strongholds that we think are protecting us, but they actually trap us in negative patterns. These strongholds distort our perceptions and prevent us from embracing God's plan for us.
          </Info>
          <Info $wide>
            To overcome these barriers, we first need to identify our strongest strongholds. Understanding what’s holding you back is the first step towards freedom.
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
          <SubTitle>Discover the Truth</SubTitle>
          <Info $wide>
            Every lie you believe has a corresponding truth in God’s Word. His Word is the ultimate weapon to dismantle every deception. Jesus is The Truth that sets us free.
          </Info>
          <Info $wide>
            Use our powerful search feature to find the truth that will dismantle your strongholds and set you on the path to liberation.
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
      <RowSection>
        <TextContainer $wide>
          <SubTitle>
            Embrace and Repeat the Truth
          </SubTitle>
          <Info $wide>
            It’s natural for the truth to feel foreign at first, especially if you're accustomed to believing the lies. Your brain has formed a path of least resistance towards those distorted thoughts.
          </Info>
          <Info $wide>
            Keep reading and repeating the truth until it becomes your reality. Our Decks feature allows you to create personalized decks that you can revisit anytime during this transformative process.
          </Info>



          <LoginButton text="Start Now" />
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
      <RowSection $wide>
        <TextContainer $all $last>
          <Info $wide $bold>
            Start Your Journey Today, Begin the path to a renewed mind and a life full of God's promises. Embrace the truth, break free from mental barriers, and experience the freedom God has in store for you.
          </Info>
        </TextContainer>
      </RowSection>
    </StyledSection>
  );
};
