import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import styled, { css } from "styled-components";
//import { PreviewDeck } from "./previewDeck";
import { SubTitle, Info } from "./shared_styles/styled_text";
import { float, move, enterRight, enterLeft } from "./shared_styles/styled_animations";
//import { Container, Container } from "./shared_styles/styled_containers";
import { LoginButton } from "./0auth/LoginButton";
import { PreviewCard } from "./shared_styles/styled_cards";

import { ColorAndTextButton } from "./shared_styles/styled_buttons";





export const StyledSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10vh;
  overflow-x: hidden; 
  @media (min-width: 1400px) {
    gap: 5vh;
  }
`;

export const RowSection = styled.div`
  width: 80%;
  margin:0 auto;
  height: 55vh; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4vh;
  overflow: hidden; 

  ${(props) =>
    props.$head &&
    css`
      height: 96vh; 
      justify-content: flex-start;
      align-items:center;
      margin-bottom:100px;  
    `}
    ${(props) =>
    props.$wide &&
    css`
        justify-content:center;
        align-items:flex-start;
        height: 30vh; 
        max-height:400px;
        margin:0;  
    `}
  

  @media (min-width: 1400px) {
    height: 60vh; 
    ${(props) =>
    props.$head &&
    css`
          margin-top:5vh;
          margin-bottom:0;
          height: 76vh; 
          min-height:960px;
          width:90%;
          overflow: hidden; 
    `}
    ${(props) =>
      props.$wide &&
      css` 
          height: 40vh; 
          margin-top:0;  
    `}    
    }
  } 

  @media (max-width: 600px) {
    margin: 0;
    width: 80%;
    margin:auto;
    height: 140%; 
    flex-direction: column;
    justify-content: "space-between";
    gap: 6.5vh;

    ${(props) =>
    props.$head &&
    css`
        justify-content: center;
        align-items:center;
        margin-bottom: 0;
        height: 100vh; 
        overflow: hidden; 
        gap: 5vh;
      `}
      ${(props) =>
        props.$wide &&
        css` 
            margin-bottom:5vh; 
            gap: 5vh; 
      `}
      ${(props) =>
        props.$girl &&
        css`
          flex-direction:column-reverse 
        `}
  }

`;


export const Container = styled.div`
  width: 50%;
  padding:0;
  height: 100%; 
 

 ${(props) =>
    props.$half &&
    css`
      position:relative;   
  `}Ï
  ${(props) =>
    props.$wide &&
    css`
        width:60%;     
  `}Ï

  ${(props) =>
    props.$floating &&
    css`
    position:relative;
    width:80% !important;
    overflow: hidden !important;   
  `}
  ${(props) =>
    props.$deck &&
    css`
    height:30vh;  
  `}
  ${(props) =>
    props.$headTitle &&
    css`  
    height: auto; 
    display:flex;
    flex-direction:column;
    justify-content:center;  
  `}
 
  

  @media (min-width: 1400px) { 
    height: 100%; 
   
  } 

  @media (max-width: 600px) {
    width: 90%;
    margin:0 auto;
    ${(props) =>
    props.$floating &&
    css`
      height:10px;
      overflow: hidden !important;
     
    `}
    ${(props) =>
      props.$headTitle &&
      css`  
      justify-content:flex-end;  
    `}
    ${(props) =>
      props.$deck &&
      css`
      height:28vh;  
    `}
  
  }
}
`;
export const Elipse = styled.div`
  height: 85%;
  aspect-ratio: 1.1;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  z-index:0;
  filter: blur(11px);

  ${(props) =>
        props.$first &&
        css`
          background: radial-gradient(
            104.23% 81.9% at 14.57% 81.6%,
            #000 0%,
            #15464c 76.56%,
            #33abb9 100%
          );
          bottom:10%;
          left: 30%;
         
  `}
  ${(props) =>
        props.$second &&
        css`
          background: radial-gradient(
            120.56% 99.48% at 9.97% 18.55%,
            #000 0%,
            #15464c 76.56%,
            #33abb9 100%
          );
          bottom:10%;
          left: 30%;

  `}
  ${(props) =>
        props.$third &&
        css`
        background: radial-gradient(
          126.82% 117.33% at 89.46% -9.17%,
          #000 11.78%,
          #15464c 81.45%,
          #33abb9 100%
        );
        bottom: 2%; 
        left: auto;  
       
  `}
  @media (min-width: 1000px) {
    left: 10%;
  }
  @media (max-width: 600px) {
    height:${(props) => (props.$third ? "80%" : "55%")};
    bottom: 10px;
    left: ${(props) => (props.$first ? "auto" : "5%")};
    right:auto; 
  }
 

  
`;

export const Title = styled.h1`
  font-size: 5vw; 
  font-weight: 900;
  width:100%
  margin: 0;
  padding: 0;
  color: #f0f0f0;
  @media (max-width: 600px) {
    font-size: 15vw;
  }
`;
const StyledImage = styled.img`
  aspect-ratio: 0.6;
  height:100%;
  width:auto;
  object-fit: cover;
  position: relative;
  bottom:0;
  right: -5%;
   
  ${(props) =>
    props.$floating &&
    css`
      width: 70%; 
      aspect-ratio: 1.1;
      height:auto;
      position: absolute;
      top: -5%;
      bottom:auto;
      left: 20%;
      right:auto;
      animation: ${enterRight} 1.5s ease-in-out, ${float} 6s ease-in-out infinite, ${move} 6s ease-in-out infinite;
      animation-delay: 0s, 0s, 1.5s;
      mix-blend-mode: lighten; 
      overflow: hidden !important;
    `}
  ${(props) =>
    props.$girl &&
    css`
        aspect-ratio: 0.8;
      `}

    @media (min-width: 1400px) {
      height: 55vh; 
      width:auto;

      ${(props) =>
        props.$floating &&
        css`
            height: 90vh; 
            min-height:900px;
            aspect-ratio: 1.1;
            width:auto;    
            top: -5%;
            bottom:auto;
            left: 30%;
            right:auto;
            object-fit: cover;
      `}
    } 

    @media (max-width: 600px) {
      width: 100%;
      height: auto; 
      ${(props) =>
        props.$floating &&
        css`
            height: 100vh; 
            aspect-ratio: 1.1;
            width:auto;
            overflow:hidden !important;
            top: -5%;
            bottom:auto;
            left: 0;
            right:auto;
     `}
     ${(props) =>
      props.$boy &&
      css`
          width: 80%;
        `}
    }
`;
const DeckPreview = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {}
`;



export const Landing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <StyledSection>
      <RowSection $head>
        <Container $headTitle>
          <Title>
            {/* Unlock Your Freedom with God's <span>Truth</span> */}
            Let God's <span>Truth</span> set you free
          </Title>

        </Container>
        <Container $floating>
          <StyledImage $floating
            src="./brain-with-connecting-dots-500.webp"

            srcSet="./brain-with-connecting-dots-500.webp, ./brain-with-connecting-dots-700.webp 700w, ../brain-with-connecting-dots-1500.webp 1500w"
            alt="brain"
          />
        </Container>
      </RowSection>


      <RowSection $wide >
        <Container $wide >

          <Info >
            Inspired by Craig Groeschel’s transformative book, Winning the War in Your Mind, this website is dedicated to helping you break free from the mental barriers that hold you back from experiencing God’s boundless Love, Peace, and Joy.
          </Info>
          <Info  >
            As Groeschel insightfully notes, "Our lives are always moving in the direction of our strongest thoughts." You can’t live a positive, fulfilling life while harboring negative, toxic thoughts.
          </Info>

          <Info >
            The Good News: We have the power to renew our minds. (Romans 12:2)
          </Info>
        </Container>
      </RowSection>
      <RowSection >
        <Container >
          <SubTitle>Identify What’s Holding You Back</SubTitle>
          <Info>
            Life’s hurts often create mental strongholds that we think are protecting us, but they actually trap us in negative patterns. These strongholds distort our perceptions and prevent us from embracing God's plan for us.
          </Info>
          <Info $wid>
            To overcome these barriers, we first need to identify our strongest strongholds. Understanding what’s holding you back is the first step towards freedom.
          </Info>

        </Container>
        <Container $half >
          <Elipse $first
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          ></Elipse>
          <StyledImage $boy
            src="./man-thinking.webp"
            className="focus"
            alt="man_thinking"
            data-aos="fade-left"
            data-aos-duration="1800"
            data-aos-easing="ease-in-out"
          />
        </Container>
      </RowSection>
      <RowSection $girl>
        <Container $half >
          <Elipse $second
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          ></Elipse>
          <StyledImage $girl
            src="./seriouslooking-attractive-young-woman-searching-something-looking-through-magnifying-glass.webp"
            className="focus"
            alt="womman_searhing"
            data-aos="fade-right"
            data-aos-duration="1800"
            data-aos-easing="ease-in-out"


          />
        </Container>
        <Container >
          <SubTitle>Discover the Truth</SubTitle>
          <Info >
            Every lie you believe has a corresponding truth in God’s Word. His Word is the ultimate weapon to dismantle every deception. Jesus is The Truth that sets us free.
          </Info>
          {/* <Info>
            Use our powerful search feature to find the truth that will dismantle your strongholds and set you on the path to liberation.
          </Info>
          <Info >
            {" "}
            To help you find the truth that demoilsh your stronghold you can use
            our search feature.
          </Info>
          <LoginButton text="Start now" /> */}
        </Container>
      </RowSection>
      <RowSection>
        <Container  >
          <SubTitle>
            Embrace and Repeat the Truth
          </SubTitle>
          <Info>
            It’s natural for the truth to feel foreign at first, especially if you're accustomed to believing the lies. Your brain has formed a path of least resistance towards those distorted thoughts.
          </Info>
          <Info>
            Keep reading and repeating the truth until it becomes your reality. Our Decks feature allows you to create personalized decks that you can revisit anytime during this transformative process.
          </Info>

          <LoginButton text="Start Now" />
        
        </Container>
        <Container $deck $half>
          <Elipse $third
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          ></Elipse>
          <DeckPreview
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">

            <PreviewCard $small />
            <PreviewCard $medium />
            <PreviewCard $big />

          </DeckPreview>

        </Container>
      </RowSection>
      <RowSection $wide $last>
        <Container $wide >
          <Info >
            Start Your Journey Today, Begin the path to a renewed mind and a life full of God's promises. Embrace the truth, break free from mental barriers, and experience the freedom God has in store for you.
          </Info>
        </Container>
      </RowSection>
    </StyledSection>
  );
};
