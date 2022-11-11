import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { Link } from "react-router-dom";
import { deleteDeck } from "./../actions/deckActions.js";
import Add from "../assets/add.svg";
import Delete from "../assets/delete.svg";

import styled from "styled-components";
import { PageTitle } from "./shared_styles/styled_page_headigns";
import { StyledLink, StyledButton } from "./shared_styles/styled_buttons";
const DeckDashboardContainer = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  z-index: -1;
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
  font-size: 20px;
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

  return (
    <div>
      <PageTitle>Decks</PageTitle>
      <DeckDashboardContainer>
        {decks.length > 0 ? (
          decks.map((element) => (
            <div key={element.name + "deck"}>
              <DeckPreviewContainer>
                <StyledLink whiteButton to={`/decks/${element.id}`}>
                  <h1>{element.name}</h1>
                </StyledLink>
                <StyledButton topRight onClick={() => removeDeck(element)}>
                  <img src={Delete} alt="delete_deck" />
                </StyledButton>
              </DeckPreviewContainer>
            </div>
          ))
        ) : (
          <p>User without decks yet</p>
        )}
        <StyledLink whiteButton to={`/newDeck`}>
          <img src={Add} alt="add_deck" />
        </StyledLink>
      </DeckDashboardContainer>
    </div>
  );
};
