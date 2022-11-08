import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { deleteDeck } from "./../actions/deckActions.js";
import Plus from "../assets/plus.svg";

import styled from "styled-components";
import {PageTitle} from "./shared_styles/styled_page_headigns"
const DeckDashboardContainer = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
              <Link to={`/decks/${element.id}`}>
                <DeckPreviewContainer>{element.name}</DeckPreviewContainer>
              </Link>
              <button onClick={() => removeDeck(element)}>X</button>
            </div>
          ))
        ) : (
          <p>User without decks yet</p>
        )}
        <Link to={`/newDeck`}>
          {/* <button className="page_button" > */}
          <img src={Plus} alt="add_to_deck" />
        </Link>
        {/* </button> */}
      </DeckDashboardContainer>
    </div>
  );
};
