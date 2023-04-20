import styled from "styled-components";
export const Title = styled.h1`
  font-size: 3.5vw;
  font-weight: 900;
  height: 10vw;
  margin: 1vw;
  color: #fff;
  @media (max-width: 500px) {

    font-size: 3em;
    height: 34vh;
  }
    @media (max-width: 390px) {
    font-size: 2.8em;
   
  }
   @media (max-width: 355px) {
    font-size: 2.6em;
   
  }
`;
export const SubTitle = styled.h3`
  font-size: 1.5vw;
  font-weight: 500;
  height: 2vw;
  margin: 0.8vw;
  color: #fff;
  @media (max-width: 500px) {
    font-size: 1.3em;
    height: 8vh;
  }
  @media (max-width: 407px) {
    font-size: 1.1em;
     height: 6vh;
   
  }
`;
export const Info = styled.p`
  font-size: clamp(0.45em, 0.9vw, 2.5em);
  line-height: clamp(1em, 1vw, 1.2em);
  font-weight: 100;
  margin: 0;
  padding-left: 0.5vw;
  color: #fff;
  @media (max-width: 500px) {
    font-size: 0.9em;
    line-height: 1.1em;
  }
    @media (max-width: 400px) {
    font-size: 0.8em;
      line-height: 1em;
   
  }
`;