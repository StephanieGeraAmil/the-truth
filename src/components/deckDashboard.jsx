import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getDecksOfUser, deleteDeck } from "./../actions/deckActions.js";
import { Link } from "react-router-dom";

import { FaPlus,FaMinus } from "react-icons/fa";

import styled from "styled-components";
import { Title, SubTitle } from "./shared_styles/styled_text";
import { StyledLink, StyledButton } from "./shared_styles/styled_buttons";


const StyledTitle = styled(Title)`
  font-size:  6vw;
  text-align:center;
  color:white;

  @media (max-width: 500px) {
    font-size: 3em;
  }
    @media (min-width: 1000px) {
    font-size: 4vw;
  }
`;
const StyledSubTitle = styled(SubTitle)`
  font-size:  2.5vw;
  text-align:center;


  @media (max-width: 500px) {
    font-size: 2em;
  }
    @media (min-width: 1000px) {
    font-size: 2vw;
  }
`;

const DeckDashboardContainer = styled.div`
    width: 100%;
    height:100%;


      z-index: -20;

      padding:0;
        display: flex;
        flex-direction:column;
  align-items: center;
  justify-content:center;
  @media (max-width: 500px) {
    height: 300vh;
  }
`;

const DeckListContainer = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  overflow:auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  z-index: 0;
`;
const DeckPreviewContainer = styled.div`
  height: 150px;
  width: 230px;
  border-radius: 10px;
  box-shadow: 2px 2px 7px #595959;
  position: relative;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    height: inherit;
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 7px #595959;
    position: absolute;
    left: -5px;
    top: 5px;
    z-index: -1;
    content: "";
    background-color: #fff;
  }
  &:before {
    height: inherit;
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 7px #595959;
    position: absolute;
    left: -10px;
    top: 10px;
    z-index: -2;
    content: "";
    background-color: #fff;
  }
`;

export const DeckDashboard = () => {
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const dispatch = useDispatch();
  const removeDeck = (deck) => {
    dispatch(deleteDeck(deck.id));
  };
  useEffect(()=>{ 
    if(decks.length===0){dispatch(getDecksOfUser("notUserYet"));}
  },[])

  return (
    <DeckDashboardContainer>
      <StyledTitle>Decks</StyledTitle>
      <DeckListContainer>
        {decks.length > 0 ? (
          decks.map((element) => (
            <div key={element.name + "deck"}>
              <DeckPreviewContainer>
                <StyledLink  to={`../the-truth/decks/${element.id}`}>
                  <StyledSubTitle >{element.name}</StyledSubTitle>
                </StyledLink>
                <StyledButton transparent onClick={() => removeDeck(element)}>
         <FaMinus style={{color: 'purple', fontSize: '1.5vw'}}/>
                </StyledButton>
              </DeckPreviewContainer>
            </div>
          ))
        ) : (
          <p>User without decks yet</p>
        )}
        <Link  to={`../the-truth/newDeck`}>
         <FaPlus style={{color: 'purple', fontSize: '1.5vw'}}/>
        </Link>
      </DeckListContainer>
    </DeckDashboardContainer>
  );
};
